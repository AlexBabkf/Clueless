import Image from "next/image";
import { StyledCard } from "../ProductCard/styledProductCard";

export default function ProductDetails({ product }) {
  const { name, image, price, description, category } = product;

  return (
    <StyledCard>
      <img
        src={image}
        alt="name"
        width={200}
        height={200}
        className="card__image"
      ></img>
      <div className="card__content">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <h4>{category}</h4>
        <p>{description}</p>
      </div>
    </StyledCard>
  );
}
