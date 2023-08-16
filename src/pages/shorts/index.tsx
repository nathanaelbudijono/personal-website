import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

export default function ShortsPage() {
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
          Shorts are a small documentations about a specific topic that I have
          learned.
        </Typography>
      </Framer>
    </Layout>
  );
}
