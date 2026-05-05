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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerWhite = scrolled || menuOpen;

  return (
    <>
      <div className="block md:hidden h-[76px]" />

      <header className={`fixed top-0 left-0 right-0 z-50 md:static transition-colors duration-300 ${headerWhite ? "bg-white shadow-sm" : "bg-transparent"}`}>

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

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1px] bg-[#333] absolute transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`block w-5 h-[1px] bg-[#333] absolute transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-5 h-[1px] bg-[#333] absolute transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>

        <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex justify-between items-center px-6 py-4">
            <Link href="/">
              <Image
                src="/img/bertolini-logo.png"
                alt="Bertolini Da Rós Advocacia"
                width={200}
                height={80}
                className="cursor-pointer w-[140px] h-auto"
              />
            </Link>
            <button
              className="flex justify-center items-center w-8 h-8 cursor-pointer relative"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <span className="block w-5 h-[1px] bg-[#242424] absolute rotate-45" />
              <span className="block w-5 h-[1px] bg-[#242424] absolute -rotate-45" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center gap-10 h-[calc(100%-76px)]">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-[Tenor_Sans] text-[18px] text-black tracking-widest hover:text-[#1f1f1f] transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

      </header>
    </>
  );
}