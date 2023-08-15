import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="bg-gradient-to-b from-secondary-600 to-secondary-500 dark:from-quaternary-300 dark:to-quaternary-100">
        <Navbar />
        <section className="mx-auto px-16 max-md:px-6 relative">
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
        <Footer />
      </main>
    </ThemeProvider>
  );
}
