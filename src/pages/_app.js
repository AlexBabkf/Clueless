import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { products } from "@/lib/testjson";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} products={products} />
    </SessionProvider>
  );
}
