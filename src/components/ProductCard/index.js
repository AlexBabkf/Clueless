import Image from "next/image";
import { StyledCard, StyledLikeButton } from "./styledComponents";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useSession } from "next-auth/react";

export default function ProductCard({ handleLike, beer, onClick }) {
  const { id, name, tagline, image_url, abv } = beer;
  const { data: session } = useSession();
  const [liked, setLiked] = useLocalStorageState("liked", {
    defaultValue: [[]],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLiked() {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        const user = data.user;
        if (user && user.liked) {
          setLiked(user.liked);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    }
    if (loading) {
      fetchLiked();
    }
  }, [loading]);

  const isLiked = liked.includes(id);
  async function updateLike() {
    try {
      const method = isLiked ? "PATCH" : "POST";

      const response = await fetch("/api/likes", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ beerId: id }),
      });

      if (response.ok) {
        handleLike(id);
        setLiked(
          isLiked ? liked.filter((beerId) => beerId !== id) : [...liked, id]
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  function finalLike(event) {
    event.stopPropagation();
    updateLike();
  }

  return (
    <div>
      <StyledCard onClick={onClick}>
        <div className="card__left">
          <div>
            <Image
              src={image_url ?? "/bottle.jpg"}
              alt="name"
              width={50}
              height={200}
              className="card__image"
            />
          </div>
        </div>
        <div className="card__right">
          <div className="card__content">
            <h2>{name}</h2>
            <h4>
              <i>{tagline}</i>
            </h4>
            <h4>ABV: {abv}%</h4>
          </div>
        </div>
        {session && (
          <StyledLikeButton onClick={finalLike}>
            {isLiked ? "❤️" : "🖤"}
          </StyledLikeButton>
        )}
      </StyledCard>
    </div>
  );
}
