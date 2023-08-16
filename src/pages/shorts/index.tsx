import ShortCard from "@/components/card/short-card";
import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ShortsCardContent from "@/constant/shorts-card-constant";
import useShorts from "@/lib/short-search";
import ShortSearchInput from "@/modules/shorts/short-search-input";

export default function ShortsPage() {
  const { shortsFilter, setSearch, search } = useShorts();
  return (
    <Layout>
      <Seo
        templateTitle="Shorts"
        description="Shorts are a small documentations about a specific topic."
      />
      <Framer>
        <Typography variant="h1" color="gradient">
          Shorts
        </Typography>
        <Typography variant="small" className="mt-3">
          Shorts are a collection of small documentations about a specific topic
          that I have learned.
        </Typography>
        <ShortSearchInput search={search} setSearch={setSearch} />
      </Framer>
      <section className="grid grid-cols-2 gap-5 mt-5 w-full max-sm:grid-cols-1">
        {shortsFilter.map((item, index) => (
          <Framer delay={index * 0.8} key={index}>
            <ShortCard
              title={item.title}
              desc={item.desc}
              date={item.date}
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
