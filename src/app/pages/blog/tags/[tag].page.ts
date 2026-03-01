import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, DatePipe } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { ActivatedRoute, RouterLink } from '@angular/router';
import type { RouteMeta } from '@analogjs/router';
import { map } from 'rxjs';

export const routeMeta: RouteMeta = {
  title: 'Теги | Мистическая Цитадель',
};

interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
}

@Component({
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink, DatePipe],
  template: `
  <div class="min-h-screen w-full bg-[#0f011a] text-stone-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden p-8 md:p-20 pt-40 text-left">

  <nav class="fixed top-12 left-12 z-50">
  <a routerLink="/blog" class="text-cyan-500 hover:text-cyan-300 transition-all font-mono text-xs uppercase tracking-[0.3em] font-bold bg-[#0f011a]/80 p-3 rounded-xl backdrop-blur-md border border-cyan-900/50 shadow-2xl">
  ← Назад в Блог
  </a>
  </nav>

  <header class="mb-24 mt-10">
  <div class="flex items-center gap-4 mb-8">
  <span class="h-1 w-16 bg-fuchsia-500 shadow-[0_0_15px_#d946ef]"></span>
  <span class="text-fuchsia-400 font-mono text-xs uppercase tracking-[0.5em] font-bold">Архив по ключу</span>
  </div>
  <h1 class="text-6xl md:text-8xl font-black italic animate-gradient-text-mystic tracking-tighter font-serif uppercase text-left">
  #{{ tag$ | async }}
  </h1>
  </header>

  <div class="grid gap-20 max-w-5xl">
  <ng-container *ngIf="(posts$ | async) as posts">
  @for (post of posts; track post.attributes.slug) {
    <article class="group relative pb-16 border-b border-violet-900/40 last:border-0 transition-all hover:border-cyan-500/30">
    <time class="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.5em] mb-6 block font-bold">
    {{ post.attributes.date | date: 'longDate' }}
    </time>

    <h2 class="text-4xl md:text-6xl font-bold group-hover:text-cyan-400 transition-colors font-serif leading-tight tracking-tight text-left">
    <a [routerLink]="['/blog', post.attributes.slug]">{{ post.attributes.title }}</a>
    </h2>

    <p class="text-stone-400 mt-8 text-xl leading-relaxed max-w-3xl line-clamp-3 font-light text-left">
    {{ post.attributes.description }}
    </p>

    <div class="mt-10 flex flex-wrap gap-4">
    @for (t of post.attributes.tags; track t) {
      <a [routerLink]="['/tags', t]"
      class="text-[10px] font-mono text-violet-400 border border-violet-800 px-5 py-2 rounded-full bg-violet-950/30 hover:border-cyan-500 transition-all uppercase font-bold cursor-pointer">
      #{{ t }}
      </a>
    }
    </div>
    </article>
  } @empty {
    <div class="py-32 text-center border-2 border-dashed border-violet-900/50 rounded-[4rem] bg-violet-950/10">
    <p class="text-stone-500 italic font-serif text-2xl tracking-wide">В свитках Цитадели пока нет записей с этим ключом...</p>
    </div>
  }
  </ng-container>
  </div>

  <footer class="mt-40 pt-16 border-t-2 border-violet-950/50 flex flex-col md:flex-row justify-between items-center gap-8">
  <div class="text-cyan-900/30 font-mono text-[10px] uppercase tracking-[0.8em]">
  Citadel AI | 2026
  </div>
  <div class="text-fuchsia-600/50 font-mono text-[9px] uppercase tracking-[0.5em] animate-pulse font-bold">
  Soli Deo Gloria
  </div>
  </footer>
  </div>
  `,
  styles: `
  :host { display: block; }
  .animate-gradient-text-mystic {
    background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 8s linear infinite;
  }
  @keyframes gradient-animation { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
  `
})
export default class TagPage {
  private readonly route = inject(ActivatedRoute);

  readonly tag$ = this.route.paramMap.pipe(
    map(params => params.get('tag'))
  );

  // ГЛАВНОЕ ИСПРАВЛЕНИЕ: фильтруем контент по расширению .md,
  // чтобы игнорировать текущую глубину маршрута.
  private readonly allPosts = injectContentFiles<PostAttributes>(file => file.filename.endsWith('.md'));

  readonly posts$ = this.tag$.pipe(
    map(tag => {
      const lowerTag = tag?.trim().toLowerCase();
      if (!lowerTag) return [];
      return this.allPosts.filter(post =>
      post.attributes.tags?.some(t => t.trim().toLowerCase() === lowerTag)
      );
    })
  );
}
