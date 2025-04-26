import ProjectCard from "@/components/card/project-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import MaskText from "@/components/core/mask-text";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import { usePopulatedProjectPosts } from "@/hooks/metrics/useProjectPopulated";

import { ProjectPostMeta, getAllProject } from "@/lib/api-project";

import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";

export default function ProjectPage({ posts }: { posts: ProjectPostMeta[] }) {
  const { populatedProjectPosts: projects } = usePopulatedProjectPosts(
    posts,
    "projects"
  );
  return (
    <main>
      <Navbar />
      <Layout className="h-full min-h-[85vh] flex-grow">
        <Seo
          templateTitle="Projects"
          description="Showcase of my experiences throughout my learning process."
        />
        <MaskText delay={0.5}>
          <Typography variant="h1" color="gradient" data-testid="projects">
            Projects
          </Typography>
        </MaskText>
        <MaskText delay={0.7}>
          <Typography variant="small" className="mt-3">
            Showcase of my experiences throughout my learning process.
          </Typography>
        </MaskText>

        <section className="w-full grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-10">
          {projects.map((item, index) => (
            <div key={index}>
              <ProjectCard
                title={item.title}
                desc={item.excerpt}
                date={item.date}
                img={item.img}
                tags={item.tags}
                href={item.href}
                views={item?.views}
              />
            </div>
          ))}
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllProject()
    .map((post) => post.meta)
    .reverse();
  return { props: { posts } };
}
