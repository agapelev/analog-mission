import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Мы должны ОБЯЗАТЕЛЬНО импортировать RouterOutlet,
  // чтобы он мог отображать страницы из папки pages
  imports: [RouterOutlet],
  template: `
  <main>
  <router-outlet></router-outlet>
  </main>
  `,
})
export class App {}
