import cn from "@/type/clsxm";
import * as React from "react";
import Typography from "../core/typography";
import Tag from "../core/tags";
import UnstyledLink from "../links/unstyled-link";

import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { MdReadMore } from "react-icons/md";
import { SiPrisma } from "react-icons/si";

type ProjectCardProps = {
  title: string;
  img: string;
  desc: string;
  date: string;
  href: string;
  nextjs?: string;
  postgre?: string;
  tailwind?: string;
  typescript?: string;
  prisma?: string;
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
  typescript,
  prisma,
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
            {nextjs === "y" && <Tag leftIcon={TbBrandNextjs}>NextJs</Tag>}
            {typescript === "y" && (
              <Tag leftIcon={BiLogoTypescript} color="typescript">
                typescript
              </Tag>
            )}
            {postgre === "y" && (
              <Tag leftIcon={BiLogoPostgresql} color="postgre">
                postgre
              </Tag>
            )}
            {tailwind === "y" && (
              <Tag leftIcon={BiLogoTailwindCss} color="tailwind">
                tailwind
              </Tag>
            )}
            {prisma === "y" && (
              <Tag leftIcon={SiPrisma} color="prisma">
                prisma
              </Tag>
            )}
          </div>
          <Typography variant="small" color="muted" className="text-xs">
            {date}
          </Typography>
        </div>
        <img
          src={img}
          alt="Project Card"
          className="object-cover h-56 max-sm:h-52 w-full text-xs"
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
