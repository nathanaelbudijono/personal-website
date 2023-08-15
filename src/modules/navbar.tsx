import { clsx } from "clsx";
import ActiveLink from "@/components/links/active-link";
import UnstyledLink from "@/components/links/unstyled-link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import { CiDark, CiSun } from "react-icons/ci";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <main
      className={clsx(
        "px-16 max-md:px-6 sticky top-0 z-10",
        " bg-secondary-600  bg-opacity-40 backdrop-blur-[2px] ",
        "dark:bg-quaternary-200 dark:bg-opacity-40"
      )}
    >
      <section className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <UnstyledLink href="/">
            <Image src="/logo.png" width={35} height={35} alt="" />
          </UnstyledLink>

          <div className="flex gap-3 items-center">
            {Links.map((item, index) => (
              <ActiveLink key={index} href={item.link}>
                {item.title}
              </ActiveLink>
            ))}
            <button
              onClick={toggleTheme}
              className={clsx(
                "px-2.5 py-2 rounded-md hover:bg-primary-300 text-typography-100 transition-all duration-200 ease-in",
                "dark:hover:bg-tertiary-300 text-typography-800"
              )}
            >
              {theme === "dark" ? <CiDark /> : <CiSun />}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const Links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Shorts",
    link: "/shorts",
  },
];
