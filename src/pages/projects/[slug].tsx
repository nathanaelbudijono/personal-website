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
} from "@/lib/api";
import Seo from "@/components/core/seo";
import Layout from "@/components/core/layout";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectPostMeta;
}

export default function ProjectContent({ post }: { post: MDXPost }) {
  return (
    <Layout>
      <Seo templateTitle={post.meta.title} description={post.meta.excerpt} />
      <h1 className="text-white">{post.meta.title}</h1>
      <img src={post.meta.img} />
      <MDXRemote {...post.source} />
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
