import cn from "@/type/clsxm";
import * as React from "react";
import { IconType } from "react-icons";

const TAG_SIZE = ["sm", "base"] as const;
type TagSize = (typeof TAG_SIZE)[number];

const TAG_COLOR = [
  "nextjs",
  "postgre",
  "tailwind",
  "success",
  "danger",
  "orange",
  "warning",
  "aqua",
] as const;
type TagColor = (typeof TAG_COLOR)[number];

type TagProps = {
  children: React.ReactNode;
  size?: TagSize;
  color?: TagColor;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<"div">;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      children,
      className,
      color = "nextjs",
      size = "sm",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          [
            size === "sm" && ["py-0.5 text-xs font-[400]"],
            size === "base" && ["py-1 text-sm"],
          ],
          color === "nextjs" && "bg-secondary-500 text-typography-300",
          color === "postgre" && "bg-teal-300 text-blue-800",
          color === "tailwind" && "bg-primary-400 text-primary-100",
          color === "danger" && "bg-red-100 text-red-700",
          color === "orange" && "bg-orange-100 text-orange-700",
          color === "warning" && "bg-yellow-100 text-yellow-700 ",
          color === "success" && "bg-green-100 text-green-700",
          "inline-flex items-center gap-1 rounded-md px-3 font-medium",
          LeftIcon && "pl-3",
          RightIcon && "pr-3",
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
        {children}
        {RightIcon && (
          <div>
            <RightIcon size="1.3em" className={cn(rightIconClassName)} />
          </div>
        )}
      </div>
    );
  }
);

export default Tag;
