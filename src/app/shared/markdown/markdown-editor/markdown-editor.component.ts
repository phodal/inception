import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownTaskModel } from '../model/markdown.model';

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
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

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const that = this;
    this.simplemde = new (window as any).SimpleMDE({
      autoDownloadFontAwesome: false,
      autosave: true,
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
      element: document.querySelector('.markdown-editor')
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

  updateModel() {
    this.taskIndex = 0;
    this.tempValue = '';
    this.indexString = '';

    this.taskToMarkdownList(this.value);
    console.log(this.tempValue);
    this.simplemde.value(this.tempValue);
  }

  taskToMarkdownList(tasks: any) {
    let hasChildren = false;

    for (const task of tasks) {
      if (task.item) {
        const item = task.item as MarkdownTaskModel;
        this.tempValue += this.indexString + ` -`;
        if (item.completed) {
          this.tempValue += ' [x]';
        }
        if (item.priority) {
          this.tempValue += ` (${item.priority})`;
        }
        if (item.startDate) {
          this.tempValue += ` (${item.startDate})`;
        }
        if (item.endDate) {
          this.tempValue += ` (${item.endDate})`;
        }
        this.tempValue += ` ${item.text} \n`;

        this.indexString = '';
      }

      if (task.childrens) {
        hasChildren = true;
        this.taskIndex++;
        if (this.taskIndex > 0) {
          this.indexString = '  '.repeat(this.taskIndex);
        }

        this.taskToMarkdownList(task.childrens);
      }
    }

    if (!hasChildren) {
      this.taskIndex--;
    }
  }
}
