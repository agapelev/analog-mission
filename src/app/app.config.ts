import { ApplicationConfig } from '@angular/core';
import { provideFileRouter } from '@analogjs/router'; // Именно FileRouter!
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { withNavigationErrorHandler } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    // Добавляем отслеживание ошибок навигации
    provideFileRouter(withNavigationErrorHandler((e) => console.error('Ошибка роутера:', e))),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideContent(withMarkdownRenderer()),
  ],
};
