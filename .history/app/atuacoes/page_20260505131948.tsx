"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Atuacoes() {
  const quemSomos  = useReveal();
  const escritorio = useReveal();
  const principios = useReveal();
  const advogado   = useReveal();

  return (
    <main className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative px-6 py-12 md:px-12 md:py-18 text-center overflow-hidden mb-6 md:mb-10">
        <div className="absolute z-0 inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <Image src="/img/logo-br.png" alt="" width={500} height={500} className="w-[280px] md:w-[500px] h-auto" />
        </div>

        <h1 className="font-[Lora] text-[32px] md:text-[48px] font-normal text-[#17445B] mb-4 md:mb-6">
          Atuações
        </h1>
        <p className="font-[Lora] text-[14px] md:text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-8 md:mb-10">
          Conheça a trajetória por trás da nossa advocacia. Um escritório construído desde o início com propósito claro e determinação para enfrentar os desafios de cada cliente.
        </p>
        <button>
          <a href="#atuacoes" className="flex items-center relative z-10 gap-3 font-[Tenor_Sans] text-[14px] md:text-[16px] text-white bg-[#53707F] rounded-[20px] px-6 md:px-8 py-3 mx-auto cursor-pointer w-fit">
            Especializações
            <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
          </a>
        </button>
      </section>

      <section
        ref={quemSomos.ref as React.RefObject<HTMLElement>}
        className={`bg-[#53707F] px-6 py-12 md:px-2 md:py-15 text-center
          transition-all duration-700 ease-out
          ${quemSomos.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-white text-[16px] md:text-[20px] tracking-widest mb-2">
          QUEM SOMOS
        </h2>
        <p className="font-[Tenor_Sans] text-white text-[12px] md:text-[14px]">
          Conheça mais sobre o nosso trabalho.
        </p>
      </section>

      <section
        id="missao"
        ref={escritorio.ref as React.RefObject<HTMLElement>}
        className={`bg-[#F0F0F0] px-10 py-12 md:px-12 md:py-16 lg:px-20 text-center
          transition-all duration-700 ease-out
          ${escritorio.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[16px] md:text-[20px] tracking-widest mb-8 md:mb-10">NOSSA ATUAÇÃO</h2>

        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          O escritório atua na defesa criminal em toda a sua extensão, dos crimes comuns, como os praticados contra a pessoa, o patrimônio e com entorpecentes, aos delitos de maior complexidade no âmbito do Direito Penal Econômico, incluindo lavagem de capitais, crimes tributários, corrupção e ilícitos contra o sistema financeiro.<br/>

          A atuação alcança ainda o Direito Penal Digital, com defesa especializada em crimes cibernéticos, fraudes eletrônicas e demais ilícitos praticados no ambiente virtual, área que exige atualização constante e compreensão técnica aprofundada do meio digital.
        </p>
      </section>

      <Footer />
    </main>
  );
}