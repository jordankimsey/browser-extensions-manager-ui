import { Component, inject } from '@angular/core';
import { ThemeService } from '../app/services/theme';

@Component({
  selector: 'app-header',
  template: ` <div
    class="flex justify-between items-center rounded-xl bg-neutral-0 dark:bg-neutral-700 px-4 py-2 shadow-md"
  >
    <div>
      <img src="./assets/images/logo.svg" alt="" class="text-white" />
    </div>
    <div>
      <button
        (click)="themeService.updateTheme()"
        class="focus-visible:outline-2 focus-visible:outline-red-400 focus-visible:outline-offset-2  flex items-center justify-center hover:bg-neutral-300 cursor-pointer dark:hover:bg-neutral-500 bg-neutral-100 dark:bg-neutral-600  p-2 rounded-xl"
      >
        @if(themeService.themeSignal() === 'dark') {
        <img src="./assets/images/icon-sun.svg" alt="" />
        } @else {
        <img src="./assets/images/icon-moon.svg" alt="" />
        }
      </button>
    </div>
  </div>`,
})
export class Header {
  themeService: ThemeService = inject(ThemeService);
}
