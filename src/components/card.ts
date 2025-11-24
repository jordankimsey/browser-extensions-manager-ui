import { Component, Input } from '@angular/core';
import { Button } from './button';
@Component({
  selector: 'app-card',
  imports: [Button],
  template: `
    <div
      class="flex flex-col justify-between bg-neutral-0 dark:bg-neutral-700 dark:text-neutral-300 w-full p-4 rounded-2xl min-h-40"
    >
      <div class="flex">
        <div><img src="{{ imgageSrc }}" /></div>
        <div class="px-4 pb-4">
          <div class="font-bold">{{ name }}</div>
          <div class=" text-neutral-600 dark:text-neutral-300">
            {{ description }}
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <app-button>Remove</app-button>
        <label class="flex items-center cursor-pointer">
          <!-- Hidden checkbox input -->
          <input type="checkbox" class="sr-only peer" />
          <!-- Switch track -->
          <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
      </div>
    </div>
  `,
})
export class Card {
  @Input() imgageSrc: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() isActive: boolean = false;
}

export type ExtensionsData = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};
