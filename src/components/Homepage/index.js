import ProductCard from "../ProductCard";
import { products } from "@/lib/testjson";
import { StyledList } from "./styledProductList";

export default function Homepage() {
  const testCategories = [
    "Electronics",
    "Home and Kitchen",
    "Fashion",
    "Beauty and Personal Care",
    "Sports and Outdoors",
  ];

  return (
    <StyledList>
      {testCategories.map((cat) => (
        <>
          <h2>{cat}</h2>
          <div className="item" key={cat}>
            {products
              .filter((product) => product.category === cat)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      ))}
    </StyledList>
  );
}
