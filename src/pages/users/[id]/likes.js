import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import DetailedCard from "@/components/DetailedCard";
import { StyledSearch } from "@/components/SearchComponent/styledSearch";

export default function LikedBeers(props) {
  const [likedIds, setLikedIds] = useState([]);
  const [likedBeers, setLikedBeers] = useState([]);
  const [selected, setSelected] = useState(null);

  const router = useRouter();

  function showBeer(beer) {
    setSelected(beer);
  }

  function closeCard() {
    setSelected(null);
  }

  const { id } = router.query;
  useEffect(() => {
    async function fetchLikedIds() {
      try {
        const response = await fetch(`/api/users?id=${id}`);
        const data = await response.json();
        if (data.user.liked) {
          setLikedIds(data.user.liked);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchLikedIds();
  }, [id]);

  useEffect(() => {
    async function fetchLikedBeers() {
      try {
        const queryString = likedIds.join("|");
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?ids=${queryString}`
        );
        const data = await response.json();
        setLikedBeers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLikedBeers();
  }, [likedIds]);

  return (
    <StyledSearch>
      {likedIds.length > 0 ? (
        <div>
          <h2>Favorite Beers</h2>
          <ul>
            {likedBeers.map((beer) => (
              <ProductCard
                key={beer.id}
                beer={beer}
                {...props}
                onClick={() => showBeer(beer)}
              />
            ))}
          </ul>
          {selected && <DetailedCard beer={selected} closeCard={closeCard} />}
        </div>
      ) : (
        <div>There are no liked beers yet...</div>
      )}
    </StyledSearch>
  );
}
