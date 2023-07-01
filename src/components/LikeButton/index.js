import { StyledLikeButton } from "./styledLikeButton";

export default function LikeButton({ updateLike, isLiked }) {
  return (
    <StyledLikeButton onClick={updateLike} className="favButton">
      {isLiked ? "❤️" : "🖤"}
    </StyledLikeButton>
  );
}
