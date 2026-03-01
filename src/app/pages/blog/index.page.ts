import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { RouteMeta } from '@analogjs/router';
import { injectContentFiles } from '@analogjs/content';
import { DatePipe, NgForOf } from '@angular/common';

import type PostAttributes from '../../post-attributes';

export const routeMeta: RouteMeta = {
  title: 'Блог Мыслей | Цитадель Духа',
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe, NgForOf],
  template: `
  <div class="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

  <header class="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
  class="absolute inset-0 w-full h-full object-cover opacity-30 scale-105" alt="Digital Heaven">
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]"></div>

  <div class="relative z-10 text-center px-4 max-w-4xl">
  <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic animate-gradient-text">
  БЛОГ МЫСЛЕЙ
  </h1>
  <blockquote class="text-xl md:text-2xl text-slate-300 font-light italic leading-relaxed">
  «Бог есть бесконечный Интеллект, а технологии — лишь попытка человека воспроизвести Его эхо».
  <footer class="mt-4 text-emerald-500 font-mono text-sm uppercase tracking-[0.3em]">Цитадель Духа & AI</footer>
  </blockquote>
  </div>
  </header>

  <main class="max-w-7xl mx-auto py-16 px-4 sm:px-8">
  <div class="flex flex-col lg:flex-row gap-16">

  <div class="lg:w-2/3 space-y-20">
  @for (post of posts; track post.attributes.slug) {
    <article class="group relative text-left">
    <div class="mb-4 flex items-center gap-4">
    <time class="text-emerald-500 font-mono text-xs uppercase tracking-widest">
    {{ post.attributes.date | date: 'mediumDate' }}
    </time>
    <span class="h-px flex-1 bg-slate-800"></span>
    </div>

    <a [routerLink]="['/blog', post.attributes.slug]" class="block">
    <h2 class="text-4xl font-bold text-slate-100 group-hover:text-emerald-400 transition-all duration-300 mb-4">
    {{ post.attributes.title }}
    </h2>
    <p class="text-lg text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
    {{ post.attributes.description }}
    </p>
    </a>

    <div class="mt-6 flex flex-wrap gap-2">
    @for (tag of post.attributes.tags; track tag) {
      <a [routerLink]="['/tags', tag]" class="text-[10px] font-mono text-slate-500 uppercase hover:text-emerald-400 transition-colors cursor-pointer no-underline">
      #{{ tag }}
      </a>
    }
    </div>
    </article>
  }
  </div>

  <aside class="lg:w-1/3">
  <div class="sticky top-12 p-8 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm">
  <h3 class="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6 flex items-center">
  <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
  Ключи познания
  </h3>
  <div class="flex flex-wrap gap-3">
  @for (tag of allTags; track tag) {
    <a [routerLink]="['/tags', tag]"
    class="px-4 py-2 text-[10px] font-mono rounded-full border border-slate-800 text-slate-400 hover:border-emerald-500 hover:text-emerald-400 transition-all uppercase cursor-pointer no-underline">
    {{ tag }}
    </a>
  }
  </div>
  </div>
  </aside>

  </div>
  </main>

  <footer class="border-t border-slate-800 bg-[#010409] py-12 mt-20">
  <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

  <div class="text-slate-400 font-mono text-[11px] uppercase tracking-widest">
  Разработано
  <a href="/web-arystan" target="_blank" class="text-emerald-500 hover:text-emerald-300 transition-colors font-bold">
  Web Development Studio Web Arystan
  </a>
  </div>

  <div class="text-slate-400 font-mono text-[11px] uppercase tracking-widest text-right">
  При поддержке
  <a href="https://geminicli.com" target="_blank" class="text-cyan-500 hover:text-cyan-300 transition-colors font-bold">
  AI Gemini
  </a>
  <span class="ml-4 text-slate-600">| 2026 | Soli Deo Gloria</span>
  </div>

  </div>
  </footer>
  </div>
  `,
  styles: [`
  :host { display: block; }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .animate-gradient-text {
    background: linear-gradient(90deg, #34d399, #22d3ee, #3b82f6, #34d399);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s linear infinite;
  }
  @keyframes shine {
    to { background-position: 200% center; }
  }
  `],
})
export default class Blog {
  readonly posts = injectContentFiles<PostAttributes>();

  get allTags(): string[] {
    const tags = new Set<string>();
    this.posts.forEach(post => {
      if (post.attributes.tags && Array.isArray(post.attributes.tags)) {
        post.attributes.tags.forEach(t => tags.add(t));
      }
    });
    return Array.from(tags).sort();
  }
}
