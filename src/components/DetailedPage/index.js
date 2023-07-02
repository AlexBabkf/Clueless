import Image from "next/image";
import { StyledDetailedPage } from "./styledDetailedPage";

export default function DetailedPage({ beer }) {
  const {
    id,
    name,
    tagline,
    first_brewed,
    description,
    food_pairing,
    brewers_tips,
    image_url,
    abv,
    method,
    ingredients,
  } = beer;
  console.log(ingredients);

  const malts = Array.from(new Set(ingredients.malt.map((i) => i.name))).join(
    ", "
  );
  const hops = Array.from(new Set(ingredients.hops.map((i) => i.name))).join(
    ", "
  );

  return (
    <StyledDetailedPage>
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
        <h5>Malts: {malts}</h5>
        <h5>Hops: {hops}</h5>
        <h5>Yeast: {ingredients.yeast}</h5>
        <h5>
          {method.fermentation.twist
            ? `Fermentation twist: ${method.fermentation.twist}`
            : null}
        </h5>

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
        <h5>Brewer Suggestion:</h5>
        <p>{brewers_tips}</p>
      </div>
    </StyledDetailedPage>
  );
}
