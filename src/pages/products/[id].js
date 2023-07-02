import DetailedPage from "@/components/DetailedPage";
import CommentForm from "@/components/CommentForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Comments from "@/components/Comments";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailedProduct({ data }) {
  const router = useRouter();

  const { data: session } = useSession();

  const { id } = router.query;
  const [beer, setBeer] = useState(null);
  const [specificComments, setSpecificComments] = useState([]);

  // useEffect(() => {
  //   function findBeerById(id) {
  //     for (const category of data) {
  //       const beers = Object.values(category)[0];
  //       const foundBeer = beers.find((beer) => beer.id === parseInt(id));

  //       if (foundBeer) {
  //         return foundBeer;
  //       }
  //     }
  //   }
  //   if (id) {
  //     const foundBeer = findBeerById(id);
  //     setBeer(foundBeer);
  //   }
  // }, [id, data]);

  useEffect(() => {
    async function findBeerById(id) {
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?ids=${id}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            return data;
          }
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    if (id) {
      findBeerById(id)
        .then((foundBeer) => {
          setBeer(foundBeer);
        })
        .catch((error) => {
          console.log("Error finding beer:", error);
        });
    }
  }, [id]);
  console.log(beer);
  const comments = useSWR("/api/comments", fetcher);

  async function addComment(commentData) {
    const response = await fetch("../api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (response.ok) {
      await response.json();
      comments.mutate();
    } else {
      console.error(response.status);
    }
  }

  useEffect(() => {
    async function getComments() {
      try {
        const response = await fetch(`/api/comments/${id}`);
        const data = await response.json();
        setSpecificComments(data);
      } catch (error) {
        console.error(error);
      }
    }
    getComments();
  }, [id]);

  if (!beer) return;

  return (
    <>
      <DetailedPage beer={beer[0]} />
      {session ? (
        <CommentForm user={session.user} beerId={id} addComment={addComment} />
      ) : (
        <h3>
          To add a comment please:
          <button onClick={() => signIn()} className="sign-in">
            Sign in
          </button>
        </h3>
      )}
      <Comments comments={specificComments} />
    </>
  );
}
