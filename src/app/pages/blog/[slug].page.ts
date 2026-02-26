import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import PostAttributes from '../../post-attributes';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center">
      <ng-container *ngIf="post$ | async as post; else noPost">
        <header class="w-[98vw] py-20 px-10 md:px-20 bg-slate-900 border-b border-slate-800">
          <a routerLink="/blog" class="text-emerald-500 uppercase tracking-[0.5em] text-xs no-underline mb-10 inline-block">← В архив</a>
          <h1 class="text-6xl md:text-9xl font-black text-white italic tracking-tighter">{{ post.attributes.title }}</h1>
        </header>

        <main class="w-[98vw] px-10 md:px-20 py-20 text-left">
          <article class="prose prose-invert prose-2xl max-w-none w-full font-serif italic text-slate-300">
            <analog-markdown [content]="post.content"></analog-markdown>
          </article>
        </main>
      </ng-container>

      <ng-template #noPost>
        <div class="py-40 text-center uppercase font-black text-red-600 text-5xl">Свиток не найден</div>
      </ng-template>
    </div>
  `,
  styles: `
    :host { display: block; width: 100%; }
    ::ng-deep .prose { max-width: 100% !important; width: 100% !important; }
  `
})
export default class BlogPostPage {
  readonly post$ = injectContent<PostAttributes>();
}
