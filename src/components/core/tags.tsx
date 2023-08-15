import cn from "@/type/clsxm";
import * as React from "react";
import { IconType } from "react-icons";

const TAG_SIZE = ["sm", "base"] as const;
type TagSize = (typeof TAG_SIZE)[number];

const TAG_COLOR = ["nextjs", "postgre", "tailwind"] as const;
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
          color === "nextjs" && "bg-secondary-500 text-typography-300",
          color === "postgre" && "bg-teal-300 text-blue-800",
          color === "tailwind" && "bg-primary-400 text-primary-100",
          "inline-flex items-center gap-1 px-1 rounded-md",
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
