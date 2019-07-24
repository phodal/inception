import {
  Component,
  Input,
  forwardRef, HostListener, ElementRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { TileModel } from '../../../core/model/tile.model';

@Component({
  selector: 'editable-section',
  templateUrl: './draggable-editable-section.component.html',
  styleUrls: ['./draggable-editable-section.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DraggableEditableSectionComponent),
      multi: true
    }
  ]
})
export class DraggableEditableSectionComponent implements ControlValueAccessor {
  @Input() backgroundColors = null;
  @Input() showCommands = true;

  offset = { x: 0, y: 0 };
  disabled = false;
  editable = false;
  color;
  model: TileModel =
    {
      editable: false,
      content: { text: '', html: '' },
      background: '#FFFFFF',
      position: {
        x: 0,
        y: 0
      }
    };
  position = { ...this.model.position };

  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  onChange(rating: any) {
  }

  onTouched() {
  }

  constructor(private elementRef: ElementRef) {
  }

  writeValue(value: TileModel): void {
    this.model = value;
    if (this.model && this.model.editable) {
      this.editable = this.model.editable;
    }
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

  onDragEnd(event: CdkDragEnd) {
    this.editable = false;
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };

    this.position.x = this.model.position.x + this.offset.x;
    this.position.y = this.model.position.y + this.offset.y;
  }

  enableEditable() {
    this.editable = true;
  }

  disableEditable() {
    this.editable = false;
  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.editable = false;
    }
  }
}
