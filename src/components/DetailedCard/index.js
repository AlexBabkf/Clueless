import Image from "next/image";
import { StyledDetailedCard } from "./styledDetailedCard";
import Link from "next/link";

export default function DetailedCard({ beer, closeCard }) {
  const { id, name, tagline, first_brewed, description, image_url, abv } = beer;

  return (
    <StyledDetailedCard>
      <div className="card">
        <div className="card__basic-info">
          <h2>{name}</h2>
          <h4>
            <i>ca. {first_brewed}</i>
          </h4>
          <h4>
            <u>{tagline}</u>
          </h4>
          <h5>ABV: {abv}%</h5>
        </div>
        <div className="card__content">
          <Image
            src={image_url}
            alt="name"
            width={80}
            height={320}
            className="card__image"
          />
          <p className="description">{description}</p>
        </div>
        <Link href={`/products/${id}`}>See detailed page</Link>
        <button onClick={closeCard} className="card__button">
          X
        </button>
      </div>
    </StyledDetailedCard>
  );
}
