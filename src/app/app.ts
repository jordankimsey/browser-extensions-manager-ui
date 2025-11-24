import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeService } from './services/theme';
import { CommonModule } from '@angular/common';
import { Title } from '../components/title';
import { Card } from '../components/card';
import { EXTENSIONS_DATA } from '../../data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, CommonModule, Title, Card],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('browser-extensions-manager-ui');
  themeService: ThemeService = inject(ThemeService);
  extensions = EXTENSIONS_DATA;
}
