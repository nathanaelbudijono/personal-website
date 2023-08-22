export type ShortsPost = {
  content: string;
  meta: ShortsPostMeta;
};

export type ShortsPostMeta = {
  excerpt: string;
  date: string;
  nextjs: string;
  postgre: string;
  tailwind: string;
  typescript: string;
  prisma: string;
  title: string;
  slug: string;
  link: string;
  github: string;
  href: string;
  banner: string;
};

export type PopulatedShorts = {
  views: number | string;
} & ShortsPostMeta;
