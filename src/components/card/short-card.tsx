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

type ProjectCardProps = {
  title: string;
  img?: string;
  desc: string;
  date: string;
  href: string;
  nextjs?: boolean;
  postgre?: boolean;
  tailwind?: boolean;
  typescript?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export default function ShortCard({
  title,
  desc,
  img,
  date,
  href,
  nextjs,
  postgre,
  tailwind,
  typescript,
  className,
  ...rest
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-primary-700 rounded-md text-typography-100 h-[146px]",
        "transition-all duration-300 ease-in-out",
        "border border-primary-400",
        "hover:scale-[1.02]",
        "dark:border-tertiary-300"
      )}
      {...rest}
    >
      <UnstyledLink href={href}>
        <div className="px-6 pt-4 flex justify-between items-center">
          <div className="flex gap-1">
            {nextjs && <Tag leftIcon={TbBrandNextjs}>NextJs</Tag>}
            {typescript && (
              <Tag leftIcon={BiLogoTypescript} color="typescript">
                typescript
              </Tag>
            )}
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
        <div className="px-6 pt-4 pb-6">
          <div className="flex justify-between items-center">
            <Typography variant="h4">{title}</Typography>
            <MdReadMore size={20} className="dark:text-typography-800" />
          </div>
          <Typography variant="small" color="muted" className="leading-[16px]">
            {desc}
          </Typography>
        </div>
      </UnstyledLink>
    </div>
  );
}
