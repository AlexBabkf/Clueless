export default function Comments({ comments }) {
  return (
    <div>
      {comments ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <h4>
                Comment by: {comment.userName} on {comment.createdAt}
              </h4>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No comments yet. Why don&apos;t you add one, fellow?</div>
      )}
    </div>
  );
}
