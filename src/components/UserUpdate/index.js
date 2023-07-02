import { StyledForm } from "./styledForm";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UserForm({ closeCard }) {
  const [name, setName] = useState("");
  const [favorite, setFavorite] = useState("");
  const [bio, setBio] = useState("");

  const router = useRouter();

  async function changeData(event) {
    event.preventDefault();
    const confirmation = window.confirm(
      "Are you sure you want to change your data?"
    );

    if (confirmation) {
      await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, favorite, bio }),
      });
    }
    router.reload();
  }

  return (
    <StyledForm onSubmit={changeData}>
      <div className="card">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="favorite-beer">Favorite Beer:</label>
        <input
          id="favorite-beer"
          name="favorite-beer"
          value={favorite}
          onChange={(event) => setFavorite(event.target.value)}
        />
        <label htmlFor="bio">Bio:</label>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        ></textarea>
        <button type="submit">Update your info</button>
        <button onClick={closeCard} className="card__button">
          X
        </button>
      </div>
    </StyledForm>
  );
}
