import ActiveLink from "@/components/links/active-link";
import UnstyledLink from "@/components/links/unstyled-link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="px-16 py-10 max-md:px-6 max-md:py-3">
      <section className="sticky top-0 max-w-4xl z-10 mx-auto">
        <div className="flex justify-between items-center py-5">
          <UnstyledLink href="/">
            <Image src="/logo.png" width={40} height={40} alt="" />
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
