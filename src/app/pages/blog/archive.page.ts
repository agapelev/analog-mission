import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { DatePipe, NgIf } from '@angular/common';
import type PostAttributes from '../../post-attributes';

@Component({
  standalone: true,
  imports: [RouterLink, DatePipe, NgIf],
  template: `
  <div class="min-h-screen bg-[#020617] text-slate-200 py-24 px-6 font-sans">
  <div class="max-w-5xl mx-auto text-left">

  <nav class="mb-16">
  <a routerLink="/blog" class="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] hover:text-emerald-300 transition-all no-underline bg-emerald-950/20 px-6 py-3 rounded-full border border-emerald-900/50 cursor-pointer inline-block">
  ← К свежим мыслям
  </a>
  </nav>

  <header class="mb-20 border-b border-slate-800 pb-12">
  <h1 class="text-6xl md:text-8xl font-black italic mb-6 text-white uppercase tracking-tighter animate-gradient-text">
  АРХИВ <span class="text-slate-700">МЫСЛЕЙ</span>
  </h1>
  <p class="text-emerald-500 font-mono text-sm uppercase tracking-[0.5em]">Полный реестр цифровых откровений</p>
  </header>

  <div class="grid gap-6">
  @for (post of allPostsSorted; track post.attributes.slug + $index) {
    <article class="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-slate-800 bg-slate-900/20 hover:bg-emerald-950/10 hover:border-emerald-500/30 transition-all duration-500">
    <div class="flex flex-col text-left">
    <time class="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-3">
    {{ post.attributes.date | date: 'longDate' }}
    </time>
    <a [routerLink]="['/blog', post.attributes.slug]"
    class="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors no-underline uppercase tracking-tight">
    {{ post.attributes.title }}
    </a>
    </div>

    <div class="mt-6 md:mt-0 flex items-center">
    <a [routerLink]="['/blog', post.attributes.slug]" class="p-4 rounded-full bg-slate-800/50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
    </a>
    </div>
    </article>
  } @empty {
    <div class="text-center py-40 border-2 border-dashed border-slate-800 rounded-[3rem]">
    <p class="text-slate-600 font-mono italic uppercase tracking-widest">Архивы пусты. История еще не написана...</p>
    </div>
  }
  </div>
  </div>
  </div>
  `,
  styles: [`
  :host { display: block; }
  .animate-gradient-text {
    background: linear-gradient(90deg, #34d399, #22d3ee, #ffffff, #34d399);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 8s linear infinite;
  }
  @keyframes shine { to { background-position: 200% center; } }
  `]
})
export default class BlogArchivePage {
  private readonly allFiles = injectContentFiles<PostAttributes>();

  get allPostsSorted() {
    return [...this.allFiles].sort((a, b) =>
    new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime()
    );
  }
}
