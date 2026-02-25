import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">

  <nav class="w-full border-b border-slate-800 bg-slate-900/50 px-8 py-4 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
  <div class="flex items-center gap-4">
  <span class="text-2xl">📜</span>
  <span class="text-sm font-mono tracking-widest text-slate-500 uppercase">Module // Spiritual Academy</span>
  </div>
  <a routerLink="/" class="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-400 transition-all uppercase">
  <span class="group-hover:-translate-x-1 transition-transform">←</span> На главную
  </a>
  </nav>

  <header class="w-full py-20 px-8 bg-gradient-to-b from-indigo-950/20 to-slate-950 border-b border-slate-900">
  <div class="max-w-[1920px] mx-auto">
  <h1 class="text-7xl font-serif italic text-indigo-400 tracking-tight leading-none">Школа Христа</h1>
  <p class="mt-6 text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
  «Познайте истину, и истина сделает вас свободными» (Ин. 8:32)
  </p>
  </div>
  </header>

  <main class="flex-grow w-full px-8 py-16">
  <div class="max-w-[1920px] mx-auto">

  <div class="flex items-center gap-6 mb-12">
  <h2 class="text-3xl font-bold text-white uppercase tracking-tighter">Доступные серии</h2>
  <div class="h-[1px] flex-grow bg-slate-800"></div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  <div class="group bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:bg-slate-900 transition-all border-l-4 border-l-indigo-600 shadow-2xl">
  <div class="text-xs font-mono text-indigo-500 mb-4 uppercase tracking-[0.2em]">Серия №1</div>
  <h3 class="text-2xl font-bold text-indigo-100 mb-4 group-hover:text-white transition-colors">Основы Трезвения</h3>
  <p class="text-slate-400 mb-8 leading-relaxed text-sm">Вводный курс по изучению помыслов, внимания и устройства внутреннего человека.</p>
  <button class="w-full bg-indigo-600/10 hover:bg-indigo-600 border border-indigo-600/30 text-indigo-400 hover:text-white py-3 rounded-xl font-bold transition-all uppercase text-xs tracking-widest">
  Открыть уроки
  </button>
  </div>

  <div class="bg-slate-900/20 border border-slate-800/50 p-8 rounded-3xl border-dashed flex flex-col items-center justify-center opacity-50">
  <span class="text-2xl mb-4 text-slate-700 font-mono">Series_02</span>
  <div class="text-xs text-slate-600 uppercase tracking-widest">В разработке</div>
  </div>

  <div class="bg-slate-900/20 border border-slate-800/50 p-8 rounded-3xl border-dashed flex flex-col items-center justify-center opacity-40">
  <span class="text-2xl mb-4 text-slate-700 font-mono">Series_03</span>
  <div class="text-xs text-slate-600 uppercase tracking-widest">В разработке</div>
  </div>

  <div class="bg-slate-900/20 border border-slate-800/50 p-8 rounded-3xl border-dashed flex flex-col items-center justify-center opacity-30">
  <span class="text-2xl mb-4 text-slate-700 font-mono">Series_04</span>
  <div class="text-xs text-slate-600 uppercase tracking-widest">В разработке</div>
  </div>

  </div>
  </div>
  </main>

  <section class="w-full py-16 px-8 border-t border-slate-900 bg-black/20">
  <div class="max-w-4xl mx-auto text-center italic text-slate-500 text-lg leading-relaxed">
  «Трезвение есть непрестанное водружение помысла у двери сердца...»
  <br><span class="text-xs font-mono uppercase mt-4 block text-slate-700">— Преподобный Исихий Иерусалимский</span>
  </div>
  </section>

  <footer class="w-full py-8 text-center text-slate-800 text-xs border-t border-slate-900 uppercase tracking-widest font-mono">
  School of Christ // Digital Annex // 2026
  </footer>
  </div>
  `,
})
export default class SchoolPage {}
