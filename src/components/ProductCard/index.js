import Image from "next/image";
import { StyledCard } from "./styledProductCard";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductCard({ handleLike, beer }) {
  const { id, name, tagline, image_url } = beer;

  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const fetchLiked = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        const user = data.user;
        if (user && user.liked) {
          setLiked(user.liked);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLiked();
  }, []);

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

  return (
    <StyledCard>
      <button onClick={updateLike}>{isLiked ? "UnLike" : "Like"}</button>
      <Link href={`/products/${id}`}>
        <img
          src={image_url}
          alt="name"
          width={80}
          height={100}
          className="card__image"
        ></img>
      </Link>
      <div className="card__content">
        <h3>{name}</h3>
        <h4>{tagline}</h4>
      </div>
    </StyledCard>
  );
}
