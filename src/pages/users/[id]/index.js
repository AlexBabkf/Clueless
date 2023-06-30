import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();

  const { id } = router.query;

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  async function changeName(event) {
    event.preventDefault();
    const confirmation = window.confirm(
      "Are you sure you want to change your username?"
    );

    if (confirmation) {
      await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(username),
      });
    }
    router.reload();
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`/api/users?id=${id}`);
        const data = await response.json();
        if (data.user) {
          setUserInfo(data.user);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [id]);

  return (
    <div>
      {session && session.user._id === id && (
        <div>
          <h3>
            <Image
              src={session.user.image}
              alt="user-avatar"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            Hello {session.user.name}
          </h3>
          <form onSubmit={changeName}>
            <h4>Change UserName:</h4>
            <input
              type="text"
              value={username}
              onChange={handleChangeUsername}
            />
            <button type="submit">Change Username</button>
          </form>
        </div>
      )}
      {(!session || (session && session.user._id !== id)) && (
        <div>
          <Image
            src={userInfo.image}
            alt="user-avatar"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />

          <h2>Profile page of {userInfo.name}</h2>
        </div>
      )}
      <h3>See liked beers</h3>
      <Link href={`/users/${id}/likes`}>here</Link>
      <h3>See comments</h3>
      <Link href={`/users/${id}/comments`}>here</Link>
    </div>
  );
}
