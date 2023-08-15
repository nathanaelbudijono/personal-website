import cn from "@/type/clsxm";
import * as React from "react";

const BoxVariant = ["primary"] as const;
const BoxSize = ["base"] as const;

type BoxProps = {
  variant: (typeof BoxVariant)[number];
  size?: (typeof BoxSize)[number];
} & React.ComponentPropsWithRef<"div">;

export default function Box({
  variant,
  size = "base",
  className,
  ...rest
}: BoxProps) {
  return (
    <div
      className={cn(
        "-z-[100] rounded-[30px] absolute bottom-5 -right-52 rotate-[40deg]",
        [
          variant === "primary" && [
            "bg-gradient-to-r from-primary-400 to-primary-100",
          ],
        ],
        [
          size === "base" && [
            "w-[380px] sm:w-[600px] md:w-[650px] ",
            "h-[200px] sm:h-[230px] md:h-[260px]",
          ],
        ],
        className
      )}
      {...rest}
    ></div>
  );
}
