import { Injectable } from '@angular/core';

interface BlogPost {
  attributes: {
    title: string;
    slug: string;
    description: string;
    date: string;
    category?: string;
    coverImage?: string;
  };
  filename: string;
  content?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UnifiedContentService {
  
  getBlogPosts(): BlogPost[] {
    return [
      {
        attributes: {
          title: "Начало пути Цитадель Духа в цифровую эпоху",
          slug: "pervaya-zapis",
          description: "Манифест миссии Shekinah Cloud. О том, как соединить незыблемость веры с текучестью программного кода.",
          date: "26 февраля 2026",
          category: "Трезвение, Духовность, Миссия"
        },
        filename: "pervaya-zapis.md",
        content: this.getPostContent('pervaya-zapis')
      },
      {
        attributes: {
          title: "Инструкция правого помошника благочестия",
          slug: "instruktsiya-pobochnika",
          description: "Руководство для стоящих на правом крыле служения.",
          date: "26 февраля 2026",
          category: "Служение, Духовность"
        },
        filename: "instruktsiya-pobochnika.md",
        content: this.getPostContent('instruktsiya-pobochnika')
      },
      {
        attributes: {
          title: "Шпаргалка разработчика для самоцели",
          slug: "shpargalka",
          description: "Принципы кодинга согласно Божьему плану.",
          date: "26 февраля 2026",
          category: "Код, Миссия"
        },
        filename: "shpargalka.md",
        content: this.getPostContent('shpargalka')
      },
      {
        attributes: {
          title: "Манифест проекта Цитадель Духа",
          slug: "manifest",
          description: "Основополагающие принципы Цитадели Духа.",
          date: "26 февраля 2026",
          category: "Манифест, Духовность"
        },
        filename: "manifest.md",
        content: this.getPostContent('manifest')
      }
    ];
  }

  getBlogPost(slug: string): BlogPost | null {
    const post = this.getBlogPosts().find(p => p.attributes.slug === slug);
    if (!post) return null;
    
    return {
      ...post,
      content: this.getPostContent(slug)
    };
  }

  private getPostContent(slug: string): string {
    const contentMap = {
      'pervaya-zapis': '# Первое слово: Зачем мы здесь?\n\nПриветствую тебя, путник, в пространстве **«Цитадели Духа»**...',
      'instruktsiya-pobochnika': '# Инструкция правого помошника благочестия\n\nРуководство для стоящих на правом крыле...',
      'shpargalka': '# Шпаргалка разработчика для самоцели\n\nПринципы кодинга согласно Божьему плану...',
      'manifest': '# Манифест проекта Цитадель Духа\n\nОсновополагающие принципы Цитадели Духа...'
    };
    
    return contentMap[slug as keyof typeof contentMap] || '# Свиток не найден';
  }
}