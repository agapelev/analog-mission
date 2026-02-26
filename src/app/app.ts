import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <router-outlet />
  `,
  styles: `
  :host {
    display: block;
    width: 100%;
    min-height: 100vh;
    /* Мы удалили max-width и padding, чтобы Цитадель была величественной! */
  }
  `,
})
export class App {}
