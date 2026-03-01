import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { RouterLink } from '@angular/router';

interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  date: string;
  coverImage?: string;
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent, DatePipe, RouterLink],
  template: `
  @if (post$ | async; as post) {
    <article class="min-h-screen bg-[#0f011a] text-stone-200 selection:bg-cyan-500/30">

    <nav class="fixed top-12 left-12 z-50">
    <a routerLink="/blog" class="text-cyan-500 hover:text-cyan-300 transition-all font-mono text-xs uppercase tracking-[0.3em] bg-[#0f011a]/80 p-3 rounded-xl backdrop-blur-md border border-cyan-900/50 shadow-2xl">
    ← Назад в Блог
    </a>
    </nav>

    <header class="relative h-[55vh] flex items-end p-8 md:p-16 border-b border-violet-900 overflow-hidden pt-32">
    @if (post.attributes.coverImage) {
      <img [src]="post.attributes.coverImage" class="absolute inset-0 w-full h-full object-cover opacity-30 scale-105">
    }
    <div class="absolute inset-0 bg-gradient-to-t from-[#0f011a] via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-5xl">
    <h1 class="text-5xl md:text-7xl font-black italic text-white uppercase font-serif tracking-tighter leading-tight drop-shadow-2xl animate-pulse-slow">
    {{ post.attributes.title }}
    </h1>
    <p class="text-cyan-400 font-mono mt-8 uppercase tracking-[0.5em] text-xs font-bold bg-cyan-950/30 inline-block px-4 py-2 rounded-full">
    {{ post.attributes.date | date: 'longDate' }}
    </p>
    </div>
    </header>

    <main class="max-w-4xl mx-auto py-24 px-6">
    <div class="prose prose-invert prose-cyan max-w-none
    prose-headings:font-serif prose-headings:italic prose-headings:tracking-tight
    prose-p:text-stone-300 prose-p:leading-relaxed prose-p:text-xl
    prose-img:rounded-[3rem] prose-img:border-2 prose-img:border-violet-900/50 shadow-2xl">
    <analog-markdown [content]="post.content" />
    </div>
    </main>

    <footer class="py-32 border-t border-violet-900/30 text-center">
    <div class="text-cyan-900/20 font-mono text-[10px] uppercase tracking-[1em]">
    End of Transmission | Citadel AI | 2026
    </div>
    </footer>
    </article>
  }
  `,
  styles: [`
  :host { display: block; }
  @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
  .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
  `]
})
export default class BlogPostPage {
  readonly post$ = injectContent<PostAttributes>('slug');
}
