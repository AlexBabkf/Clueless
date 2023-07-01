import Image from "next/image";
import { StyledDetailedCard } from "./styledDetailedCard";

export default function ProductDetails({ beer, closeCard }) {
  const {
    name,
    tagline,
    first_brewed,
    description,
    food_pairing,
    brewers_tips,
    image_url,
    abv,
  } = beer;

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
          <p>{description}</p>
        </div>
        {food_pairing ? (
          <span className="card__pairing">
            Foods to pair with your {name}:
            <ul>
              {food_pairing.map((food) => (
                <li key={food}>{food}</li>
              ))}
            </ul>
          </span>
        ) : (
          `Currently there are no food suggestions to pair with your ${name}`
        )}
        <h5>The brewer suggests:</h5>
        <p>{brewers_tips}</p>
      </div>
      <button onClick={closeCard} className="card__button">
        X
      </button>
    </StyledDetailedCard>
  );
}
