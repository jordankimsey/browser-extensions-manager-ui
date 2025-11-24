import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<'light' | 'dark'>('light');
  setTheme(theme: 'light' | 'dark') {
    this.themeSignal.set(theme);
  }
  updateTheme() {
    this.themeSignal.update((value) => (value === 'light' ? 'dark' : 'light'));
  }
}
