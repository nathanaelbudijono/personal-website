import cn from "@/type/clsxm";
import * as React from "react";
import Typography from "../core/typography";
import UnstyledLink from "../links/unstyled-link";
import Skeleton from "../core/skeleton";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMarkdown,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import { BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillEye } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandCypress } from "react-icons/tb";

export const icons = {
  nextjs: <SiNextdotjs />,
  tailwind: <SiTailwindcss />,
  typescript: <SiTypescript />,
  mdx: <SiMarkdown />,
  prisma: <SiPrisma />,
  express: <SiExpress />,
  nodejs: <BiLogoNodejs />,
  mongodb: <SiMongodb />,
  mongoose: <SiMongoose />,
  postgre: <BiLogoPostgresql />,
  javascript: <DiJavascript1 />,
  cypress: <TbBrandCypress />,
};

export type Icons = keyof typeof icons;

type ProjectCardProps = {
  title: string;
  img?: string;
  desc: string;
  date: string;
  href: string;
  views?: number | string;
  tags?: string[];
} & React.ComponentPropsWithoutRef<"div">;

export default function ShortCard({
  title,
  desc,
  img,
  date,
  href,
  views,
  tags,
  className,
  ...rest
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-primary-700 rounded-xl text-typography-100 h-[180px] max-sm:h-[190px]",
        "transition-all duration-300 ease-in-out",
        "border border-secondary-300",
        "hover:scale-[1.02]",
        "dark:border-secondary-400",
        "bg-dark-100 bg-opacity-30 dark:bg-light-100 dark:bg-opacity-30"
      )}
      {...rest}
    >
      <UnstyledLink href={href}>
        <div className="px-6 pt-4 flex justify-between items-center">
          <ul className="flex gap-1 text-xs">
            {tags?.map((tag: string) => (
              <li key={tag} className={`tag-icon-${tag}  rounded-md`}>
                {icons[tag as Icons]}
              </li>
            ))}
          </ul>
          <Typography variant="small2" color="muted" className="text-xs">
            {date}
          </Typography>
        </div>
        <div className="px-6 pt-4 pb-6">
          <Typography variant="h3">{title}</Typography>

          <div className="flex items-center gap-2 mb-2 mt-3">
            <AiFillEye
              size={15}
              className="dark:text-typography-800 text-typography-100"
            />
            {views === 0 ? (
              <Skeleton className="w-[48px] h-[15px]" />
            ) : (
              <Typography variant="small2" color="muted">
                {views} views
              </Typography>
            )}
          </div>
          <Typography variant="small" color="muted" className="mt-3">
            {desc}
          </Typography>
        </div>
      </UnstyledLink>
    </div>
  );
}
