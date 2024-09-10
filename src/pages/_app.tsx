import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="bg-dark-100 dark:bg-light-100">
        <section className="mx-auto px-16 max-md:px-6">
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            height={2}
            showOnShallow={true}
          />
          <div>
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
