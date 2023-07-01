import BeerMug from "../BeerMug";
import { StyledLoading } from "./styledLoading";

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <StyledLoading>
        <div className="beer-mug-container">
          <BeerMug />
          <div className="beer-liquid" />
        </div>
      </StyledLoading>
    </div>
  );
};

export default Loading;
