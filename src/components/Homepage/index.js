import ProductCard from "../ProductCard";
import { StyledList } from "./styledProductList";

export default function Homepage({ handleLike, data }) {
  return (
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
  );
}
