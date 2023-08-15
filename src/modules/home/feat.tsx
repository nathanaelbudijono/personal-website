import ProjectCard from "@/components/card/project-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";

export default function Feat() {
  return (
    <Layout className="pt-[110px] -z-10 max-sm:h-full">
      <Framer>
        <Typography variant="h1" color="gradient">
          Featured
        </Typography>
        <Typography variant="small" className="mt-3">
          Collection of my past projects.
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
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    date: "2021-04-20",
    img: "https://images.unsplash.com/photo-1617711177653-4b0b0b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGJhY2tncm91bmQlMjBwcm9qZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    href: "/s",
    nextjs: true,
    postgre: true,
    tailwind: true,
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    date: "2021-04-20",
    img: "https://images.unsplash.com/photo-1617711177653-4b0b0b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGJhY2tncm91bmQlMjBwcm9qZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    href: "/s",
    nextjs: true,
  },
];
