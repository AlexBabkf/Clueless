import Link from "next/link";
import Image from "next/image";
import { StyledNavigation } from "./styledNavigation";

export default function NavigationBar() {
  return (
    <StyledNavigation>
      <Link href="/">
        <Image src="/beer.png" alt="homepage" width={50} height={50} />
      </Link>
      <Link href="/search">
        <Image src="/search.png" alt="search-page" width={50} height={50} />
      </Link>
      <Link href="/map">
        <Image src="/gloobe.png" alt="map-page" width={50} height={50} />
      </Link>
    </StyledNavigation>
  );
}
