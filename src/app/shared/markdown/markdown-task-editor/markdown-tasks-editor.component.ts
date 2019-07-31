import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkdownTaskModel } from '../model/markdown.model';

@Component({
  selector: 'component-markdown-task-editor',
  templateUrl: './markdown-tasks-editor.component.html',
  styleUrls: ['./markdown-tasks-editor.component.scss']
})
export class MarkdownTasksEditorComponent implements OnInit, AfterViewInit {
  @Input() value = `
 - [x] (A) 2016-03-14 2016-03-18 1.323 +tag +tag2 @context due: 2016-05-30
 - 33
    - 1.23
    - 1.44
      - 1.55
      - 2.55
 - 23.34
    `;
  @Output() change = new EventEmitter();
  private tempValue: string;
  private taskIndex: number;
  private simplemde: any;
  private indexString: string;
  displayType = 'mindmap';

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const that = this;
    this.simplemde = new (window as any).SimpleMDE({
      autoDownloadFontAwesome: false,
      autosave: true,
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
    this.simplemde.value(this.value);
    this.simplemde.codemirror.on('change', () => {
      that.updateValue(that.simplemde.value());
    });
  }

  updateValue(value) {
    this.value = value;
    this.change.emit(value);
  }

  updateModel($event) {
    this.taskIndex = 0;
    this.tempValue = '';
    this.indexString = '';

    this.taskToMarkdownList($event);
    this.simplemde.value(this.tempValue);
  }

  taskToMarkdownList(tasks: any, hasChildren = false) {
    this.taskIndex++;

    for (const task of tasks) {
      if (task.item) {
        const item = task.item as MarkdownTaskModel;
        if (this.taskIndex > 0) {
          this.indexString = '  '.repeat(this.taskIndex);
        }
        this.tempValue += this.indexString + ` -`;
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
