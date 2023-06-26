import Image from "next/image";
import { StyledCard } from "./styledProductCard";
import Link from "next/link";

export default function ProductCard({ beer }) {
  const { id, name, tagline, image_url } = beer;
  return (
    <StyledCard>
      <Link href={`/products/${id}`}>
        <img
          src={image_url}
          alt="name"
          width={80}
          height={100}
          className="card__image"
        ></img>
      </Link>
      <div className="card__content">
        <h3>{name}</h3>
        <h4>{tagline}</h4>
      </div>
    </StyledCard>
  );
}
