import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Giscus from "@giscus/react";

import "highlight.js/styles/atom-one-dark.css";

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

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectPostMeta;
}

export default function ProjectContent({ post }: { post: MDXPost }) {
  return (
    <Layout className="h-full">
      <Seo
        templateTitle={post.meta.title}
        description={post.meta.excerpt}
        siteName="Projects"
        image={post.meta.banner}
      />
      <section className="overflow-hidden rounded-md shadow-sm">
        <img src={post.meta.img} className="object-cover w-full h-[45vh]" />
      </section>
      <section className="mt-5">
        <Typography variant="h2" color="gradient">
          {post.meta.title}
        </Typography>

        <div className="flex justify-between items-center mt-5">
          <div className="w-fit flex gap-2">
            <UnderlineLink href={post.meta.github}>
              <AiFillGithub className="text-typography-100 dark:text-typography-800" />
              Repository
            </UnderlineLink>
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
          <Typography variant="small" color="muted" className="mt-5">
            {post.meta.excerpt}
          </Typography>
        </div>
        <div className="h-[1px] w-full bg-primary-400 mt-5"></div>
      </section>
      <section className="mt-5">
        <MDXRemote
          {...post.source}
          components={{
            h1: (props) => <h1 className="h1" {...props} />,
            p: (props) => <p className="p" {...props} />,
            li: (props) => <li className="li" {...props} />,
            a: (props) => <a className="a" {...props} />,
            Copy,
            YouTube,
            ImageMdx,
          }}
        />
      </section>
      <section className="mt-5">
        <Giscus
          id="comments"
          repo="nathanaelbudijono/personal-website"
          repoId="R_kgDOKG44yQ"
          category="Announcements"
          categoryId="DIC_kwDOKG44yc4CY2TI"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark_dimmed"
          lang="en"
          loading="lazy"
        />
      </section>
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
