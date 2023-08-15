import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";

export default function Notfound() {
  return (
    <Layout className="gap-2 items-center justify-center text-center">
      <Seo title="Not Found" description="Not Found" />
      <img src={"/404.png"} className="sm:max-w-lg" alt="Not found" />
      <Typography variant="p">
        Oops, looks like you wondered to the wrong place.
      </Typography>
      <ButtonLink href="/" variant="primary">
        Return Home
      </ButtonLink>
    </Layout>
  );
}
