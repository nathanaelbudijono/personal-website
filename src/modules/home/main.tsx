import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";
import UnstyledLink from "@/components/links/unstyled-link";

import cn from "@/type/clsxm";

import { AiFillLinkedin } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";

export default function MainPage() {
  return (
    <Layout className="overflow-hidden relative justify-center">
      <Framer>
        <section className="w-2/3 max-xs:w-full">
          <div className="flex gap-2 mb-5 max-sm:flex-col">
            <Typography variant="h1">Hi, you can call me</Typography>{" "}
            <Typography variant="h1" color="gradient" data-testid="name">
              Nathan!
            </Typography>
          </div>
          <Typography variant="p">
            A Math enthusiast who dreams to build Computer Science with
            Mathematics. Currently, a front end developer at Looyal. I also
            enjoy writing short notes and documentation regarding certain past
            projects.
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
    </Layout>
  );
}

const Links = [
  {
    link: "https://nathanaelbudijono.vercel.app",
    title: "Upcoming",
    icon: RiMovie2Fill,
  },
  {
    link: "https://www.linkedin.com/in/nathanael-budijono/",
    title: "LinkedIn",
    icon: AiFillLinkedin,
  },
];
