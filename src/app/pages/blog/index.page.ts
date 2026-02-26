import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

// Метаданные страницы (Ваша находка по документации)
export const routeMeta: RouteMeta = {
  title: 'Блог | Цитадель Духа',
};

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">

    <nav class="w-full border-b border-slate-800 bg-slate-900/80 px-6 py-4 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center gap-3">
        <span class="text-xl">✍️</span>
        <span class="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">Module // Blog</span>
      </div>
      <a routerLink="/" class="text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">
        ← На главную
      </a>
    </nav>

    <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
      <div class="flex flex-col lg:flex-row gap-12">

        <div class="lg:w-2/3 space-y-10">
          <h1 class="text-6xl font-serif italic text-emerald-400 mb-12">Летопись</h1>

          <article class="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl shadow-xl hover:border-emerald-900/50 transition-all group">
            <div class="text-[10px] font-mono text-emerald-500/60 mb-4 uppercase tracking-[0.3em]">
              26 февраля 2026 // Архитектура
            </div>

            <h2 class="text-3xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
              Начало пути: Цитадель Духа в цифровую эпоху
            </h2>

            <p class="text-slate-400 leading-relaxed mb-8 italic">
              «Мы завершили создание фундамента. Теперь каждая страница — это открытое пространство, готовое принять в себя глубину размышлений...»
            </p>

            <a [routerLink]="['/blog', 'pervaya-zapis']"
               class="inline-block bg-emerald-600/10 border border-emerald-500/30 text-emerald-500 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
              Читать полностью →
            </a>
          </article>
        </div>

        <aside class="lg:w-1/3 space-y-8">
          <div class="bg-slate-900/20 border border-slate-800 p-8 rounded-3xl">
            <h3 class="text-white font-bold mb-6 border-b border-slate-800 pb-2 text-sm uppercase tracking-widest">Рубрики</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400">#ДУХОВНОСТЬ</span>
              <span class="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400">#КОД</span>
              <span class="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400">#МИССИЯ</span>
            </div>

            <div class="mt-10 pt-6 border-t border-slate-800">
              <p class="text-xs text-slate-500 italic leading-relaxed">
                «Слово — это плоть мысли».
                <br/>— Григорий Богослов
              </p>
            </div>
          </div>
        </aside>

      </div>
    </main>

    <footer class="w-full py-8 border-t border-slate-900 text-center">
      <p class="text-[10px] tracking-[0.3em] uppercase text-slate-600 font-sans">
        Шехина Облачная Миссия • 2026
      </p>
    </footer>

  </div>
  `
})
export default class BlogPage {}
