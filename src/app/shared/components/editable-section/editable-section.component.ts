import {
  Component,
  Input,
  forwardRef, HostListener, ElementRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'editable-section',
  templateUrl: './editable-section.component.html',
  styleUrls: ['./editable-section.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableSectionComponent),
      multi: true
    }
  ]
})
export class EditableSectionComponent implements ControlValueAccessor {
  @Input() divStyle = { width: '100px', height: '100px' };
  @Input() editable = false;
  @Input() backgroundColors = null;
  @Input() showCommands = true;
  disabled = false;
  color;

  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  model = { content: { text: '', html: '' }, background: '#FFFFFF' };
  onChange = (rating: any) => {
  }
  onTouched = () => {
  }

  constructor(private elementRef: ElementRef) {
  }

  writeValue(value: any): void {
    this.model = value;
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.editable = !isDisabled;
  }

  modelChanged(modelPatch) {
    this.model = { ...this.model, ...modelPatch };
    this.onChange(this.model);
  }

  contentChanged(v) {
    this.model = { ...this.model, content: v };
    this.onChange(this.model);
  }

  bold() {
    document.execCommand('bold', false, '');
  }

  italic() {
    document.execCommand('italic', false, '');
  }

  link() {
    const url = prompt('Enter the URL');
    document.execCommand('createLink', false, url);
  }

  changeColor(color) {
    document.execCommand('foreColor', false, color);
  }

  dragEnd($event: CdkDragEnd<any>) {
    this.editable = false;
  }

  toggleEditable() {
    this.editable = !this.editable;
  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.classList && event.target.classList.contains('cdk-drag')) {
      this.editable = true;
    } else {
      this.editable = false;
    }
  }
}
