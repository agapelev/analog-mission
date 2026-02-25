import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">

  <section class="w-full py-12 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
  <div class="w-24 h-24 mb-6 bg-indigo-500/20 rounded-full border border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]">
  <span class="text-4xl text-indigo-400">🛡️</span>
  </div>
  <h1 class="text-6xl font-black tracking-tighter uppercase text-white drop-shadow-2xl">
  Journal Buddy <span class="text-indigo-500 font-light">2.0</span>
  </h1>
  <p class="text-slate-500 mt-4 text-xl font-light tracking-[0.4em] uppercase">Цитадель Духа</p>
  </section>

  <main class="flex-grow w-full px-4 py-16 flex items-center justify-center">
  <div class="w-full max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  <a href="/school" target="_blank" rel="noopener" class="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-indigo-500 hover:bg-slate-900 transition-all duration-500 flex flex-col items-center text-center">
  <span class="text-5xl mb-6 group-hover:scale-110 transition-transform">📜</span>
  <h2 class="text-xl font-bold italic text-indigo-300">Школа Христа</h2>
  <p class="text-slate-500 mt-2 text-sm leading-relaxed">Курсы трезвения и архивы материалов.</p>
  </a>

  <a href="/journal" target="_blank" rel="noopener" class="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-cyan-500 hover:bg-slate-900 transition-all duration-500 flex flex-col items-center text-center">
  <span class="text-5xl mb-6 group-hover:scale-110 transition-transform">📔</span>
  <h2 class="text-xl font-bold italic text-cyan-300">Дневник</h2>
  <p class="text-slate-500 mt-2 text-sm leading-relaxed">Хронология помыслов и личные записи.</p>
  </a>

  <a href="/blog" target="_blank" rel="noopener" class="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500 hover:bg-slate-900 transition-all duration-500 flex flex-col items-center text-center">
  <span class="text-5xl mb-6 group-hover:scale-110 transition-transform">✍️</span>
  <h2 class="text-xl font-bold italic text-emerald-300">Блог</h2>
  <p class="text-slate-500 mt-2 text-sm leading-relaxed">Размышления на полях духовной жизни.</p>
  </a>

  <a href="/web-arystan" target="_blank" rel="noopener" class="group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-orange-500 hover:bg-slate-900 transition-all duration-500 flex flex-col items-center text-center">
  <span class="text-5xl mb-6 group-hover:scale-110 transition-transform">🦁</span>
  <h2 class="text-xl font-bold italic text-orange-300">Web Arystan</h2>
  <p class="text-slate-500 mt-2 text-sm leading-relaxed">Лаборатория разработки и студия.</p>
  </a>

  </div>
  </main>

  <section class="w-full py-12 px-6 bg-slate-950 border-t border-slate-900/50 flex justify-center">
  <div class="max-w-3xl text-center text-slate-500 font-serif italic text-lg leading-relaxed">
  «Внимай себе, чтобы не вкралось в сердце твое какое-либо беззаконное помышление...»
  </div>
  </section>

  <footer class="w-full py-6 text-center text-slate-700 text-xs border-t border-slate-900">
  &copy; 2026 Journal Buddy 2.0 &bull; На базе Analog.js &bull; Синергия веры и технологий
  </footer>
  </div>
  `,
})
export default class IndexPage {}
