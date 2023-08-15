import IconButton from "@/components/buttons/icon-button";
import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";

export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 h-[10vh] text-center py-5">
      <section className="max-w-4xl mx-auto flex justify-center flex-col items-center gap-1">
        <div>
          <Typography variant="small">
            © {new Date().getFullYear()} by Nathanael
          </Typography>
          <div className="flex gap-1 items-center mt-1">
            <Typography variant="small">Hosted on</Typography>
            <UnderlineLink href="https://vercel.com">Vercel.</UnderlineLink>
            <Typography variant="small">Made by</Typography>
            <UnderlineLink href="https://nextjs.org">NextJs</UnderlineLink>
            <Typography variant="small">&</Typography>
            <UnderlineLink href="https://tailwindcss.com">
              TailwindCSS
            </UnderlineLink>
          </div>
        </div>
      </section>
    </footer>
  );
}
