import { ApplicationConfig } from '@angular/core';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // Эта строка превращает папки в ссылки. Без неё роутер "слеп"
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
};
