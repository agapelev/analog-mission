import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { RouteMeta } from '@analogjs/router';
import { NgFor } from '@angular/common';
import PostAttributes from '../../post-attributes';
import { UnifiedContentService } from '../../unified-content.service';

// Метаданные страницы (Ваша находка по документации)
export const routeMeta: RouteMeta = {
  title: 'Блог | Цитадель Духа',
};

@Component({
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
  <div class="min-h-screen bg-black text-zinc-300 flex flex-col font-sans">

  <nav class="w-full border-b border-zinc-800 bg-black/90 px-6 py-4 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
    <div class="flex items-center gap-3">
      <span class="text-xl">✍️</span>
      <span class="text-xs font-mono tracking-widest text-zinc-500 uppercase font-bold">Module // Blog</span>
    </div>
    <a routerLink="/" class="text-xs font-bold text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-widest">
      ← На главную
    </a>
  </nav>

  <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
    <div class="flex flex-col lg:flex-row gap-12">

      <div class="lg:w-2/3 space-y-8">
        <h1 class="text-4xl md:text-6xl font-serif italic text-zinc-100 mb-12">Летопись</h1>

        <div *ngFor="let post of posts" class="border border-zinc-800 p-6 rounded-lg hover:bg-zinc-900 transition-all group">
          <div class="text-[10px] font-mono text-zinc-500 mb-3 uppercase tracking-[0.3em]">
            {{ post.attributes.date }} // {{ post.attributes.category || 'Размышления' }}
          </div>

          <h2 class="text-xl md:text-2xl font-bold text-zinc-100 mb-4 group-hover:text-zinc-50 transition-colors">
            {{ post.attributes.title }}
          </h2>

          <p class="text-zinc-400 leading-relaxed mb-6">
            {{ post.attributes.description }}
          </p>

          <a [routerLink]="['/blog', post.attributes.slug]"
          class="inline-block border border-zinc-700 text-zinc-300 px-4 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-zinc-800 hover:text-zinc-100 transition-all">
            Читать полностью →
          </a>
        </div>
      </div>

      <aside class="lg:w-1/3 space-y-8">
        <div class="border border-zinc-800 p-6 rounded-lg">
          <h3 class="text-zinc-100 font-bold mb-4 border-b border-zinc-800 pb-2 text-sm uppercase tracking-widest">Рубрики</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-zinc-800 rounded-full text-[10px] text-zinc-400">#ДУХОВНОСТЬ</span>
            <span class="px-3 py-1 bg-zinc-800 rounded-full text-[10x] text-zinc-400">#КОД</span>
            <span class="px-3 py-1 bg-zinc-800 rounded-full text-[10px] text-zinc-400">#МИССИЯ</span>
          </div>

          <div class="mt-8 pt-6 border-t border-zinc-800">
            <p class="text-xs text-zinc-500 italic leading-relaxed">
              «Слово — это плоть мысли».
              <br/>— Григорий Богослов
            </p>
          </div>
        </div>
      </aside>

    </div>
  </main>

  <footer class="w-full py-8 border-t border-zinc-900 text-center">
    <p class="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-sans">
      Шехина Облачная Миссия • 2026
    </p>
  </footer>

  </div>
  `
})
export default class BlogPage {
  private contentService = inject(UnifiedContentService);
  readonly posts = this.contentService.getBlogPosts();
  
  constructor() {
    console.log('Компонент инициализирован для Господа!');
    console.log('Постов найдено:', this.posts.length);
  }
}