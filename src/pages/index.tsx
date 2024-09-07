import ProjectCard from "@/components/card/project-card";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";

import MainPage from "@/modules/home/main";

import { usePopulatedProjectPosts } from "@/hooks/metrics/useProjectPopulated";
import { ProjectPostMeta, getAllProject } from "@/lib/api-project";

import Image from "next/image";

import MaskText from "@/components/core/mask-text";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import cn from "@/type/clsxm";

export default function Home({ posts }: { posts: ProjectPostMeta[] }) {
  const { populatedProjectPosts: projects, isLoading } =
    usePopulatedProjectPosts(posts, "projects");
  return (
    <>
      <Navbar />
      <main>
        <Seo isBanner banner="https://nathanaelbudijono.vercel.app/logo.png" />

        <MainPage />
        <Layout className=" max-sm:h-full">
          <MaskText delay={0.5}>
            <Typography variant="h1" color="gradient">
              Featured
            </Typography>
          </MaskText>
          <MaskText delay={0.7}>
            <Typography variant="small" className="mt-3">
              My latest past projects.
            </Typography>
          </MaskText>

          <section className="w-full mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
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
          <div className="mt-5 w-fit z-10">
            <ArrowLink
              href="/projects"
              className="text-typography-100 dark:text-typography-800"
            >
              Read More
            </ArrowLink>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllProject()
    .reverse()
    .slice(0, 2)
    .map((post) => post.meta);
  return { props: { posts } };
}
