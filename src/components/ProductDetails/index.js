import Image from "next/image";
import { StyledCard } from "../ProductCard/styledProductCard";

export default function ProductDetails({ beer }) {
  const {
    name,
    tagline,
    first_brewed,
    description,
    food_pairing,
    brewers_tips,
    image_url,
  } = beer;

  return (
    <div>
      <button onClick={() => history.back()}>Go back</button>
      <StyledCard>
        <Image
          src={image_url}
          alt="name"
          width={80}
          height={320}
          className="card__image"
        ></Image>
        <div className="card__content">
          <h3>{name}</h3>
          <h4>{tagline}</h4>
          <h4>ca. {first_brewed}</h4>
          <p>{description}</p>
          {food_pairing ? (
            <span>
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
      </StyledCard>
    </div>
  );
}
