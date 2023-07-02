import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import DetailedCard from "../DetailedCard";

export default function SearchComponent() {
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState(null);

  function showBeer(beer) {
    setSelected(beer);
  }

  function closeCard() {
    setSelected(null);
  }
  const [searchCriteria, setSearchCriteria] = useState({
    abv_gt: "",
    abv_lt: "",
    food: "",
    hops: "",
    malt: "",
    // brewed_before: "",
    // brewed_after: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    let query = "https://api.punkapi.com/v2/beers?";

    if (searchCriteria.food) {
      query += `food=${searchCriteria.food}&`;
    }
    if (searchCriteria.hops) {
      query += `hops=${searchCriteria.hops}&`;
    }
    if (searchCriteria.malt) {
      query += `malt=${searchCriteria.malt}&`;
    }
    if (searchCriteria.abv_gt) {
      query += `abv_gt=${searchCriteria.abv_gt}&`;
    }
    if (searchCriteria.abv_lt) {
      query += `abv_lt=${searchCriteria.abv_lt}&`;
    }

    try {
      const response = await fetch(query);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h2>Find the beer(s) that suit(s) your taste!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ABV* greater than:</label>
          <input
            type="number"
            name="abv_gt"
            value={searchCriteria.abv_gt}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>ABV* less than:</label>
          <input
            type="number"
            name="abv_lt"
            value={searchCriteria.abv_lt}
            onChange={handleInputChange}
          />
        </div>
        {/* <div>
          <label>Brewed before:</label>
          <input
            type="date"
            name="brewed_before"
            value={searchCriteria.brewed_before}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Brewed after:</label>
          <input
            type="month"
            name="brewed_after"
            value={searchCriteria.brewed_after}
            onChange={handleInputChange}
          />
        </div> */}
        <div>
          <label>Food to accompany:</label>
          <input
            type="text"
            name="food"
            value={searchCriteria.food}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Hops**:</label>
          <input
            type="text"
            name="hops"
            value={searchCriteria.hops}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Malt***:</label>
          <input
            type="text"
            name="malt"
            value={searchCriteria.malt}
            onChange={handleInputChange}
          />
        </div>
        <h5>
          *Alcohol by volume (ABV) is a metric used to determine the alcohol
          content in an alcoholic beverage. The measurement shows what
          percentage of the beverage&apos;s total volume is pure alcohol.
        </h5>
        <h5>
          **Hops are the dried, flowering parts of the hop plant (Humulus
          lupulus). Find more info{" "}
          <a href="https://www.findmeabrewery.com/hops/types-of-hops/">here</a>!
        </h5>
        <h5>
          ***Malt is grain that has been specially prepared for brewing. Want to
          learn{" "}
          <a href="https://www.allagash.com/blog/beer-fundamentals-what-is-malt/">
            more
          </a>
          ?
        </h5>
        <button type="submit">Gimme my Beer!!!</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((beer) => (
              <ProductCard
                key={beer.id}
                beer={beer}
                onClick={() => showBeer(beer)}
              />
            ))}
          </ul>
          {selected && <DetailedCard beer={selected} closeCard={closeCard} />}
        </div>
      )}
    </div>
  );
}
