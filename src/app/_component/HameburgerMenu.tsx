"use client";

import Link from "next/link";
import { MainLogo, HamburgerMenuIcon } from "./Icons";
import { useState } from "react";
import DarkLightToggle from "./DarkLightToggle";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="fixed top-20px left-20px w-40px h-40px z-[98] hover:scale-125"
        onClick={() => setOpen(true)}
      >
        <HamburgerMenuIcon width={40} height={40} />
      </button>
      <div
        className="fixed w-[100%] h-dvh bg-[#888888] z-[98]"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 0.6 : 0,
        }}
        onClick={() => setOpen(false)}
      />
      <div
        className="ld-static shadow-light dark:shadow-dark fixed w-240px h-dvh flex flex-col items-center z-[99]"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-15.5rem)" }}
      >
        <div className="relative mt-30px mb-40px">
          <MainLogo width={175} height={25} />
        </div>
        <nav>
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="ld-interactive nav-btn">
              <div>HOME</div>
              <div />
            </div>
          </Link>
          <Link href="/grid" onClick={() => setOpen(false)}>
            <div className="ld-interactive nav-btn">
              <div>GRID</div>
              <div />
            </div>
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="ld-interactive nav-btn">
              <div>WEB SOCKET</div>
              <div />
            </div>
          </Link>
        </nav>
        <DarkLightToggle />
      </div>
    </>
  );
}
