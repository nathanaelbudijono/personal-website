import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";

export default function Feat() {
  return (
    <Layout className="pt-[120px]">
      <Typography variant="h1">Featured</Typography>
      <Typography variant="small" className="mt-3">
        Collection of my past projects.
      </Typography>
    </Layout>
  );
}
