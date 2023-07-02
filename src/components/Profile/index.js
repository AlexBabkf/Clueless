import Image from "next/image";
import Link from "next/link";
import { StyledProfile } from "./styledProfile";

export default function Profile({ userInfo, id }) {
  return (
    <StyledProfile>
      <div className="image-container">
        <Image
          src={userInfo.image}
          alt="user-avatar"
          width={150}
          height={150}
        />
      </div>
      <div className="right-section">
        <h2>Profile page of {userInfo.name}</h2>
        <h4>
          My favorite Beer: {userInfo.favorite ?? "No favourite beer yet."}
        </h4>
        <p>{userInfo.bio ?? "No user info has been added"}</p>
      </div>
      <div className="links">
        <Link href={`/users/${id}/likes`}>Liked Beers</Link>

        <Link href={`/users/${id}/comments`}>Comments</Link>
      </div>{" "}
    </StyledProfile>
  );
}
