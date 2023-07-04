import { useState } from "react";
import { StyledForm } from "./styledForm";

export default function CommentForm({ addComment, user, beerId }) {
  const [comment, setComment] = useState("");

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addComment({ comment, userId: user._id, beerId, userName: user.name });
    event.target.reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Have anything to say?</h3>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="5"
        onChange={handleComment}
      ></textarea>
      <button type="submit">Here&apos;s my opinion</button>
    </StyledForm>
  );
}
