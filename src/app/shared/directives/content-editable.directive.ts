import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  forwardRef,
  Input
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contenteditable]',
  providers:
    [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ContentEditableDirective), multi: true }
    ]
})
export class ContentEditableDirective implements ControlValueAccessor {
  private onChange: (value: { text: string, html: string }) => void;
  private onTouched: () => void;
  private removeDisabledState: () => void;

  private get text() {
    return this.elementRef.nativeElement.textContent;
  }

  private get html() {
    return this.elementRef.nativeElement.innerHTML;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('input')
  callOnChange() {
    if (typeof this.onChange === 'function') {
      this.onChange({ text: this.text, html: this.html });
    }
  }

  @HostListener('blur')
  callOnTouched() {
    if (typeof this.onTouched === 'function') {
      this.onTouched();
    }
  }

  /**
   * Writes a new value to the element.
   * This method will be called by the forms API to write
   * to the view when programmatic (model -> view) changes are requested.
   *
   * See: [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor#members)
   */
  writeValue(value: { text: string, html: string }): void {
    const normalizedValue = value == null ? { text: '', html: '' } : value.html;
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', normalizedValue);
  }

  /**
   * Registers a callback function that should be called when
   * the control's value changes in the UI.
   *
   * This is called by the forms API on initialization so it can update
   * the form model when values propagate from the view (view -> model).
   */
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * This is called by the forms API on initialization so it can update the form model on blur.
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * This function is called by the forms API when the control status changes to or from "DISABLED".
   * Depending on the value, it should enable or disable the appropriate DOM element.
   */
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'true');
      this.removeDisabledState = this.renderer.listen(this.elementRef.nativeElement, 'keydown', this.listenerDisabledState);
    } else {
      if (this.removeDisabledState) {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        this.removeDisabledState();
      }
    }
  }

  private listenerDisabledState(e: KeyboardEvent) {
    e.preventDefault();
  }
}
