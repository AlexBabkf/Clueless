import SignIn from "../SignIn";
import { StyledHeader } from "./styledHeader";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <button onClick={() => history.back()}>
        <Image src="/left-trn.png" alt="go-back" width={30} height={30} />
      </button>
      <SignIn className="sign-in" />
      <h1>Clueless</h1>
    </StyledHeader>
  );
}
