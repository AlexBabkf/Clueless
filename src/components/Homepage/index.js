import ProductCard from "../ProductCard";
import { products } from "@/lib/testjson";

export default function Homepage() {
  const testCategories = [
    "Electronics",
    "Home and Kitchen",
    "Fashion",
    "Beauty and Personal Care",
    "Sports and Outdoors",
  ];

  return (
    <div className="productContainer">
      {testCategories.map((cat) => (
        <div className="productList" key={cat}>
          <h2>{cat}</h2>
          {products
            .filter((product) => product.category === cat)
            .map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
        </div>
      ))}
    </div>
  );
}
