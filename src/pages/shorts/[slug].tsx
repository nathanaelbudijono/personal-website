import * as React from "react";

import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/atom-one-dark.css";

import {
  ShortsPostMeta,
  getPostShortsFromSlug,
  getSlugsShorts,
} from "@/lib/api-shorts";

import Seo from "@/components/core/seo";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import Copy from "@/components/core/copy";
import YouTube from "@/components/core/youtube-iframe-mdx";
import ImageMdx from "@/components/core/image-mdx";
import ShortsViewsMetric from "@/modules/metrics/shorts-view";
import IconTags from "@/components/core/icon-tag";
import TableOfContents, { HeadingScrollSpy } from "@/components/content/toc";

import useScrollSpy from "@/hooks/useScrollSpy";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ShortsPostMeta;
}

export default function ShortsContent({ post }: { post: MDXPost }) {
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
    <Layout className="h-full">
      <Seo
        templateTitle={post.meta.title}
        description={post.meta.excerpt}
        siteName="Shorts"
      />
      <main>
        <section>
          <Typography variant="h2">{post.meta.title}</Typography>
          <div className="mt-5 flex justify-between items-start">
            <div>
              <Typography variant="small" className="text-xs">
                Tech Stack used
              </Typography>
              <IconTags tags={post.meta.tags} />
            </div>
            <Typography variant="small" className="text-xs">
              {post.meta.date}
            </Typography>
          </div>
          <div className="mt-5">
            <ShortsViewsMetric slug={post.meta.slug} />
          </div>
          <Typography variant="small2" color="muted" className="mt-5">
            {post.meta.excerpt}
          </Typography>
          <div className="h-[1px] w-full bg-primary-400 mt-5"></div>
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
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostShortsFromSlug(slug);
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
  const paths = getSlugsShorts().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
