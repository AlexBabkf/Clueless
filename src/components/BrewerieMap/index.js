import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./BrewerieMap.module.css";
import { countriesLatLon } from "@/lib/countriesLatLon";

export default function BreweryMap() {
  const [breweries, setBreweries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("austria");
  const [latLon, setLatLon] = useState([47.5162, 14.5501]);

  useEffect(() => {
    async function fetchBreweries() {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/v1/breweries?by_country=${selectedCountry}&per_page=200`
        );
        if (response.ok) {
          const data = await response.json();
          setBreweries(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreweries();
  }, [selectedCountry]);

  countriesLatLon.find((country) => country.name === selectedCountry);

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
    const country = countriesLatLon.find(
      (country) => country.name === selectedCountry
    );
    setLatLon([country.lat, country.lon]);
  }
  const logo = L.icon({
    iconUrl: "577beermug_100515.png",
    iconSize: [20, 20],
  });

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <h1>Map of Breweries around the World</h1>
      <div>
        <label htmlFor="country-select">Select a country: </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="austria">Austria</option>
          <option value="england">England</option>
          <option value="france">France</option>
          <option value="isle_of_man">Isle of Man</option>
          <option value="ireland">Ireland</option>
          <option value="poland">Poland</option>
          <option value="portugal">Portugal</option>
          <option value="scotland">Scotland</option>
          <option value="south_korea">South Korea</option>
          <option value="united_states">United States</option>
        </select>
      </div>
      <MapContainer className={styles.map} center={latLon} zoom={6}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {breweries.map(
          (row) =>
            row.latitude &&
            row.longitude && (
              <Marker
                key={row.id}
                position={[row.latitude, row.longitude]}
                icon={logo}
              >
                <Popup>
                  Name: {row.name} <br />
                  Brewery Type: {row.brewery_type}
                  <br />
                  City: {row.city} <br />
                  WebSite: {row.website_url ?? "Unavailable"}
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
}
