import ProjectCard from "@/components/card/project-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ProjectCardConstant from "@/constant/project-card-constant";

export default function ProjectPage() {
  const { cards } = ProjectCardConstant;
  return (
    <Layout className="max-sm:h-full">
      <Framer>
        <Typography variant="h1" color="gradient">
          Projects
        </Typography>
        <Typography variant="small" className="mt-3">
          Collection of my past projects.
        </Typography>
      </Framer>
      <section className="w-full mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {cards.map((item, index) => (
          <Framer delay={index * 0.8} key={index}>
            <ProjectCard
              title={item.title}
              desc={item.desc}
              date={item.date}
              img={item.img}
              nextjs={item?.nextjs}
              postgre={item?.postgre}
              tailwind={item?.tailwind}
              href={item.href}
            />
          </Framer>
        ))}
      </section>
    </Layout>
  );
}
