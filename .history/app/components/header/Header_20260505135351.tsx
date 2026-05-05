"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Desktop & Mobile top bar */}
      <div className="flex justify-between items-center px-6 py-6 md:px-12 md:py-10">
        <Link href="/">
          <Image
            className="cursor-pointer w-[140px] md:w-[200px] h-auto"
            src="/img/bertolini-logo.png"
            alt="Bertolini Da Rós Advocacia"
            width={200}
            height={80}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          <div className="font-[Tenor_Sans] text-[15px] text-black tracking-widest no-underline flex gap-10 [&>a]:relative [&>a]:after:absolute [&>a]:after:bottom-0 [&>a]:after:left-0 [&>a]:after:h-[1.5px] [&>a]:after:w-0 [&>a]:after:bg-black [&>a]:after:transition-all [&>a]:after:duration-300 [&>a]:hover:after:w-full [&>a:first-child]:after:w-full">
            <a href="/">INÍCIO</a>
            <a href="/historia">HISTÓRIA</a>
            <a href="/atuacoes">ATUAÇÕES</a>
            <a href="/#artigos">ARTIGOS</a>
            <a href="/contato">CONTATO</a>
          </div>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#17445B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#17445B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#17445B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col items-center gap-6 py-6 bg-[#f8f8f8] border-t border-[#e0e0e0]">
          {[
            { href: "/", label: "INÍCIO" },
            { href: "/historia", label: "HISTÓRIA" },
            { href: "/atuacoes", label: "ATUAÇÕES" },
            { href: "/#artigos", label: "ARTIGOS" },
            { href: "/contato", label: "CONTATO" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[Tenor_Sans] text-[14px] text-black tracking-widest hover:opacity-60 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}