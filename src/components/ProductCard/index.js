import Image from "next/image";
import { StyledCard } from "./styledProductCard";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { name, image, price } = product;
  return (
    <StyledCard>
      <Link href={`/products/${product._id}`}>
        <img
          src={image}
          alt="name"
          width={200}
          height={200}
          className="card__image"
        ></img>
      </Link>
      <div className="card__content">
        <h3>{name}</h3>
        <h4>{price}</h4>
      </div>
    </StyledCard>
  );
}
