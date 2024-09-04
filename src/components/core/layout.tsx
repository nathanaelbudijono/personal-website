import cn from "@/type/clsxm";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

export default function Layout({ className, children, ...rest }: LayoutProps) {
  return (
    <div
      className={cn(
        "h-screen max-w-5xl mx-auto flex flex-col py-3 max-md:px-3 xl:max-w-6xl 2xl:max-w-7xl",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
