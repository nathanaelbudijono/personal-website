import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const PROJECT_PATH = path.join(process.cwd(), "src/posts/projects");

export const getSlugsProject = (): string[] => {
  const projectPaths = sync(`${PROJECT_PATH}/*.mdx`);
  return projectPaths.map((path) => {
    const projectParts = path.split("/");
    const projectFileName = projectParts[projectParts.length - 1];
    const [slug, _ext] = projectFileName.split(".");
    return slug;
  });
};

export const getAllProject = () => {
  const projectPost = getSlugsProject()
    .map((slug) => getPostProjectFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return projectPost;
};

interface ProjectPost {
  content: string;
  meta: ProjectPostMeta;
}

export interface ProjectPostMeta {
  excerpt: string;
  date: string;
  tags: string[];
  title: string;
  img: string;
  slug: string;
  link: string;
  github: string;
}

export const getPostProjectFromSlug = (slug: string): ProjectPost => {
  const projectPostPath = path.join(PROJECT_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(projectPostPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt,
      title: data.title ?? "slug",
      date: (data.date ?? new Date()).toString(),
      tags: (data.tags ?? []).sort(),
      img: data.img ?? "",
      link: data.link,
      github: data.github,
    },
  };
};
