import IconButton from "@/components/buttons/icon-button";
import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";
import UnstyledLink from "@/components/links/unstyled-link";

import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="max-md:px-6 text-center py-5 mt-5 max-w-4xl mx-auto">
        <section className="h-[1px] w-full bg-secondary-300 dark:bg-secondary-400"></section>
        <section className="max-w-4xl mx-auto flex h-[20vh] justify-center flex-col items-center gap-1">
          <div className="z-30">
            <Typography variant="small" className="text-xs">
              © {new Date().getFullYear()} by Nathanael
            </Typography>
            <div className="flex gap-[1.5px] items-center mt-1">
              <Typography variant="small" className="text-xs">
                Made
              </Typography>
              <Typography variant="small" className="text-xs">
                with
              </Typography>
              <UnderlineLink href="https://nextjs.org">NextJs</UnderlineLink>
              <Typography variant="small" className="text-xs">
                ,
              </Typography>
              <UnderlineLink href="https://tailwindcss.com">
                TailwindCSS
              </UnderlineLink>
              <Typography variant="small" className="text-xs">
                ,
              </Typography>
              <UnderlineLink href="https://mdxjs.com">MDX</UnderlineLink>
              <Typography variant="small" className="text-xs">
                &
              </Typography>
              <UnderlineLink href="https://mongodb.com">MongoDB</UnderlineLink>
            </div>
          </div>
          <div className="flex gap-2 z-30">
            <UnstyledLink href="mailto:nathanaelbudijono@gmail.com">
              <IconButton variant="ghost" icon={AiFillMail} />
            </UnstyledLink>
            <UnstyledLink href="https://github.com/nathanaelbudijono">
              <IconButton variant="ghost" icon={AiFillGithub} />
            </UnstyledLink>
            <UnstyledLink href="https://www.linkedin.com/in/nathanael-budijono/">
              <IconButton variant="ghost" icon={AiFillLinkedin} />
            </UnstyledLink>
          </div>
        </section>
      </footer>
    </>
  );
}
