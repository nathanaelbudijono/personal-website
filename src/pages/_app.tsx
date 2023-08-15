import Navbar from "@/modules/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <section className="mx-auto px-16 py-10 max-md:px-6 max-md:py-3 relative">
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          height={2}
          showOnShallow={true}
        />

        <Component {...pageProps} />
      </section>
    </main>
  );
}
