import ProjectCard from "@/components/card/project-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";

import MainPage from "@/modules/home/main";

import { ProjectPostMeta, getAllProject } from "@/lib/api-project";
import { usePopulatedProjectPosts } from "@/hooks/metrics/useProjectPopulated";

export default function Home({ posts }: { posts: ProjectPostMeta[] }) {
  const { populatedProjectPosts: projects, isLoading } =
    usePopulatedProjectPosts(posts, "projects");
  return (
    <main>
      <Seo isBanner banner="https://nathanaelbudijono.vercel.app/logo.png" />
      <MainPage />
      <Layout className=" max-sm:h-full">
        <Typography variant="h1" color="gradient">
          Featured
        </Typography>
        <Typography variant="small" className="mt-3">
          My latest past projects.
        </Typography>
        <section className="w-full mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          {projects.map((item, index) => (
            <Framer delay={index * 0.8} key={index}>
              <ProjectCard
                title={item.title}
                desc={item.excerpt}
                date={item.date}
                img={item.img}
                tags={item.tags}
                href={item.href}
                views={item?.views}
              />
            </Framer>
          ))}
        </section>
        <div className="mt-5 w-fit">
          <ArrowLink
            href="/projects"
            className="text-typography-100 dark:text-typography-800"
          >
            Read More
          </ArrowLink>
        </div>
      </Layout>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllProject()
    .slice(0, 2)
    .map((post) => post.meta);
  return { props: { posts } };
}
