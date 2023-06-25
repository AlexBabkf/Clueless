import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { products } from "@/lib/testjson";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} products={products} />
    </SessionProvider>
  );
}
