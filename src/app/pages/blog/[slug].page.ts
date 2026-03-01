import { Component } from '@angular/core';
import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import PostAttributes from '../../post-attributes';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
  template: `
  <div class="min-h-screen bg-[#020617] text-zinc-300 flex flex-col items-center selection:bg-emerald-500/30">
  <ng-container *ngIf="post$ | async as post; else noPost">
  <header class="w-full py-24 px-6 md:px-12 bg-[#020617] border-b border-zinc-800 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
  <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20"></div>
  </div>

  <div class="max-w-4xl mx-auto relative z-10 text-left">
  <a routerLink="/blog" class="text-emerald-500 uppercase tracking-[0.5em] text-[10px] no-underline mb-12 inline-block hover:text-emerald-300 transition-colors font-mono font-bold">
  ← Назад в архив
  </a>
  <h1 class="text-4xl md:text-7xl font-bold text-zinc-100 italic tracking-tight leading-tight mb-8">
  {{ post.attributes.title }}
  </h1>
  <div class="flex items-center gap-4">
  <span class="h-px w-12 bg-emerald-500"></span>
  <span class="text-zinc-500 font-mono text-xs uppercase tracking-widest">{{ post.attributes.date }}</span>
  </div>
  </div>
  </header>

  <main class="w-full max-w-4xl px-6 md:px-8 py-20 text-left flex-grow">
  <article class="prose prose-invert prose-emerald prose-lg max-w-none w-full font-serif text-zinc-300 leading-relaxed
  prose-headings:text-zinc-100 prose-headings:italic prose-headings:font-bold
  prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-950/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
  prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-800">
  <analog-markdown [content]="post.content"></analog-markdown>
  </article>
  </main>

  <footer class="w-full border-t border-slate-800 bg-[#010409] py-12">
  <div class="max-w-4xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
  <div class="text-slate-400 font-mono text-[11px] uppercase tracking-widest text-center md:text-left">
  Разработано
  <a href="/web-arystan" target="_blank" class="text-emerald-500 hover:text-emerald-300 transition-colors font-bold">
  Web Development Studio Web Arystan
  </a>
  </div>
  <div class="text-slate-400 font-mono text-[11px] uppercase tracking-widest text-center md:text-right">
  При поддержке
  <a href="https://geminicli.com" target="_blank" class="text-cyan-500 hover:text-cyan-300 transition-colors font-bold">
  AI Gemini
  </a>
  <span class="ml-4 text-slate-600">| 2026</span>
  </div>
  </div>
  </footer>
  </ng-container>

  <ng-template #noPost>
  <div class="py-40 text-center uppercase font-black text-zinc-800 text-3xl tracking-[0.2em] font-mono animate-pulse">
  Свиток не обнаружен <br>
  <span class="text-sm font-light mt-4 block text-zinc-600 italic">Связь с Цитаделью прервана</span>
  </div>
  </ng-template>
  </div>
  `,
  styles: `
  :host { display: block; width: 100%; }
  ::ng-deep .prose { max-width: 100% !important; width: 100% !important; }
  ::ng-deep .prose p { margin-bottom: 1.5em; }
  `
})
export default class BlogPostPage {
  readonly post$ = injectContent<PostAttributes>('slug');
}
