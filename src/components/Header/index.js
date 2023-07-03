import SignIn from "../SignIn";
import { StyledHeader } from "./styledHeader";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isNeon, setIsNeon] = useState(true);

  function handleNeon() {
    setIsNeon(!isNeon);
  }

  return (
    <StyledHeader>
      <button onClick={() => history.back()} className="back-button">
        <Image src="/left-trn.png" alt="go-back" width={40} height={40} />
      </button>
      <SignIn className="sign-in" />

      <h1 className={isNeon ? "neon" : ""} onClick={handleNeon}>
        Clueless
      </h1>
    </StyledHeader>
  );
}
