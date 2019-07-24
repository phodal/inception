import {
  Component,
  Input,
  forwardRef, HostListener, ElementRef, ViewChild, OnInit, AfterViewInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { TileModel } from '../../../core/model/tile.model';

@Component({
  selector: 'draggable-editable-section',
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

  @ViewChild('item', null) item: ElementRef;

  offset = { x: 0, y: 0 };
  disabled = false;
  editable = false;
  color;
  model: TileModel =
    {
      editable: false,
      content: { text: '', html: '' },
      background: '',
      position: {
        x: 0,
        y: 0
      }
    };
  position = { ...this.model.position };
  initialPosition = { ...this.model.position };

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
    if (this.model) {
      this.editable = this.model.editable;
      this.initialPosition = { ...this.model.position };
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
    const transform = this.item.nativeElement.style.transform;
    const regex = /translate3d\(\s?(?<x>[-]?\d*)px,\s?(?<y>[-]?\d*)px,\s?(?<z>[-]?\d*)px\)/;
    const values = regex.exec(transform);
    this.offset = { x: parseInt(values[1], 10), y: parseInt(values[2], 10) };

    this.model.position.x = this.initialPosition.x + this.offset.x;
    this.model.position.y = this.initialPosition.y + this.offset.y;

    this.onChange(this.model);
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
