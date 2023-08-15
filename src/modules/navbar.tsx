import ActiveLink from "@/components/links/active-link";
import UnstyledLink from "@/components/links/unstyled-link";

export default function Navbar() {
  return (
    <section className="flex justify-between sticky top-0 py-4 max-w-4xl translate-x-32">
      <div>
        <UnstyledLink href="/">Logo</UnstyledLink>
      </div>
      <div className="flex gap-3">
        {Links.map((item, index) => (
          <ActiveLink key={index} href={item.link}>
            {item.title}
          </ActiveLink>
        ))}
      </div>
    </section>
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
