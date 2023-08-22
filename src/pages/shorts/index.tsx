import { useState } from "react";

import ShortCard from "@/components/card/short-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

import { ShortsPostMeta, getAllShorts } from "@/lib/api-shorts";
import { AiOutlineSearch } from "react-icons/ai";

import clsx from "clsx";
import { usePopulatedShortsPosts } from "@/hooks/metrics/useShortsPopulated";

export default function ShortsPage({ posts }: { posts: ShortsPostMeta[] }) {
  const [search, setSearch] = useState<string>("");
  const { populatedShortsPost: shorts } = usePopulatedShortsPosts(
    posts,
    "shorts"
  );
  const shortsFilter = shorts?.filter(
    (item) =>
      item?.title.toLowerCase().includes(search.toLowerCase()) ||
      item?.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      item?.date.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Layout>
      <Seo
        templateTitle="Shorts"
        description="Shorts are a small documentations about a specific topic."
      />
      <Typography variant="h1" color="gradient">
        Shorts
      </Typography>
      <Typography variant="small" className="mt-3">
        Shorts are a collection of small documentations about a specific topic
        that I have learned.
      </Typography>
      <section className="mt-5">
        <section className="relative flex items-ceter">
          <input
            placeholder="Type a keyword"
            className={clsx(
              "pl-3 py-1.5 rounded-md w-full shadown-sm text-sm",
              "transition-colors duration-200 bg-transparent",
              "border border-primary-400 text-typography-100",
              "active:text-typography-100",
              "dark:border-tertiary-300 dark:text-typography-800 dark:active:border-quaternary-500"
            )}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiOutlineSearch className="absolute right-2 top-2 focus:outline-none text-typography-400 opacity-80" />
        </section>
      </section>
      <section className="grid grid-cols-2 gap-5 mt-5 w-full max-sm:grid-cols-1">
        {shortsFilter.map((item, index) => (
          <Framer delay={index * 0.8} key={index}>
            <ShortCard
              title={item.title}
              desc={item.excerpt}
              date={item.date}
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
  const posts = getAllShorts().map((post) => post.meta);
  return { props: { posts } };
}
