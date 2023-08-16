import Button from "@/components/buttons/button";
import IconButton from "@/components/buttons/icon-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/core/tooltip";
import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 h-[15vh] text-center py-5 mt-5">
      <section className="max-w-4xl mx-auto flex justify-center flex-col items-center gap-1">
        <div>
          <Typography variant="small">
            © {new Date().getFullYear()} by Nathanael
          </Typography>
          <div className="flex gap-[1.5px] items-center mt-1">
            <Typography variant="small" className="text-xs">
              Hosted on
            </Typography>
            <UnderlineLink href="https://vercel.com">Vercel.</UnderlineLink>
            <Typography variant="small" className="text-xs">
              Made by
            </Typography>
            <UnderlineLink href="https://nextjs.org">NextJs</UnderlineLink>
            <Typography variant="small" className="text-xs">
              ,
            </Typography>
            <UnderlineLink href="https://tailwindcss.com">
              TailwindCSS
            </UnderlineLink>
            <Typography variant="small" className="text-xs">
              &
            </Typography>
            <UnderlineLink href="https://mdxjs.com">MDX</UnderlineLink>
          </div>
        </div>
        <div>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconButton variant="ghost" icon={AiOutlineMail} />
              </TooltipTrigger>
              <TooltipContent side="right">
                <Typography variant="p">This is NextJs</Typography>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
    </footer>
  );
}
