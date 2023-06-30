import { StyledTopButton } from "./styledTopButton";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TopButton() {
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    function showButton() {
      setIsSeen(window.scrollY < window.screen.height / 2);
    }
    window.addEventListener("scroll", showButton);

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <StyledTopButton isSeen={isSeen} onClick={scrollToTop}>
      <Image src="/topp.png" alt="top-icon" width={10} height={10} />
    </StyledTopButton>
  );
}
