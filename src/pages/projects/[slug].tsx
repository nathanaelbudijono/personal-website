import * as React from "react";

import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import Giscus, { Repo } from "@giscus/react";

import useCloudinaryImage from "@/hooks/useCloudinaryImage";
import useScrollSpy from "@/hooks/useScrollSpy";

import {
  ProjectPostMeta,
  getPostProjectFromSlug,
  getSlugsProject,
} from "@/lib/api-project";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import Seo from "@/components/core/seo";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";
import Copy from "@/components/core/copy";
import YouTube from "@/components/core/youtube-iframe-mdx";
import ImageMdx from "@/components/core/image-mdx";
import ViewsMetric from "@/modules/metrics/project-view";
import IconTags from "@/components/core/icon-tag";
import Image from "next/image";
import TableOfContents, { HeadingScrollSpy } from "@/components/content/toc";
import { Toaster } from "react-hot-toast";

// import GiscusComment from "@/components/core/giscus";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectPostMeta;
}

export default function ProjectContent({ post }: { post: MDXPost }) {
  const publicId = post.meta.img;
  const [src, ready] = useCloudinaryImage(
    publicId,
    process.env.NEXT_PUBLIC_CLOUDNAME as string
  );

  // ----------- Start ScrollSpy Region ------------
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll("h1,h2");

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace("H", "");
      const text = heading.textContent + "";

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [post.meta.slug]);
  // ----------- End ScrollSpy Region ------------
  return (
    <Layout className="max-sm:h-full">
      <Seo
        templateTitle={post.meta.title}
        description={post.meta.excerpt}
        siteName="Projects"
        image={post.meta.banner}
      />
      <main className="relative">
        <section className="overflow-hidden rounded-md shadow-sm">
          <div className="w-full relative">
            {src && (
              <Image
                src={src}
                alt="card picture"
                width={1440}
                height={792}
                objectFit="cover"
                className="text-xs"
                style={{
                  filter: !ready ? "blur(4px)" : "none",
                  transition: !ready ? "none" : "filter 0.3s ease-out",
                }}
              />
            )}
          </div>
        </section>
        <section className="mt-5">
          <Typography variant="h2">{post.meta.title}</Typography>
          <div className="flex justify-between items-center mt-5">
            <div className="w-fit flex gap-2">
              {post.meta.github ? (
                <UnderlineLink href={post.meta.github}>
                  <AiFillGithub className="text-typography-100 dark:text-typography-800" />
                  Repository
                </UnderlineLink>
              ) : (
                ""
              )}
              {post.meta.link ? (
                <UnderlineLink href={post.meta.link}>
                  <AiOutlineLink className="text-typography-100 dark:text-typography-800" />
                  Live link
                </UnderlineLink>
              ) : (
                ""
              )}
            </div>
            <Typography variant="small" className="text-xs">
              {post.meta.date.slice(0, 15)}
            </Typography>
          </div>

          <div className="mt-5">
            <ViewsMetric slug={post.meta.slug} />
          </div>

          <div className="mt-5">
            <Typography variant="small" className="text-xs">
              Tech Stack used
            </Typography>
            <IconTags tags={post.meta.tags} />
            <Typography variant="small2" color="muted" className="mt-5">
              {post.meta.excerpt}
            </Typography>
          </div>
          <div className="h-[1px] w-full bg-secondary-300 dark:bg-secondary-400 mt-5"></div>
        </section>
        <section className="mt-5 lg:grid lg:grid-cols-[auto,200px] lg:gap-5">
          <article>
            <MDXRemote
              {...post.source}
              components={{
                h1: (props) => <h1 className="h1" {...props} />,
                h2: (props) => <h2 className="h2" {...props} />,
                p: (props) => <p className="p" {...props} />,
                li: (props) => <li className="li" {...props} />,
                a: (props) => <a className="a" {...props} />,
                Copy,
                YouTube,
                ImageMdx,
              }}
            />
          </article>
          <aside className="py-4">
            <div className="sticky top-36">
              <TableOfContents
                toc={toc}
                minLevel={minLevel}
                activeSection={activeSection}
              />
            </div>
          </aside>
        </section>
        <section className="mt-10">
          <Giscus
            id="comment"
            repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ""}
            repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
            category="Announcements"
            categoryId="DIC_kwDOKG44yc4CY2TI"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="0"
            emitMetadata="0"
            inputPosition="bottom"
            theme="dark_dimmed"
            lang="en"
            loading="lazy"
          />
        </section>
        <Toaster />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostProjectFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugsProject().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
