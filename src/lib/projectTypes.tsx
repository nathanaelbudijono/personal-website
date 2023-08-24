export type ProjectPost = {
  content: string;
  meta: ProjectPostMeta;
};

export type ProjectPostMeta = {
  excerpt: string;
  date: string;
  tags: string[];
  title: string;
  img: string;
  slug: string;
  link: string;
  github: string;
  href: string;
  banner: string;
};

export type PopulatedProject = {
  views: number | string;
} & ProjectPostMeta;
