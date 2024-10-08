import cn from "@/type/clsxm";
import * as React from "react";
import Typography from "../core/typography";
import UnstyledLink from "../links/unstyled-link";
import Skeleton from "../core/skeleton";
import Image from "next/image";

import useCloudinaryImage from "@/hooks/useCloudinaryImage";

import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillEye } from "react-icons/ai";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMarkdown,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiMongoose,
  SiTrpc,
  SiFirebase,
  SiSocketdotio,
  SiWebrtc,
} from "react-icons/si";
import { BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi";

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
  trpc: <SiTrpc />,
  firebase: <SiFirebase />,
  webSockets: <SiSocketdotio />,
  webRTC: <SiWebrtc />,
};

export type Icons = keyof typeof icons;

type ProjectCardProps = {
  title: string;
  img: string;
  desc: string;
  date: string;
  href: string;
  views?: string | number;
  tags?: string[];
} & React.ComponentPropsWithoutRef<"div">;

export default function ProjectCard({
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
  const publicId = img;
  const [src, ready] = useCloudinaryImage(
    publicId,
    process.env.NEXT_PUBLIC_CLOUDNAME as string
  );
  return (
    <div
      className={cn(
        "overflow-hidden border border-primary-700 rounded-xl text-typography-100 h-[420px]",
        "transition-all duration-300 ease-in-out relative",
        "border border-secondary-300",
        "hover:scale-[1.02]",
        "dark:border-secondary-400",
        "bg-dark-100 bg-opacity-30 dark:bg-light-100 dark:bg-opacity-30"
      )}
      {...rest}
    >
      <UnstyledLink href={href}>
        <div className="w-full px-6 py-4 flex justify-between items-center">
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
        <div className="h-52 max-sm:h-52 relative shadow-sm">
          {src && (
            <Image
              src={src}
              alt="card picture"
              fill
              className="text-xs shadow-sm object-cover"
              style={{
                filter: !ready ? "blur(5px)" : "none",
                transition: !ready ? "none" : "filter 0.3s ease-out",
              }}
            />
          )}
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
