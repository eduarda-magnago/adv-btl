"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "INÍCIO" },
    { href: "/historia", label: "HISTÓRIA" },
    { href: "/atuacoes", label: "ATUAÇÕES" },
    { href: "/#artigos", label: "ARTIGOS" },
    { href: "/contato", label: "CONTATO" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

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
          <div className="font-[Tenor_Sans] text-[15px] text-black tracking-widest no-underline flex gap-10">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "relative",
                  "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-black after:transition-all after:duration-300",
                  // Página ativa: traço permanece visível
                  isActive(item.href) ? "after:w-full" : "after:w-0 hover:after:w-full",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
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
          {navLinks.map((item) => (
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