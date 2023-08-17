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
import Seo from "@/components/core/seo";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectPostMeta;
}

export default function ProjectContent({ post }: { post: MDXPost }) {
  return (
    <Layout>
      <Seo templateTitle={post.meta.title} description={post.meta.excerpt} />
      <img
        src={post.meta.img}
        className="object-cover h-56 rounded-md shadow-sm"
      />
      <section className="mt-5">
        <Typography variant="h3" color="gradient">
          {post.meta.title}
        </Typography>
        <div className="mt-2">
          <Typography variant="small">
            Written on {post.meta.date.slice(0, 15)}, by Nathanael
          </Typography>
          <Typography variant="small" color="muted">
            {post.meta.excerpt}
          </Typography>
        </div>
        <div className="h-[1px] w-full bg-primary-400"></div>
      </section>
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
