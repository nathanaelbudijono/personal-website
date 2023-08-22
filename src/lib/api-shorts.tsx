import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const SHORTS_PATH = path.join(process.cwd(), "src/posts/shorts");

export const getSlugsShorts = (): string[] => {
  const shortsPaths = sync(`${SHORTS_PATH}/*.mdx`);
  return shortsPaths.map((path) => {
    const shortsParts = path.split("/");
    const shortsFileName = shortsParts[shortsParts.length - 1];
    const [slug, _ext] = shortsFileName.split(".");
    return slug;
  });
};

export const getAllShorts = () => {
  const shortsPost = getSlugsShorts()
    .map((slug) => getPostShortsFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    });
  return shortsPost;
};

interface ShortsPost {
  content: string;
  meta: ShortsPostMeta;
}

export interface ShortsPostMeta {
  excerpt: string;
  date: string;
  nextjs: string;
  postgre: string;
  tailwind: string;
  typescript: string;
  prisma: string;
  title: string;
  slug: string;
  href: string;
}

export const getPostShortsFromSlug = (slug: string): ShortsPost => {
  const shortsPostPath = path.join(SHORTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(shortsPostPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt,
      title: data.title ?? "slug",
      date: (data.date ?? new Date()).toString(),
      nextjs: data.nextjs,
      postgre: data.postgre,
      tailwind: data.tailwind,
      typescript: data.typescript,
      prisma: data.prisma,
      href: data.href ?? "",
    },
  };
};
