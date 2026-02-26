// Отредактируйте ваш src/app/post-attributes.ts вот так:
export default interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  date: string;
  coverImage?: string; // "?" означает: "может быть, а может и не быть"
  category: string;   // Теперь category официально разрешена, но не обязательна
}
