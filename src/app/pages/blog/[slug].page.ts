import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { PostAttributes } from './index.page'; // Импортируем описание данных

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
  <ng-container *ngIf="post$ | async as post">
  <article class="min-h-screen bg-slate-950 text-slate-200 p-8 md:p-24 font-sans">
  <div class="max-w-4xl mx-auto">

  <header class="mb-16">
  <time class="text-xs text-indigo-500 uppercase tracking-[0.3em] font-medium">
  {{ post.attributes.date }}
  </time>
  <h1 class="text-5xl md:text-7xl font-black text-white mt-4 mb-8 tracking-tighter italic leading-tight">
  {{ post.attributes.title }}
  </h1>
  <div class="h-1 w-24 bg-indigo-500"></div>
  </header>

  <div class="prose prose-invert prose-indigo lg:prose-xl font-serif italic leading-relaxed text-slate-300">
  <analog-markdown [content]="post.content"></analog-markdown>
  </div>

  <footer class="mt-24 pt-12 border-t border-slate-900">
  <p class="text-sm text-slate-500 italic">
  «Слово — это плоть мысли». Мы благодарим вас за созерцание.
  </p>
  </footer>

  </div>
  </article>
  </ng-container>
  `
})
export default class BlogPostPage {
  // Эта команда находит нужный файл .md по его имени (slug)
  readonly post$ = injectContent<PostAttributes>();
}
