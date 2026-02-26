import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30">

  <div class="flex-grow w-full max-w-[1920px] mx-auto p-6 md:p-16 flex flex-col">

  <header class="mb-16 border-b border-slate-900 pb-10 flex justify-between items-end">
  <div>
  <h1 class="text-5xl font-black tracking-tighter uppercase text-white italic">
  Spirit <span class="text-cyan-500 font-light not-italic">Log</span>
  </h1>
  <p class="text-slate-500 mt-3 tracking-[0.4em] uppercase text-[10px] italic">Хроника внутреннего делания</p>
  </div>
  <a routerLink="/" class="text-[10px] text-slate-500 hover:text-cyan-400 uppercase tracking-[0.3em] transition-all border border-slate-900 px-4 py-2 rounded-full hover:bg-slate-900">
  ← Назад в Цитадель
  </a>
  </header>

  <div class="flex-grow flex flex-col items-center justify-center my-20">

  <div class="relative w-64 h-64 mb-12">
  <div class="absolute inset-0 bg-cyan-500/20 rounded-full blur-[60px] animate-pulse"></div>
  <div class="absolute inset-4 border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
  <div class="absolute inset-8 border border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
  <div class="flex items-center justify-center h-full">
  <span class="text-6xl filter drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">📔</span>
  </div>
  </div>

  <div class="max-w-5xl text-center">
  <p class="text-2xl md:text-4xl font-serif italic text-slate-300 leading-relaxed drop-shadow-sm">
  «В тишине сердца рождается <span class="text-cyan-400">слово</span>, <br>
  способное пронзить вечность...»
  </p>
  </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
  <div class="bg-slate-900/30 border border-slate-900 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all group">
  <time class="text-[9px] text-cyan-500/50 uppercase tracking-widest">25 Февраля 2026</time>
  <h3 class="text-xl font-bold mt-2 mb-4 italic group-hover:text-cyan-400 transition-colors">Фундамент Analog.js</h3>
  <p class="text-slate-400 italic font-serif leading-relaxed">
  Сегодня мы заложили основу структуры Цитадели. Путь от сложности к простоте требует терпения...
  </p>
  </div>

  <div class="bg-slate-900/30 border border-slate-900 p-8 rounded-[2rem] hover:border-indigo-500/30 transition-all group opacity-60">
  <time class="text-[9px] text-slate-600 uppercase tracking-widest">Архив</time>
  <h3 class="text-xl font-bold mt-2 mb-4 italic">Тишина и Код</h3>
  <p class="text-slate-500 italic font-serif leading-relaxed">
  Запись ожидает своего наполнения...
  </p>
  </div>
  </div>

  </div>

  <footer class="w-full py-10 text-center border-t border-slate-900 bg-slate-950">
  <p class="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-amber-200/70 font-medium px-4">
  © 2026 Shekinah Cloud Mission • На базе Analog.js • Синергия веры и технологий • При поддержке Gemini
  </p>
  </footer>

  </div>
  `,
  styles: [`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  `]
})
export default class JournalPage {}
