import ProjectCard from "@/components/card/project-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";

export default function Feat() {
  return (
    <Layout className=" max-sm:h-full">
      <Framer>
        <Typography variant="h1" color="gradient">
          Featured
        </Typography>
        <Typography variant="small" className="mt-3">
          Some of my past projects.
        </Typography>
      </Framer>
      <section className="w-full mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {project.map((item, index) => (
          <Framer delay={index * 0.8} key={index}>
            <ProjectCard
              title={item.title}
              desc={item.desc}
              date={item.date}
              img={item.img}
              nextjs={item?.nextjs}
              postgre={item?.postgre}
              tailwind={item?.tailwind}
              typescript={item?.typescript}
              prisma={item?.prisma}
              href={item.href}
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
  );
}

const project = [
  {
    title: "LNSW Ticketing",
    desc: "Ticketing is a reporting web page for LNSW users who encounter troubles.",
    date: "20-08-23",
    img: "/projects/lnsw.png",
    href: "/s",
    nextjs: true,
    typescript: true,
    postgre: true,
    tailwind: true,
    prisma: true,
  },
  {
    title: "Cloud Design System",
    desc: "Cloud Design System is a collection of reusable components for faster development.",
    date: "09-08-23",
    img: "/projects/ds.png",
    href: "/s",
    nextjs: true,
    typescript: true,
    tailwind: true,
  },
];
