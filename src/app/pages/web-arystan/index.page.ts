import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-mono selection:bg-orange-500/30">

  <nav class="w-full border-b border-orange-900/20 bg-black/40 px-8 py-4 flex justify-between items-center backdrop-blur-xl sticky top-0 z-50">
  <div class="flex items-center gap-4">
  <span class="text-2xl animate-pulse">🦁</span>
  <div class="flex flex-col">
  <span class="text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">Arystan_Engine</span>
  <span class="text-[10px] text-slate-600 uppercase tracking-widest">Status: Production_Ready</span>
  </div>
  </div>
  <a routerLink="/" class="group flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-orange-500 transition-all uppercase no-underline">
  <span class="group-hover:-translate-x-1 transition-transform">exit_to_home()</span>
  </a>
  </nav>

  <header class="w-full py-24 px-8 bg-gradient-to-b from-orange-950/10 to-slate-950 border-b border-slate-900 overflow-hidden relative text-left">
  <div class="absolute inset-0 opacity-10 pointer-events-none"
  style="background-image: radial-gradient(#f97316 0.5px, transparent 0.5px); background-size: 24px 24px;"></div>

  <div class="max-w-[1920px] mx-auto relative">
  <h1 class="text-8xl font-black text-orange-500 tracking-tighter uppercase leading-none">
  Web <span class="text-white opacity-90">Arystan</span>
  </h1>
  <p class="mt-8 text-xl text-slate-400 font-light max-w-4xl leading-relaxed font-sans">
  Лаборатория цифровых решений для духовных задач. Синтез Analog.js, Tailwind 4 и многолетнего опыта работы с ИИ-моделями.
  </p>
  </div>
  </header>

  <main class="flex-grow w-full px-8 py-16">
  <div class="max-w-[1920px] mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div class="bg-black/40 border border-slate-800 p-8 rounded-xl border-t-2 border-t-orange-600">
  <h3 class="text-orange-500 text-xs font-black uppercase tracking-widest mb-6">Core_Stack</h3>
  <ul class="space-y-3 text-sm text-slate-400 p-0 list-none">
  <li class="flex items-center gap-2">
  <span class="w-1.5 h-1.5 bg-orange-600 rounded-full"></span> Analog.js 2.2.3
  </li>
  <li class="flex items-center gap-2">
  <span class="w-1.5 h-1.5 bg-orange-600 rounded-full"></span> Angular 21 (Next-gen)
  </li>
  <li class="flex items-center gap-2">
  <span class="w-1.5 h-1.5 bg-orange-600 rounded-full"></span> Tailwind CSS v4
  </li>
  </ul>
  </div>

  <div class="bg-black/40 border border-slate-800 p-8 rounded-xl border-t-2 border-t-orange-600">
  <h3 class="text-orange-500 text-xs font-black uppercase tracking-widest mb-6">Active_Tasks</h3>
  <div class="space-y-4">
  <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div class="h-full bg-orange-600 w-full animate-pulse"></div>
  </div>
  <span class="text-[10px] text-slate-500 uppercase tracking-widest">Wide_Screen_Migration: 100%</span>
  </div>
  </div>

  <div class="bg-black/40 border border-slate-800 p-8 rounded-xl border-t-2 border-t-orange-600">
  <h3 class="text-orange-500 text-xs font-black uppercase tracking-widest mb-6">Project_Repo</h3>
  <p class="text-sm text-slate-500 italic">"Код должен быть чист, как совесть, и быстр, как помысел..."</p>
  </div>

  <div class="bg-slate-900 border border-orange-500/20 p-8 rounded-xl flex items-center justify-center group cursor-crosshair transition-all hover:bg-orange-500/5">
  <div class="text-center">
  <span class="text-3xl block mb-2 group-hover:scale-125 transition-transform italic text-orange-500">λ</span>
  <span class="text-[10px] text-slate-500 uppercase tracking-widest">Root_Access_Only</span>
  </div>
  </div>

  </div>
  </div>
  </main>

  <section class="w-full py-16 px-8 border-t border-slate-900 bg-orange-950/5">
  <div class="max-w-[1920px] mx-auto text-slate-600 text-sm leading-relaxed flex flex-col md:flex-row justify-between items-center gap-8 italic">
  <p>«Машина не имеет души, но в каждой строке кода отражается душа творца». — Л.Н.</p>
  <div class="flex gap-8 font-mono text-[10px] uppercase tracking-tighter">
  <span class="text-orange-900/50">#Faith</span>
  <span class="text-orange-900/50">#Code</span>
  <span class="text-orange-900/50">#Synergy</span>
  </div>
  </div>
  </section>

  <footer class="w-full py-16 text-center border-t border-slate-900 bg-slate-950">
  <p class="text-xs md:text-sm uppercase tracking-[0.3em] text-slate-200 font-medium px-4">
  Web Development Studio Web Arystan Kazakhstan <span class="text-orange-500 mx-2">&</span> Shekinah Cloud Mission
  </p>
  </footer>

  </div> `,
})
export default class ArystanPage {}
