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
    // console.log(this.tasks);
    this.subject.next(this.tasks);
  }

  // Refs: http://bl.ocks.org/jdarling/2d4e84460d5f5df9c0ff
  ngOnInit(): void {
  }

  /* tslint:disable */
  ngAfterViewInit(): void {
    var treeData =
      {
        'name': 'Top Level',
        'children': [
          {
            'name': 'Level 2: A',
            'children': [
              { 'name': 'Son of A' },
              { 'name': 'Daughter of A' }
            ]
          },
          { 'name': 'Level 2: B' }
        ]
      };

    let updateData = function(json) {
      let root;
      let i = 0, l = json.children.length;
      (window as any).data = root = json;
      root.x0 = 200;
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

      return root;
    };
    treeData = updateData(treeData);
    console.log(treeData);

    // Set the dimensions and margins of the diagram
    var margin = { top: 20, right: 90, bottom: 30, left: 90 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
    var svg = d3.select('#d3-mindmap').append('svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var i = 0,
      duration = 750,
      root;

// declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
    root = d3.hierarchy(treeData, function(d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;

// Collapse after the second level
    root.children.forEach(collapse);

    update(root);

// Collapse the node and all it's children
    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function update(source) {

      // Assigns the x and y position for the nodes
      var treeData = treemap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      // Normalize for fixed-depth.
      nodes.forEach(function(d) {
        d.y = d.depth * 180;
      });

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll('g.node')
        .data(nodes, function(d) {
          return d.id || (d.id = ++i);
        });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function(d) {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', click);

      // Add Circle for the nodes
      nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', function(d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });

      // Add labels for the nodes
      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('x', function(d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr('text-anchor', function(d) {
          return d.children || d._children ? 'end' : 'start';
        })
        .text(function(d) {
          return d.data.name;
        });

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr('transform', function(d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style('fill', function(d) {
          return d._children ? 'lightsteelblue' : '#fff';
        })
        .attr('cursor', 'pointer');


      // Remove any exiting nodes
      var nodeExit = node.exit().transition()
        .duration(duration)
        .attr('transform', function(d) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('circle')
        .attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // ****************** links section ***************************

      // Update the links...
      var link = svg.selectAll('path.link')
        .data(links, function(d) {
          return d.id;
        });

      // Enter any new links at the parent's previous position.
      var linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function(d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d) {
          return diagonal(d, d.parent);
        });

      // Remove any exiting links
      var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {

        let path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

        return path;
      }

      // Toggle children on click.
      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }

    this.subject.asObservable().subscribe((value) => {

    });
  }

  changeNode() {
    this.onChange(this.value);
  }
}
