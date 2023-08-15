import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import Box from "@/components/graphic/box";
import ButtonLink from "@/components/links/button-links";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function MainPage() {
  return (
    <Layout className="overflow-hidden mt-10">
      <Seo
        title="Home"
        description="A Math enthusiast who dreams to build Computer Science with Mathematics. Currently learning Software Development as a full-stack developer. I also enjoy writing blogs and documentation regarding certain past projects ."
      />
      <Framer>
        <section className="w-2/3 max-xs:w-full">
          <div className="flex gap-2 mb-5 max-sm:flex-col">
            <Typography variant="h1">Hi!, you can call me</Typography>{" "}
            <Typography variant="h1" color="gradient">
              Nathan.
            </Typography>
          </div>
          <Typography variant="p">
            A Math enthusiast who dreams to build Computer Science with
            Mathematics. Currently learning Software Development as a full-stack
            developer. I also enjoy writing blogs and documentation regarding
            certain past projects.
          </Typography>
          <Framer delay={0.5}>
            <div className="mt-5 flex gap-3">
              {Links.map((item, index) => (
                <Framer key={index} delay={index * 0.65}>
                  <ButtonLink
                    variant="outline"
                    href={item.link}
                    leftIcon={item.icon}
                  >
                    {item.title}
                  </ButtonLink>
                </Framer>
              ))}
            </div>
          </Framer>
        </section>
      </Framer>
      <Box variant="primary" />
    </Layout>
  );
}

const Links = [
  {
    link: "https://github.com/nathanaelbudijono",
    title: "Github",
    icon: AiFillGithub,
  },
  {
    link: "https://www.linkedin.com/in/nathanael-budijono/",
    title: "LinkedIn",
    icon: AiFillLinkedin,
  },
];
