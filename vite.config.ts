/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// Конфигурация Цитадели для Cloudflare Pages
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
    build: {
      target: ['es2020'],
    },
    resolve: {
      mainFields: ['module'],
    },
    plugins: [
      tailwindcss(),
                                           analog({
                                             content: true,
                                             static: true,
                                             ssr: true,
                                             nitro: {
                                               preset: 'cloudflare-pages',
                                               // ФИНАЛЬНЫЙ ШТРИХ: Гарантируем, что Nitro создаст правильную структуру
                                               output: {
                                                 dir: '.output',
                                                 publicDir: '.output/public',
                                                   serverDir: '.output/server',
                                               },
                                             },
                                             prerender: {
                                               routes: [
                                                 '/',
                                                 '/blog',
                                                 '/blog/pervaya-zapis', // ТЕПЕРЬ ЭТОТ МАРШРУТ УЗАКОНЕН
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
    // Защита от ложной интерпретации Markdown как скриптов
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
