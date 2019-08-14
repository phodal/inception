import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import marked from 'marked';
const Mousetrap = require('mousetrap');
import { SplitAreaDirective, SplitComponent } from 'angular-split';

import { MarkdownTaskModel } from '../model/markdown.model';
import MarkdownHelper from '../utils/markdown.helper';
import { MarkdownTaskItemService } from '../markdown-task-item/markdown-task-item.service';
import { MatSelectChange } from '@angular/material';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'component-markdown-task-editor',
  templateUrl: './markdown-tasks-editor.component.html',
  styleUrls: ['./markdown-tasks-editor.component.scss']
})
export class MarkdownTasksEditorComponent implements OnInit, AfterViewInit {
  @Input() textValue = '';
  @Output() change = new EventEmitter();

  @ViewChild('split', {static: false}) split: SplitComponent;
  @ViewChild('area1', {static: false}) area1: SplitAreaDirective;
  @ViewChild('area2', {static: false}) area2: SplitAreaDirective;

  direction = 'horizontal';
  sizes = {
    percent: {
      area1: 30,
      area2: 70,
    },
    pixel: {
      area1: 120,
      area2: '*',
      area3: 160,
    },
  };

  private tempValue: string;
  private taskIndex: number;
  private simplemde: any;
  private indexString: string;
  displayType = 'todo';
  tasks: any;

  constructor(private markdownTaskItemService: MarkdownTaskItemService, private storageService: StorageService) {
  }

  ngOnInit() {
    const renderType = this.storageService.getItemString('render.type');
    if (renderType) {
      this.displayType = renderType;
    }
  }

  ngAfterViewInit(): void {
    const that = this;
    if (!(window as any).SimpleMDE) {
      return;
    }
    this.simplemde = new (window as any).SimpleMDE({
      autoDownloadFontAwesome: false,
      autosave: {
        enabled: true,
        uniqueId: 'pholedge',
        delay: 1000,
      },
      spellChecker: false,
      autofocus: true,
      status: ['autosave', 'lines', 'words', 'cursor', {
        className: 'keystrokes',
        defaultValue(el) {
          this.keystrokes = 0;
          el.innerHTML = '0 Keystrokes';
        },
        onUpdate(el) {
          el.innerHTML = ++this.keystrokes + ' Keystrokes';
        }
      }],
      element: document.querySelector('.markdown-task-editor')
    });
    this.simplemde.value(this.textValue);

    this.simplemde.codemirror.on('blur', () => {
      that.updateValue(that.simplemde.value());
    });

    Mousetrap.bind(['command+s', 'ctrl+s'], (event) => {
      event.preventDefault();
      that.updateValue(that.simplemde.value());
    });

    setTimeout(() => {
      that.updateValue(that.textValue);
    }, 10);
  }

  changeRenderType($event: MatSelectChange) {
    this.storageService.setItemString('render.type', $event.value);
  }

  dragEnd(unit, {sizes}) {
    if (unit === 'percent') {
      this.sizes.percent.area1 = sizes[0];
      this.sizes.percent.area2 = sizes[1];
    } else if (unit === 'pixel') {
      this.sizes.pixel.area1 = sizes[0];
      this.sizes.pixel.area2 = sizes[1];
      this.sizes.pixel.area3 = sizes[2];
    }
  }

  updateValue(value) {
    this.textValue = value;
    const tokens = marked.lexer(this.textValue);
    this.tasks = MarkdownHelper.markdownToJSON(tokens, this.tasks);
    this.markdownTaskItemService.setTasks(this.tasks);

    this.change.emit(value);
  }

  updateModel($event) {
    this.taskIndex = 0;
    this.tempValue = '';
    this.indexString = '';

    this.taskToMarkdownList($event);
    this.tempValue = this.tempValue.replace(/\$[A-Za-z0-9_-]{7,14}/g, '');
    this.simplemde.value(this.tempValue);
    this.updateValue(this.tempValue);
  }

  taskToMarkdownList(tasks: any, hasChildren = false) {
    this.taskIndex++;

    for (const task of tasks) {
      if (task.item) {
        const item = task.item as MarkdownTaskModel;
        if (this.taskIndex > 1) {
          this.indexString = '  '.repeat(this.taskIndex);
        }
        this.tempValue += this.indexString + ` -`;
        if (item.id) {
          this.tempValue += ` $${item.id}`;
        }

        if (item.completed) {
          this.tempValue += ' [x]';
        } else {
          this.tempValue += ' [ ]';
        }

        if (item.priority) {
          this.tempValue += ` (${item.priority})`;
        }
        if (item.startDate) {
          this.tempValue += ` ${item.startDate}`;
        }
        if (item.endDate) {
          this.tempValue += ` ${item.endDate}`;
        }
        this.tempValue += ` ${item.text}`;
        if (item.tag) {
          for (const tag of item.tag) {
            this.tempValue += ` +${tag}`;
          }
        }
        if (item.context) {
          this.tempValue += ` @${item.context}`;
        }
        this.tempValue += `\n`;
        this.indexString = '';
      }

      if (task.childrens) {
        this.taskToMarkdownList(task.childrens, hasChildren);
      }
    }

    if (!hasChildren) {
      this.taskIndex--;
    }
  }
}
