import ProductDetails from "@/components/ProductDetails";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function DetailedProduct({ data }) {
  const router = useRouter();

  const { id } = router.query;
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    function findBeerById(id) {
      for (const category of data) {
        const beers = Object.values(category)[0];
        const foundBeer = beers.find((beer) => beer.id === parseInt(id));

        if (foundBeer) {
          return foundBeer;
        }
      }
    }
    if (id) {
      const foundBeer = findBeerById(id);
      setBeer(foundBeer);
    }
  }, [id, data]);

  if (!beer) return;

  return <ProductDetails beer={beer} />;
}
