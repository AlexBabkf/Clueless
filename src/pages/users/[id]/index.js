import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Profile from "@/components/Profile";
import UserForm from "@/components/UserUpdate";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({});
  const [card, setCard] = useState(false);

  const router = useRouter();

  const { id } = router.query;

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

  function showCard() {
    setCard(true);
  }

  function closeCard() {
    setCard(false);
  }

  return (
    <div>
      {session && session.user._id === id && (
        <button onClick={showCard}>Update your Profile</button>
      )}
      {card && <UserForm closeCard={closeCard} change />}
      <Profile userInfo={userInfo} id={id} />
    </div>
  );
}
