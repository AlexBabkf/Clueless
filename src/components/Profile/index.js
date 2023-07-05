import Image from "next/image";
import Link from "next/link";
import { StyledProfile } from "./styledProfile";

export default function Profile({ userInfo, id }) {
  return (
    <StyledProfile>
      <div className="profile-card">
        <div className="image-container">
          <Image
            src={userInfo.image}
            alt="user-avatar"
            width={150}
            height={150}
          />
        </div>
        <div className="right-section">
          <h1>{userInfo.name}</h1>
          <div className="user-info">
            <h3>
              Favourite Beer: {userInfo.favorite ?? "No favourite beer yet."}
            </h3>
            <p>About me: {userInfo.bio ?? "No user info has been added"}</p>
          </div>
        </div>
        <div className="links">
          <Link href={`/users/${id}/likes`}>Liked Beers</Link>
          <Link href={`/users/${id}/comments`}>Comments</Link>
        </div>{" "}
      </div>
    </StyledProfile>
  );
}
