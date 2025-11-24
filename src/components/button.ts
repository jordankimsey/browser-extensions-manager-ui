import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button
    class="dark:text-neutral-300 focus-visible:outline-2 focus-visible:outline-red-400 focus-visible:outline-offset-2 dark:border-neutral-600 border-neutral-200 border   dark:bg-neutral-700 shadow-sm py-1 px-4 text-md bg-neutral-0 hover:bg-neutral-0/60 dark:hover:bg-neutral-600/95 rounded-2xl cursor-pointer"
  >
    <ng-content></ng-content>
  </button>`,
})
export class Button {
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // HTML button type
  @Input() disabled: boolean = false; // Disable state

  @Output() clicked = new EventEmitter<MouseEvent>(); // Emits when the button is clicked

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
