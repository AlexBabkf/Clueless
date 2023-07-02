import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { StyledDropdown } from "./styledDropdown";
import Link from "next/link";

export default function SignIn() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  if (session) {
    return (
      <>
        <h3>
          <StyledDropdown>
            <button onClick={handleOpen} className="dropdown">
              {" "}
              <Image
                src={session.user.image}
                alt="profile-pic"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </button>
            {open ? (
              <ul className="menu">
                <li className="menu-item">
                  <Link href={`users/${session.user._id}`}>Profile</Link>
                </li>
                <li className="menu-item">
                  <button onClick={() => signOut()}>Sign out</button>
                </li>
              </ul>
            ) : null}
          </StyledDropdown>
        </h3>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} className="sign-in">
        <b>Sign in</b>
      </button>
    </>
  );
}
