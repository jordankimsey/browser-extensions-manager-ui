import { Component } from '@angular/core';
import { Button } from './button';

@Component({
  selector: 'app-title',
  imports: [Button],
  template: `<div class="flex items-center justify-between">
    <h1 class="text-2xl font-bold dark:text-white">Extensions List</h1>
    <div class="flex gap-4">
      <app-button> All </app-button>
      <app-button> Active </app-button>
      <app-button> Inactive </app-button>
    </div>
  </div>`,
})
export class Title {}
