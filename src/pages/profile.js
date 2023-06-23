import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const { data: session, status: sessionStatus } = useSession();
  const [username, setUsername] = useState("");
  const router = useRouter();
  if (sessionStatus === "loading") {
    return;
  }
  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  async function changeName(event) {
    event.preventDefault();

    await fetch("/api/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username),
    });

    router.reload();
  }
  if (session) {
    return (
      <div>
        <h3>
          <img
            src={session.user.image}
            style={{ width: "50px", borderRadius: "50%" }}
          />
          Hello {session.user.name}
        </h3>
        <form onSubmit={changeName}>
          <h4>Change UserName:</h4>
          <input type="text" value={username} onChange={handleChangeUsername} />
          <button type="submit">Change Username</button>
        </form>
      </div>
    );
  }

  return (
    <>
      {" "}
      Not signed in <br />
      Please Sign In to see your profile
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
