import dynamic from "next/dynamic";

const BreweryMap = dynamic(() => import("../components/BrewerieMap"), {
  ssr: false,
});

const MapPage = () => {
  return (
    <div>
      <BreweryMap />
    </div>
  );
};

export default MapPage;
