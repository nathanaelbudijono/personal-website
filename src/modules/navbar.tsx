import ActiveLink from "@/components/links/active-link";
import UnstyledLink from "@/components/links/unstyled-link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="flex justify-between items-center top-0 py-4  max-w-4xl sticky z-10 mx-auto">
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
