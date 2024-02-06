import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Image from "next/image";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="bg-dark-100 dark:bg-light-100">
        <section className="mx-auto px-16 max-md:px-6 relative">
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            height={2}
            showOnShallow={true}
          />
          <div>
            {/* <Image
              src="/images/pattern.png"
              layout="fill"
              alt="pattern"
              objectFit="cover"
              className="z-0 opacity-10 dark:opacity-[0.02]"
            /> */}
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
