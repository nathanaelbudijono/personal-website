import { useState } from "react";

import ShortCard from "@/components/card/short-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

import { ShortsPostMeta, getAllShorts } from "@/lib/api-shorts";
import { AiOutlineSearch } from "react-icons/ai";

import { usePopulatedShortsPosts } from "@/hooks/metrics/useShortsPopulated";
import SearchFilter from "@/components/core/searchFilter";
import SortListBox from "@/components/core/sort-list-box";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";

export default function ShortsPage({ posts }: { posts: ShortsPostMeta[] }) {
  const { populatedShortsPost: shorts } = usePopulatedShortsPosts(
    posts,
    "shorts"
  );

  const [filtered, setFiltered] = useState(() => shorts);
  const [selected, setSelected] = useState(() => "Sort by date");
  return (
    <>
      <Navbar />
      <Layout className="h-full">
        <Seo
          templateTitle="Shorts"
          description="Shorts are a small documentations about a specific topic."
        />
        <Typography variant="h1" color="gradient" data-testid="shorts">
          Shorts
        </Typography>
        <Typography variant="small" className="mt-3">
          Shorts are a collection of small documentations about a specific topic
          that I have learned.
        </Typography>
        <section className="mt-5">
          <section className="relative flex items-ceter">
            <div className="flex flex-col z-[100] w-full">
              <SearchFilter
                setFiltered={setFiltered}
                populatedPosts={shorts}
                selected={selected}
              />
              <SortListBox selected={selected} setSelected={setSelected} />
            </div>

            <AiOutlineSearch className="absolute right-2 top-2 focus:outline-none text-typography-400 opacity-80" />
          </section>
        </section>
        <section className="grid grid-cols-2 gap-5 mt-5 w-full max-sm:grid-cols-1">
          {filtered?.length > 0 ? (
            filtered?.map((item, index) => (
              <Framer delay={index * 0.3} key={index}>
                <ShortCard
                  title={item.title}
                  desc={item.excerpt}
                  date={item.date}
                  tags={item?.tags}
                  href={item.href}
                  views={item?.views}
                />
              </Framer>
            ))
          ) : (
            <div className="h-screen">
              <Typography variant="h4">
                Sorry, there are no such content.
              </Typography>
            </div>
          )}
        </section>
      </Layout>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllShorts().map((post) => post.meta);
  return { props: { posts } };
}
