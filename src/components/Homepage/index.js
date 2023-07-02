import ProductCard from "../ProductCard";
import { StyledList } from "./styledProductList";
import DetailedCard from "../DetailedCard";
import { useState } from "react";

export default function Homepage({ handleLike, data }) {
  const [selected, setSelected] = useState(null);

  function showBeer(beer) {
    setSelected(beer);
  }

  function closeCard() {
    setSelected(null);
  }

  return (
    <div>
      <StyledList>
        {data.map((categoryData) => {
          const category = Object.keys(categoryData)[0];
          const beers = categoryData[category];
          return (
            <div key={category}>
              <h2>{category} malt</h2>
              <div className="item">
                {beers.map((beer) => (
                  <ProductCard
                    onClick={() => showBeer(beer)}
                    key={beer.id}
                    beer={beer}
                    handleLike={handleLike}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </StyledList>
      {selected && <DetailedCard beer={selected} closeCard={closeCard} />}
    </div>
  );
}
