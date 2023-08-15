import ActiveLink from "@/components/links/active-link";
import UnstyledLink from "@/components/links/unstyled-link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="px-16 max-md:px-6 sticky top-0 bg-secondary-600 bg-opacity-40 backdrop-blur-[2px] z-10 ">
      <section className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <UnstyledLink href="/">
            <Image src="/logo.png" width={35} height={35} alt="" />
          </UnstyledLink>

          <div className="flex gap-3">
            {Links.map((item, index) => (
              <ActiveLink key={index} href={item.link}>
                {item.title}
              </ActiveLink>
            ))}
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
