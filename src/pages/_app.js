import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import useSWR from "swr";
import NavigationBar from "@/components/Navigation";
import TopButton from "@/components/TopButton";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [likedBeers, setLikedBeers] = useLocalStorageState("likedBeers", {
    defaultValue: [[]],
  });

  const malzCategories = ["Munich", "Ale", "Lager", "Pilsner", "Caramalt"];

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

  const handleLike = (id) => {
    setLikedBeers((previous) => [...previous, id]);
  };

  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component
        {...pageProps}
        data={data}
        likedBeers={likedBeers}
        handleLike={handleLike}
      />
      <TopButton />
      <NavigationBar />
    </SessionProvider>
  );
}
