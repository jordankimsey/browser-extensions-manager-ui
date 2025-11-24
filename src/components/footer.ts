import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="flex justify-center dark:text-neutral-300">
    Challenge by &nbsp;
    <a
      class="dark:color-blue-300 hover:underline"
      style="color: hsl(228, 45%, 44%)"
      href="https://www.frontendmentor.io?ref=challenge"
      >Frontend Mentor</a
    >. Coded by &nbsp;<a
      href="https://github.com/jordankimsey"
      target="_blank"
      class="hover:underline dark:color-blue-300"
      style="color: hsl(228, 45%, 44%)"
      >Jordan Kimsey</a
    >.
  </div>`,
})
export class Footer {}
