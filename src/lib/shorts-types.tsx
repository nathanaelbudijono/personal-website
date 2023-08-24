export type ShortsPost = {
  content: string;
  meta: ShortsPostMeta;
};

export type ShortsPostMeta = {
  excerpt: string;
  date: string;
  tags: string[];
  title: string;
  slug: string;
  href: string;
  id: number;
};

export type PopulatedShorts = {
  views: number | string;
} & ShortsPostMeta;
