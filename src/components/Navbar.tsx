"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollYPos = window.pageYOffset;
      const isScrollingUp = currentScrollYPos < scrollYPosition;

      setIsVisible(isScrollingUp || currentScrollYPos === 0);
      setScrollYPosition(currentScrollYPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYPosition]);

  return (
    <nav
      className={`${
        isVisible ? "visible" : "invisible translate-y-[-100%]"
      } ease-in-out duration-300 flex items-center justify-between font-bold p-2 md:px-10 top-0 sticky z-50 bg-white drop-shadow-sm`}
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/M_logo.svg"
            alt="logo"
            priority
          />
        </Link>
      </div>

      {/* Desktop version */}
      <div className="hidden md:flex items-center text-main gap-14 font-medium hover:opacity-80">
        <div>
          <Link href="https://miroslavpillar.eu" target="_blank">
            Go to miroslavpillar.eu
          </Link>
        </div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden p-1 rounded border border-transparent text-main hover:cursor-pointer hover:bg-white hover:border hover:border-main">
        <RxHamburgerMenu size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
