/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
    build: {
      target: ['es2020'],
    },
    resolve: {
      mainFields: ['module'],
    },
    plugins: [
      // Попробуйте этот порядок: Tailwind ПЕРЕД Analog
      tailwindcss(),
                                           analog({
                                             content: true, // Это включает @analogjs/content
                                             static: true,
                                             ssr: true,
                                             nitro: {
                                               preset: 'cloudflare-pages',
                                             },
                                             prerender: {
                                               routes: [
                                                 '/',
                                                 '/blog',
                                                 '/school',
                                                 '/journal',
                                                 '/web-arystan'
                                               ],
                                               sitemap: {
                                                 host: 'https://ваша-цитадель.pages.dev',
                                               },
                                             },
                                           }),
    ],
    // Явно скажем Vite не пытаться самому обрабатывать Markdown как JS
    assetsInclude: ['**/*.md'],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
}));
