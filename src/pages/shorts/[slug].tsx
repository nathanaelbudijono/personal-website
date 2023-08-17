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

import { AiFillGithub } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiPrisma } from "react-icons/si";

import Seo from "@/components/core/seo";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";
import Tag from "@/components/core/tags";
import Copy from "@/components/core/copy";
import YouTube from "@/components/core/youtube-iframe-mdx";
import ImageMdx from "@/components/core/image-mdx";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ShortsPostMeta;
}

export default function ProjectContent({ post }: { post: MDXPost }) {
  return (
    <Layout className="h-full">
      <Seo
        templateTitle={post.meta.title}
        description={post.meta.excerpt}
        siteName="Shorts"
      />
      <section>
        <Typography variant="h2" color="gradient">
          {post.meta.title}
        </Typography>
        <div className="mt-5 flex justify-between">
          <div>
            <Typography variant="small" className="text-xs">
              Tech Stack used
            </Typography>
            <div className="mt-2 flex gap-2">
              {post.meta.nextjs === "y" && (
                <Tag leftIcon={TbBrandNextjs}>nextjs</Tag>
              )}
              {post.meta.postgre === "y" ? (
                <Tag leftIcon={BiLogoPostgresql} color="postgre">
                  postgre
                </Tag>
              ) : (
                ""
              )}
              {post.meta.typescript === "y" ? (
                <Tag leftIcon={BiLogoTypescript} color="typescript">
                  typescript
                </Tag>
              ) : (
                ""
              )}
              {post.meta.tailwind === "y" ? (
                <Tag leftIcon={BiLogoTailwindCss} color="tailwind">
                  tailwind
                </Tag>
              ) : (
                ""
              )}
              {post.meta.prisma === "y" ? (
                <Tag leftIcon={SiPrisma} color="prisma">
                  prisma
                </Tag>
              ) : (
                ""
              )}
            </div>
          </div>
          <Typography variant="small" className="text-xs">
            {post.meta.date}
          </Typography>
        </div>
        <Typography variant="small" color="muted" className="mt-5">
          {post.meta.excerpt}
        </Typography>
        <div className="h-[1px] w-full bg-primary-400 mt-5"></div>
      </section>
      <section className="mt-5">
        <MDXRemote
          {...post.source}
          components={{
            h1: (props) => <h1 className="h1" {...props} />,
            p: (props) => <p className="p" {...props} />,
            li: (props) => <li className="li" {...props} />,
            Copy,
            YouTube,
            ImageMdx,
          }}
        />
      </section>
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