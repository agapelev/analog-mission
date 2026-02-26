/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      // Для Cloudflare Pages лучше оставить SSR включенным,
      // это позволит использовать API и динамические функции в будущем
      ssr: true,
      // Настройка Nitro — это "двигатель" вашего сервера
      nitro: {
        preset: 'cloudflare-pages',
      },
      // Предварительная генерация путей (важно для SEO блога)
      prerender: {
        routes: [
          '/',
          '/blog',
          // Здесь можно добавить автоматическое сканирование постов,
          // но пока пропишем основные разделы нашей Цитадели
          '/school',
          '/journal',
          '/web-arystan'
        ],
        sitemap: {
          host: 'https://ваша-цитадель.pages.dev', // Замените на ваш будущий домен
        },
      },
    }),
    tailwindcss()
  ],
  // Тесты — это проверка крепости стен
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
}));
