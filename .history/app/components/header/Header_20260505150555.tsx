"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "INÍCIO" },
    { href: "/historia", label: "HISTÓRIA" },
    { href: "/atuacoes", label: "ATUAÇÕES" },
    { href: "/#artigos", label: "ARTIGOS" },
    { href: "/contato", label: "CONTATO" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="block md:hidden h-[76px]" />

      <header className={`fixed top-0 left-0 right-0 z-50 md:static transition-colors duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>

        <div className="flex justify-between items-center px-6 py-4 md:px-12 md:py-10">

          <Link href="/">
            <Image
              src="/img/bertolini-logo.png"
              alt="Bertolini Da Rós Advocacia"
              width={200}
              height={80}
              className="cursor-pointer w-[140px] md:w-[200px] h-auto"
            />
          </Link>

          <nav className="hidden md:flex gap-10 font-[Tenor_Sans] text-[15px] text-black tracking-widest">
            {navLinks.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/";
              return (
                <a key={item.href} href={item.href} className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-black after:transition-all after:duration-300 ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block w-6 h-[1.5px] bg-[#17445B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-[#17445B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-[#17445B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>

        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="flex flex-col items-center gap-6 py-6 bg-white border-t border-[#e0e0e0]">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-[Tenor_Sans] text-[14px] text-black tracking-widest hover:opacity-60 transition-opacity">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

      </header>
    </>
  );
}