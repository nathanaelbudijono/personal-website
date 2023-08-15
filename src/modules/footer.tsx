import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";

export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 mt-5">
      <section className="max-w-4xl mx-auto py-5 flex justify-center flex-col items-center gap-1">
        <Typography variant="small">
          © {new Date().getFullYear()} by Nathanael
        </Typography>
        <div className="flex gap-1 items-center">
          <Typography variant="small">Hosted on</Typography>
          <UnderlineLink href="https://vercel.com">Vercel.</UnderlineLink>
          <Typography variant="small">Made by</Typography>
          <UnderlineLink href="https://nextjs.org">NextJs</UnderlineLink>
          <Typography variant="small">&</Typography>
          <UnderlineLink href="https://tailwindcss.com">
            TailwindCSS
          </UnderlineLink>
        </div>
      </section>
    </footer>
  );
}
