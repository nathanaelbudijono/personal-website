import { Framer } from "@/components/core/framer";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function MainPage() {
  return (
    <Layout>
      <Framer>
        <section>
          <div className="flex gap-2 mb-3">
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

      <section className="-z-[100] bg-gradient-to-r from-primary-400 to-primary-100 w-[380px] h-[200px] sm:w-[600px] sm:h-[230px] md:w-[650px] md:h-[260px] rounded-[30px] absolute bottom-5 -right-52 rotate-[40deg]"></section>
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
  {
    link: "https://www.instagram.com/nathanaelbudijono/?igshid=YmMyMTA2M2Y%3D",
    title: "Instagram",
    icon: AiFillInstagram,
  },
];
