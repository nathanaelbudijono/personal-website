import ProjectCard from "@/components/card/project-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import { usePopulatedProjectPosts } from "@/hooks/metrics/useProjectPopulated";

import { ProjectPostMeta, getAllProject } from "@/lib/api-project";

export default function ProjectPage({ posts }: { posts: ProjectPostMeta[] }) {
  const { populatedProjectPosts: projects, isLoading } =
    usePopulatedProjectPosts(posts, "projects");
  return (
    <Layout className="max-sm:h-full">
      <Seo
        templateTitle="Projects"
        description="Showcase of my experiences throughout my learning process."
      />
      <Typography variant="h1" color="gradient">
        Projects
      </Typography>
      <Typography variant="small" className="mt-3">
        Showcase of my experiences throughout my learning process.
      </Typography>
      <section className="w-full mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {projects.map((item, index) => (
          <Framer delay={index * 0.8} key={index}>
            <ProjectCard
              title={item.title}
              desc={item.excerpt}
              date={item.date}
              img={item.img}
              nextjs={item?.nextjs}
              postgre={item?.postgre}
              tailwind={item?.tailwind}
              typescript={item?.typescript}
              prisma={item?.prisma}
              href={item.href}
              views={item?.views}
            />
          </Framer>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllProject()
    .slice(0, 2)
    .map((post) => post.meta);
  return { props: { posts } };
}
