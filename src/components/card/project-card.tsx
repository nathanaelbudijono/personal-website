import cn from "@/type/clsxm";
import * as React from "react";
import Typography from "../core/typography";
import Tag from "../core/tags";
import UnstyledLink from "../links/unstyled-link";

import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { MdReadMore } from "react-icons/md";

type ProjectCardProps = {
  title: string;
  img: string;
  desc: string;
  date: string;
  href: string;
  nextjs?: boolean;
  postgre?: boolean;
  tailwind?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export default function ProjectCard({
  title,
  desc,
  img,
  date,
  href,
  nextjs,
  postgre,
  tailwind,
  className,
  ...rest
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-primary-700 rounded-md text-typography-100 h-[414px]",
        "transition-all duration-300 ease-in-out",
        "border border-primary-400",
        "hover:scale-[1.02]",
        "dark:border-tertiary-300"
      )}
      {...rest}
    >
      <UnstyledLink href={href}>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex gap-1">
            {nextjs && <Tag leftIcon={TbBrandNextjs}>NextJs</Tag>}
            {postgre && (
              <Tag leftIcon={BiLogoPostgresql} color="postgre">
                postgre
              </Tag>
            )}
            {tailwind && (
              <Tag leftIcon={BiLogoTailwindCss} color="tailwind">
                tailwind
              </Tag>
            )}
          </div>
          <Typography variant="small" color="muted" className="text-xs">
            {date}
          </Typography>
        </div>
        <img
          src="https://images.unsplash.com/photo-1691145697326-aa4fa5da7174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          alt=""
          className="object-cover h-56 max-sm:h-52 w-full"
        />
        <div className="px-6 pt-4 pb-6">
          <div className="flex justify-between">
            <Typography variant="h4">{title}</Typography>
            <MdReadMore size={20} className="dark:text-typography-800" />
          </div>

          <Typography variant="small" color="muted">
            {desc}
          </Typography>
        </div>
      </UnstyledLink>
    </div>
  );
}
