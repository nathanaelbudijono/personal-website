import cn from "@/type/clsxm";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

export default function Layout({ className, children, ...rest }: LayoutProps) {
  return (
    <div
      className={cn("h-screen max-w-4xl mx-auto flex flex-col py-3", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
