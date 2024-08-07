"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollYPos = window.scrollY;
    const isScrollingUp = currentScrollYPos < scrollYPosition;

    setIsVisible(isScrollingUp || currentScrollYPos === 0);
    setScrollYPosition(currentScrollYPos);
  }, [scrollYPosition]);

  useEffect(() => {
    // only take effect on desktop sreens or larger
    if (window.innerWidth < 768) {
      return;
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`${
        isVisible ? "visible" : "invisible translate-y-[-100%]"
      } ease-in-out duration-300 flex items-center justify-between font-bold p-2 md:px-10 top-0 sticky z-50 bg-white drop-shadow-sm h-16`}
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            width={75}
            height={75}
            src="/logo_pure.svg"
            alt="logo"
            priority
          />
        </Link>
      </div>

      {/* Desktop version */}
      <div className="hidden md:flex items-center text-main gap-14 font-medium hover:opacity-80">
        <div>
          <Link
            href={process.env.NEXT_PUBLIC_URL_DOMAIN as string}
            target="_blank"
          >
            Visit Portfolio
          </Link>
        </div>
      </div>

      {/* Mobile version */}
      {/* <div className="block md:hidden p-1 rounded border border-transparent text-main hover:cursor-pointer hover:bg-white hover:border hover:border-main">
        <RxHamburgerMenu size={30} />
      </div> */}
    </nav>
  );
};

export default Navbar;
