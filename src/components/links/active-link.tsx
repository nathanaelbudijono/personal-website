import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({
  children,
  ...rest
}: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link
      {...rest}
      className={
        isActive
          ? "bg-gradient-to-r from-primary-400 to-primary-100 bg-clip-text text-transparent dark:from-tertiary-400 dark:to-tertiary-300 hover:underline"
          : "text-typography-100 dark:text-typography-800"
      }
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
