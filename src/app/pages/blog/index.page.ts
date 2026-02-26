import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';

// Описываем структуру данных (Frontmatter)
export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  date: string;
  category?: string; // Добавим категорию для гибкости
}

@Component({
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
  <nav class="w-full border-b border-slate-800 bg-slate-900/50 px-8 py-4 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
  <div class="flex items-center gap-4">
  <span class="text-2xl">✍️</span>
  <span class="text-sm font-mono tracking-widest text-slate-500 uppercase">Module // Public Thoughts</span>
  </div>
  <a routerLink="/" class="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-all uppercase">
  <span class="group-hover:-translate-x-1 transition-transform">←</span> На главную
  </a>
  </nav>

  <header class="w-full py-20 px-8 bg-gradient-to-b from-emerald-950/20 to-slate-950 border-b border-slate-900">
  <div class="max-w-[1920px] mx-auto">
  <h1 class="text-7xl font-serif italic text-emerald-400 tracking-tight leading-none">Блог Мыслей</h1>
  <p class="mt-6 text-2xl text-slate-400 font-light max-w-3xl leading-relaxed">
  Размышления о духовной жизни, технологиях и пути человека в современном мире.
  </p>
  </div>
  </header>

  <main class="flex-grow w-full px-8 py-16">
  <div class="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">

  <div class="lg:w-3/4 space-y-12">
  <article *ngFor="let post of posts" class="group bg-slate-900/30 border border-slate-800/60 p-10 rounded-3xl hover:bg-slate-900/60 transition-all duration-500 shadow-2xl overflow-hidden relative">
  <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-all"></div>

  <div class="flex items-center gap-4 text-xs font-mono text-emerald-500/70 mb-6 uppercase tracking-widest">
  <span>{{ post.attributes.date }}</span>
  <span class="w-12 h-[1px] bg-slate-800"></span>
  <span>{{ post.attributes.category || 'Общее' }}</span>
  </div>

  <h2 class="text-4xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors leading-tight">
  {{ post.attributes.title }}
  </h2>

  <p class="text-slate-400 text-lg leading-relaxed mb-8 max-w-4xl italic">
  {{ post.attributes.description }}
  </p>

  <a [routerLink]="['/blog', post.attributes.slug]" class="flex items-center gap-2 text-sm font-black text-emerald-500 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
  Читать полностью <span>→</span>
  </a>
  </article>
  </div>

  <aside class="lg:w-1/4 space-y-8">
  <div class="bg-slate-900/20 border border-slate-800 p-8 rounded-3xl">
  <h3 class="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6">Категории</h3>
  <ul class="space-y-4 text-sm text-slate-400">
  <li class="hover:text-emerald-300 cursor-pointer transition-colors flex justify-between">
  <span>Трезвение</span> <span class="text-slate-700 font-mono">12</span>
  </li>
  <li class="hover:text-emerald-300 cursor-pointer transition-colors flex justify-between">
  <span>Разработка</span> <span class="text-slate-700 font-mono">08</span>
  </li>
  </ul>
  </div>
  <div class="p-8 border border-slate-900 rounded-3xl text-center italic text-slate-600 text-sm leading-relaxed">
  «Слово — это одежда мысли, пусть она будет достойной».
  </div>
  </aside>
  </div>
  </main>

  <footer class="w-full py-12 text-center border-t border-slate-900 bg-slate-950">
  <p class="text-[11px] md:text-sm tracking-[0.3em] uppercase text-slate-300 font-mono font-medium">
  СЛОВО // ЦИФРОВОЕ ОТРАЖЕНИЕ // 2026
  </p>
  </footer>
  </div>
  `,
})
export default class BlogPage {
  // Автоматически подгружаем файлы из папки blog
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
  contentFile.filename.includes('/src/content/blog/')
  );
}
