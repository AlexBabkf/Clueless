import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const malzCategories = ["Pilsner", "Ale", "Lager", "Caramalt", "Munich"];

  const fetchData = async () => {
    const fetchRequests = malzCategories.map((category) =>
      fetch(`https://api.punkapi.com/v2/beers?malt=${category}`).then(
        (response) => response.json()
      )
    );

    const data = await Promise.all(fetchRequests);

    return malzCategories.map((category, index) => ({
      [category]: data[index],
    }));
  };

  const { data } = useSWR("malzData", fetchData);

  if (!data) return;

  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} data={data} />
    </SessionProvider>
  );
}
