import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
  <div class="max-w-4xl mx-auto">
  <header class="mb-12 border-b border-slate-800 pb-8 flex justify-between items-end">
  <div>
  <h1 class="text-4xl font-serif italic text-cyan-400">📔 Личный Дневник</h1>
  <p class="text-slate-500 mt-2 tracking-widest uppercase text-xs">Хроника внутреннего делания</p>
  </div>
  <a routerLink="/" class="text-xs text-slate-600 hover:text-cyan-400 uppercase tracking-tighter transition-colors">на главную</a>
  </header>

  <div class="space-y-4">
  <div class="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl italic text-slate-300">
  "Сегодня в Analog.js мы заложили фундамент структуры..."
  </div>
  </div>
  </div>
  </div>
  `
})
export default class JournalPage {}
