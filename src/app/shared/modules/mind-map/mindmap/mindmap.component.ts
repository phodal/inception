import { AfterViewInit, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import MarkdownHelper from '../../../markdown/utils/markdown.helper';
import marked from 'marked';

const d3 = require('d3');
const Mousetrap = require('mousetrap');

@Component({
  selector: 'component-mindmap',
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MindmapComponent),
      multi: true
    }
  ]
})
export class MindmapComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  value: string;
  tasks: any;
  private subject = new Subject<any>();
  private disabled = false;

  onChange(value: any) {
  }

  onTouched() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
    if (!this.value) {
      return;
    }
    const tokens = marked.lexer(this.value);
    const markdownJson = MarkdownHelper.markdownToJSON(tokens, this.tasks);
    this.tasks = MarkdownHelper.toMindMapData(markdownJson);
    console.log(this.tasks);
    this.subject.next(this.tasks);
  }

  // Refs: http://bl.ocks.org/jdarling/2d4e84460d5f5df9c0ff
  ngOnInit(): void {
  }

  /* tslint:disable */
  ngAfterViewInit(): void {
    let m = [20, 120, 20, 120],
      // w = 1280 - m[1] - m[3],
      w = 900 - m[1] - m[3],
      h = 500 - m[0] - m[2],
      i = 0,
      l,
      root;

    let getDirection = function(data) {
      if (!data) {
        return 'root';
      }
      if (data.position) {
        return data.position;
      }
      return getDirection(data.parent);
    };

    let selectNode = function(target) {
      if (target) {
        let sel = d3.selectAll('#d3-mindmap svg .node').filter(function(d) {
          return d.id == target.id;
        })[0][0];
        if (sel) {
          select(sel);
        }
      }
    };

    Mousetrap.bind('left', function() {
      // left key pressed
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        let dir = getDirection(data);
        switch (dir) {
          case('right'):
          case('root'):
            selectNode(data.parent || data.left[0]);
            break;
          case('left'):
            selectNode((data.children || [])[0]);
            break;
          default:
            break;
        }
      }
    });
    Mousetrap.bind('right', function() {
      // right key pressed
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        let dir = getDirection(data);
        switch (dir) {
          case('left'):
          case('root'):
            selectNode(data.parent || data.right[0]);
            break;
          case('right'):
            selectNode((data.children || [])[0]);
            break;
          default:
            break;
        }
      }
    });
    Mousetrap.bind('up', function() {
      // up key pressed
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        let dir = getDirection(data);
        switch (dir) {
          case('root'):
            break;
          case('left'):
          case('right'):
            let p = data.parent, nl = p.children || [], i = 1;
            if (p[dir]) {
              nl = p[dir];
            }
            l = nl.length;
            for (; i < l; i++) {
              if (nl[i].id === data.id) {
                selectNode(nl[i - 1]);
                break;
              }
            }
            break;
        }
      }
      return false;
    });
    Mousetrap.bind('down', function() {
      // down key pressed
      // up key pressed
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        let dir = getDirection(data);
        switch (dir) {
          case('root'):
            break;
          case('left'):
          case('right'):
            let p = data.parent, nl = p.children || [], i = 0;
            if (p[dir]) {
              nl = p[dir];
            }
            l = nl.length;
            for (; i < l - 1; i++) {
              if (nl[i].id === data.id) {
                selectNode(nl[i + 1]);
                break;
              }
            }
            break;
        }
      }
      return false;
    });

    Mousetrap.bind(['ins', 'enter'], function() {
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        let dir = getDirection(data);
        let name = prompt('New name');
        if (name) {
          if (dir === 'root') {
            dir = data.right.length > data.left.length ? 'left' : 'right';
          }
          let cl = data[dir] || data.children || data._children;
          if (!cl) {
            cl = data.children = [];
          }
          cl.push({ name, position: dir });
          update(root);
        }
      }
    });

    Mousetrap.bind('del', function() {
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        let dir = getDirection(data);
        if (dir === 'root') {
          alert('Can\'t delete root');
          return;
        }
        let cl = data.parent[dir] || data.parent.children;
        if (!cl) {
          alert('Could not locate children');
          return;
        }
        let i = 0, l = cl.length;
        for (; i < l; i++) {
          if (cl[i].id === data.id) {
            if (confirm('Sure you want to delete ' + data.name + '?') === true) {
              cl.splice(i, 1);
            }
            break;
          }
        }
        selectNode(root);
        update(root);
      }
    });

    Mousetrap.bind('space', function() {
      let selection = d3.select('.node.selected')[0][0];
      if (selection) {
        let data = selection.__data__;
        data.name = prompt('New text:', data.name) || data.name;
        update(root);
      }
    });

    let select = function(node) {
      // Find previously selected, unselect
      d3.select('.selected').classed('selected', false);
      // Select current item
      d3.select(node).classed('selected', true);
    };

    let handleClick = function(d, index) {
      select(this);
      update(d);
    };

    let tree = d3.layout.tree()
      .size([h, w]);

    let diagonal = d3.svg.diagonal()
      .projection(function(d) {
        return [d.y, d.x];
      });

    let connector = diagonal;

    let vis = d3.select('#d3-mindmap')
      .append('svg:svg')
      .attr('width', w
        + m[1] + m[3])
      .attr('height', h + m[0] + m[2])
      .append('svg:g')
      // .attr("transform", "translate(" + m[3] + "," + m[0] + ")")
      .attr('transform', 'translate(' + (w / 2 + m[3]) + ',' + m[0] + ')')
    ;

// *
    let loadTasks = function(json) {
      if (!json) {
        return;
      }
      let i = 0, l = json.children.length;
      (window as any).data = root = json;
      root.x0 = h / 2;
      root.y0 = 0;

      json.left = [];
      json.right = [];
      for (; i < l; i++) {
        if (i % 2) {
          json.left.push(json.children[i]);
          json.children[i].position = 'left';
        } else {
          json.right.push(json.children[i]);
          json.children[i].position = 'right';
        }
      }
      update(root, true);
      selectNode(root);
    };
// */

// *
    let loadFreeMind = function(fileName) {
      d3.xml(fileName, 'application/xml', function(err, xml) {
        // Changes XML to JSON
        function xmlToJson(xml) {

          // Create the return object
          let obj = {};

          if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
              obj['@attributes'] = {};
              for (let j = 0; j < xml.attributes.length; j++) {
                let attribute = xml.attributes.item(j);
                obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
              }
            }
          } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
          }

          // do children
          if (xml.hasChildNodes()) {
            for (let i = 0; i < xml.childNodes.length; i++) {
              let item = xml.childNodes.item(i);
              let nodeName = item.nodeName;
              if (typeof (obj[nodeName]) == 'undefined') {
                obj[nodeName] = xmlToJson(item);
              } else {
                if (typeof (obj[nodeName].push) == 'undefined') {
                  let old = obj[nodeName];
                  obj[nodeName] = [];
                  obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
              }
            }
          }
          return obj;
        }

        let js = xmlToJson(xml);
        let data = (js as any).map.node;
        let parseData = function(data, direction, d?) {
          let key, i, l, dir = direction, node: any = {}, child;
          for (key in data['@attributes']) {
            node[key.toLowerCase()] = data['@attributes'][key];
          }
          node.direction = node.direction || dir;
          l = (data.node || []).length;
          if (l) {
            node.children = [];
            for (i = 0; i < l; i++) {
              dir = data.node[i]['@attributes'].POSITION || dir;
              child = parseData(data.node[i], {}, dir);
              (node[dir] = node[dir] || []).push(child);
              node.children.push(child);
            }
          }
          return node;
        };
        root = parseData(data, 'right');
        root.x0 = h / 2;
        root.y0 = w / 2;
        update(root, true);
        selectNode(root);
      });
    };
// */
    let toArray = function(item, arr?, d?) {
      arr = arr || [];
      let dr = d || 1;
      let i = 0, l = item.children ? item.children.length : 0;
      arr.push(item);
      if (item.position && item.position === 'left') {
        dr = -1;
      }
      item.y = dr * item.y;
      for (; i < l; i++) {
        toArray(item.children[i], arr, dr);
      }
      return arr;
    };

    function update(source, slow?) {
      let duration = (d3.event && d3.event.altKey) || slow ? 1000 : 100;

      // Compute the new tree layout.
      let nodesLeft = tree
        .size([h, (w / 2) - 20])
        .children(function(d) {
          return (d.depth === 0) ? d.left : d.children;
        })
        .nodes(root)
        .reverse();
      let nodesRight = tree
        .size([h, w / 2])
        .children(function(d) {
          return (d.depth === 0) ? d.right : d.children;
        })
        .nodes(root)
        .reverse();

      root.children = root.left.concat(root.right);
      root._children = null;
      let nodes = toArray(root);

      // Normalize for fixed-depth.
      // nodes.forEach(function(d) { d.y = d.depth * 180; });
      let node = vis.selectAll('g.node')
        .data(nodes, function(d) {
          return d.id || (d.id = ++i);
        });

      let nodeEnter = node.enter().append('svg:g')
        .attr('class', function(d) {
          return d.selected ? 'node selected' : 'node';
        })
        .attr('transform', function(d) {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', handleClick);

      nodeEnter.append('svg:circle')
        .attr('r', 1e-6);

      nodeEnter.append('svg:text')
        .attr('x', function(d) {
          return d.children || d._children ? -10 : 10;
        })

        .attr('dy', 14)
        .attr('text-anchor', 'middle')
        .text(function(d) {
          return (d.name || d.text);
        })
        .style('fill-opacity', 1);

      let nodeUpdate = node.transition()
        .duration(duration)
        .attr('transform', function(d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      nodeUpdate.select('text')
        .text(function(d) {
          return (d.name || d.text);
        });

      nodeUpdate.select('circle')
        .attr('r', 4.5);

      let nodeExit = node.exit().transition()
        .duration(duration)
        .attr('transform', function(d) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

      nodeExit.select('circle')
        .attr('r', 1e-6);

      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // Update the links…
      let link = vis.selectAll('path.link')
        .data(tree.links(nodes), function(d) {
          return d.target.id;
        });

      // Enter any new links at the parent's previous position.
      link.enter().insert('svg:path', 'g')
        .attr('class', 'link')
        .attr('d', function(d) {
          let o = { x: source.x0, y: source.y0 };
          return connector({ source: o, target: o });
        })
        .transition()
        .duration(duration)
        .attr('d', connector);

      // Transition links to their new position.
      link.transition()
        .duration(duration)
        .attr('d', connector);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
          let o = { x: source.x, y: source.y };
          return connector({ source: o, target: o });
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    loadTasks(this.tasks);

    this.subject.asObservable().subscribe((value) => {
      loadTasks(value);
    });
  }

  changeNode() {
    this.onChange(this.value);
  }
}
