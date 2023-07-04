import Link from "next/link";
import { StyledComments } from "./styledComments";

export default function Comments({ comments }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `date: ${formattedDate} time: ${formattedTime}`;
  }

  return (
    <StyledComments>
      {comments ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <h4>
                Comment by:{" "}
                {
                  <Link href={`/users/${comment.userId}`}>
                    {comment.userName}
                  </Link>
                }{" "}
                on {formatDate(comment.createdAt)}
              </h4>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No comments yet. Why don&apos;t you add one, fellow?</div>
      )}
    </StyledComments>
  );
}
