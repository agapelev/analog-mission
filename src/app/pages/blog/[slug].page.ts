import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostAttributes } from './index.page';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
  template: `
  <ng-container *ngIf="post$ | async as post">
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans">
  <nav class="w-full border-b border-slate-900 px-8 py-4 flex justify-between items-center bg-slate-950">
  <a routerLink="/blog" class="text-xs font-bold text-slate-500 hover:text-emerald-400 transition-colors uppercase flex items-center gap-2">
  <span>←</span> Назад в летопись
  </a>
  </nav>

  <article class="max-w-4xl mx-auto py-20 px-6">
  <header class="mb-16">
  <div class="flex items-center gap-4 text-xs font-mono text-emerald-500/70 mb-4 uppercase tracking-[0.3em]">
  <span>{{ post.attributes.date }}</span>
  </div>
  <h1 class="text-5xl md:text-7xl font-serif italic text-white mb-8 leading-tight tracking-tight">
  {{ post.attributes.title }}
  </h1>
  <div class="h-[2px] w-24 bg-emerald-500/50"></div>
  </header>

  <div class="prose prose-invert prose-emerald lg:prose-xl font-serif leading-relaxed text-slate-300">
  <analog-markdown [content]="post.content"></analog-markdown>
  </div>

  <footer class="mt-24 pt-12 border-t border-slate-900">
  <p class="text-sm text-slate-500 italic font-light">
  «Слово — это плоть мысли». Благодарим за созерцание.
  </p>
  </footer>
  </article>
  </div>
  </ng-container>
  `
})
export default class BlogPostPage {
  readonly post$ = injectContent<PostAttributes>();
}
