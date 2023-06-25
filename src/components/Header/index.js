import SignIn from "../SignIn";
import { StyledHeader } from "./styledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <SignIn className="sign-in" />
      <h1>Clueless</h1>
    </StyledHeader>
  );
}
