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
  express: string;
  nodejs: string;
  title: string;
  slug: string;
  href: string;
};

export type PopulatedShorts = {
  views: number | string;
} & ShortsPostMeta;
