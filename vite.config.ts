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
      tailwindcss(),
                                           analog({
                                             // 1. Включаем расширенный режим контента для Shiki
                                             content: {
                                               highlighter: 'shiki',
                                             },
                                             static: true,
                                             ssr: false,
                                             nitro: {
                                               preset: 'cloudflare-pages',
                                               output: {
                                                 dir: '.output',
                                                 publicDir: '.output/public',
                                                   serverDir: '.output/server',
                                               },
                                             },
                                             prerender: {
                                               // 2. Включаем автопоиск подстраниц блога
                                               discover: true,
                                               routes: async () => {
                                                 return [
                                                   '/',
                                                   '/blog',
                                                   '/school',
                                                   '/journal',
                                                   '/web-arystan',
                                                 ];
                                               },
                                               sitemap: {
                                                 host: 'https://analog-mission.pages.dev',
                                               },
                                             },
                                           }),
    ],
    // 3. Убрали assetsInclude для .md, чтобы не мешать плагину Analog
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
