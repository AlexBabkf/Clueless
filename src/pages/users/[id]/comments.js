import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Comments from "@/components/Comments";

export default function UserComments() {
  const [userComments, setUserComments] = useState([]);
  const router = useRouter();

  const { id } = router.query;
  console.log(id);
  useEffect(() => {
    async function fetchUserComments() {
      try {
        const response = await fetch(`/api/comments`);
        const data = await response.json();
        if (data.comment) {
          setUserComments(
            data.comment.filter((comment) => comment.userId === id)
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserComments();
  }, [id]);
  return (
    <div>
      <h1>User comments</h1>
      {userComments.length > 0 ? (
        <Comments comments={userComments} />
      ) : (
        <h4>No comments yet</h4>
      )}
    </div>
  );
}
