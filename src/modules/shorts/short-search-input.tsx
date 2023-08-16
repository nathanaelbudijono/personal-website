import clsx from "clsx";
import { AiOutlineSearch } from "react-icons/ai";

type shortSearchProps = {
  search: string;
  setSearch: (search: string) => void;
};
export default function ShortSearchInput({
  search,
  setSearch,
}: shortSearchProps) {
  return (
    <main className="mt-5">
      <section className="relative flex items-ceter">
        <input
          placeholder="Type a keyword"
          className={clsx(
            "px-1 py-1.5 rounded-md w-full shadown-sm text-sm",
            "transition-colors duration-200 bg-transparent",
            "border border-primary-400 text-typography-100",
            "hover:text-typography-800",
            "dark:border-tertiary-300 dark:text-typography-800 dark:active:border-quaternary-500"
          )}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineSearch className="absolute right-2 top-2 focus:outline-none text-typography-400 opacity-80" />
      </section>
    </main>
  );
}
