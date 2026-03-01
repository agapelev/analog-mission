import { Component, inject } from '@angular/core';
import { MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import PostAttributes from '../../post-attributes';
import { UnifiedContentService } from '../../unified-content.service';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
  template: `
    <div class="min-h-screen bg-black text-zinc-300 flex flex-col items-center">
      <ng-container *ngIf="post; else noPost">
        <header class="w-full py-16 px-6 md:px-12 bg-black border-b border-zinc-800">
          <a routerLink="/blog" class="text-zinc-400 uppercase tracking-[0.5em] text-xs no-underline mb-8 inline-block hover:text-zinc-100 transition-colors">← В архив</a>
          <h1 class="text-4xl md:text-7xl font-bold text-zinc-100 italic tracking-tight">{{ post.attributes.title }}</h1>
        </header>

        <main class="w-full max-w-4xl px-6 md:px-8 py-16 text-left">
          <article class="prose prose-invert prose-lg max-w-none w-full font-serif text-zinc-300 leading-relaxed">
            <analog-markdown [content]="post.content"></analog-markdown>
          </article>
        </main>
      </ng-container>

      <ng-template #noPost>
        <div class="py-40 text-center uppercase font-black text-zinc-500 text-3xl">Свиток не найден</div>
      </ng-template>
    </div>
  `,
  styles: `
    :host { display: block; width: 100%; }
    ::ng-deep .prose { max-width: 100% !important; width: 100% !important; }
  `
})
export default class BlogPostPage {
  private contentService = inject(UnifiedContentService);
  readonly post = this.contentService.getBlogPost('pervaya-zapis');
  
  constructor() {
    console.log('Страница поста инициализирована с молитвой!');
  }
}
