import cn from "@/type/clsxm";
import * as React from "react";
import { IconType } from "react-icons";

const TAG_SIZE = ["sm", "base"] as const;
type TagSize = (typeof TAG_SIZE)[number];

const TAG_COLOR = [
  "nextjs",
  "postgre",
  "tailwind",
  "typescript",
  "prisma",
] as const;
type TagColor = (typeof TAG_COLOR)[number];

type TagProps = {
  children: React.ReactNode;
  size?: TagSize;
  color?: TagColor;
  leftIcon?: IconType;
  leftIconClassName?: string;
} & React.ComponentPropsWithoutRef<"div">;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      color = "nextjs",
      size = "sm",
      leftIcon: LeftIcon,
      leftIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          [
            size === "sm" && ["p-0.5 text-xs font-[400]"],
            size === "base" && ["p-1 text-sm"],
          ],
          color === "nextjs" && "bg-secondary-400  text-typography-100",
          color === "postgre" && "bg-[#e2e9ef] text-[#2596be]",
          color === "tailwind" && "bg-primary-400 text-primary-100",
          color === "typescript" && "bg-primary-200 text-typography-100",
          color === "prisma" && "bg-typography-100 text-secondary-400",
          "inline-flex justify-center items-center gap-1 px-1 rounded-md",
          className
        )}
        ref={ref}
        {...rest}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size="1.3em" className={cn(leftIconClassName)} />
          </div>
        )}
      </div>
    );
  }
);

export default Tag;
