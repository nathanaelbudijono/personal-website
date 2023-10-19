import * as React from "react";

import clsx from "clsx";

import UnstyledLink from "./unstyled-link";

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export default function TOCLink({
  id,
  level,
  minLevel,
  text,
  activeSection,
}: TOCLinkProps) {
  console.log(activeSection);
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        "font-medium hover:text-typography-100 focus:outline-none dark:hover:text-typography-800",
        "focus-visible:text-gray-700 dark:focus-visible:text-gray-200",
        activeSection === id
          ? "text-typography-100 dark:text-typography-800 bg-gray-500 dark:bg-gray-400 bg-opacity-10 px-2 py-1 border-l-2 border-primary-100 dark:border-quaternary-400 transition-all duration-100 ease-in-out"
          : "text-typography-600 dark:text-typography-500"
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
}
