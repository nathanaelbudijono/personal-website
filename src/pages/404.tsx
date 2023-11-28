import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";

import useCloudinaryImage from "@/hooks/useCloudinaryImage";

import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";

import Image from "next/image";

export default function Notfound() {
  const publicId = "personal-website/ruvvfd2mtfuuzktuw4ye";
  const [src, ready] = useCloudinaryImage(
    publicId,
    process.env.NEXT_PUBLIC_CLOUDNAME as string
  );
  return (
    <>
      <Navbar />
      <Layout className="gap-2 items-center justify-center text-center">
        <Seo title="Not Found" description="Not Found" />
        {/* <img src={"/404.png"} className="sm:max-w-lg" alt="Not found" /> */}
        {src && (
          <Image
            src={src}
            alt="Not found"
            width={450}
            height={450}
            objectFit="cover"
            className="text-xs sm:max-w-lg"
            style={{
              filter: !ready ? "blur(4px)" : "none",
              transition: !ready ? "none" : "filter 0.3s ease-out",
            }}
          />
        )}
        <Typography variant="p">
          Oops, looks like you wondered to the wrong place.
        </Typography>
        <ButtonLink href="/" variant="primary">
          Return Home
        </ButtonLink>
      </Layout>
      <Footer />
    </>
  );
}
