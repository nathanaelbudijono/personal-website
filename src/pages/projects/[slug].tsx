import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/atom-one-dark.css";

import {
  ProjectPostMeta,
  getPostProjectFromSlug,
  getSlugsProject,
} from "@/lib/api-project";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
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
  meta: ProjectPostMeta;
}

export default function ProjectContent({ post }: { post: MDXPost }) {
  return (
    <Layout className="h-full">
      <Seo templateTitle={post.meta.title} description={post.meta.excerpt} />
      <section className="overflow-hidden rounded-md shadow-sm">
        <img src={post.meta.img} className="object-cover w-full h-[45vh]" />
      </section>
      <section className="mt-5">
        <Typography variant="h2" color="gradient">
          {post.meta.title}
        </Typography>
        <div className="mt-5">
          <div className="flex justify-between items-center">
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
        </div>
        <div className="mt-5">
          <Typography variant="small" className="text-xs">
            Tech Stack used
          </Typography>
          <div className="flex gap-1 mt-2">
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
