"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useState, useEffect, useRef } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold,
        rootMargin: "-80px 0px -80px 0px",
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const quote    = useReveal();
  const missao   = useReveal();
  const atuacoes = useReveal();
  const artigos  = useReveal();

  return (
    <main className="bg-[#f8f8f8] min-h-screen overflow-x-hidden relative">
      <div className="hidden md:block absolute top-0 right-0 w-[65%] z-0" style={{ height: '100dvh', maxHeight: '700px' }}>
        <Image
          src="/img/praia.png"
          alt="Vitória ES"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] from-[0%] via-[#f8f8f8]/60 via-[40%] to-transparent to-[65%]" />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="px-6 pt-8 md:px-12 relative z-10 pb-16 md:pb-24">
          <h1 className="font-[Lora] text-[32px] md:text-[50px] font-normal text-[#17445B] leading-tight max-w-[600px] mb-6 md:mb-8">
            Advocacia criminal com propósito e precisão
          </h1>
          <p className="font-[Lora] text-[16px] md:text-[25px] font-normal text-[#0A0A0A] max-w-[700px] leading-relaxed mb-8 md:mb-12">
            Atuação especializada em direito penal, com foco em estratégia,
            técnica e dedicação absoluta à defesa dos nossos clientes.
          </p>
          <div className="w-fit">
            <Link href="/contato">
              <button className="group flex items-center gap-3 md:gap-4 font-[Tenor_Sans] text-[16px] md:text-[20px] text-[#182443] bg-transparent border border-[#182443] rounded-[25px] px-6 md:px-8 py-3 cursor-pointer transition-all duration-300 hover:bg-[#53707F] hover:border-[#c9c8c8] hover:text-white">
                Entre em contato
                <Image
                  src="/img/seta-botao.png"
                  alt="ícone"
                  width={32}
                  height={32}
                  className="w-6.5 h-6.5 md:w-8 md:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </Link>
          </div>
        </section>
      </div>

      <section
        ref={quote.ref as React.RefObject<HTMLElement>}
        className={`bg-[#53707F] px-10 py-12 md:px-16 md:py-16 lg:px-20 mt-15 md:mt-0
          transition-all duration-700 ease-out
          ${quote.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-[Tenor_Sans] text-white text-[14px] md:text-[18px] lg:text-[18px] leading-relaxed max-w-[900px] mx-auto text-center italic">
          "O fim do Direito não é abolir nem restringir, mas preservar e ampliar a liberdade." <br />— John Locke
        </p>
      </section>

      <section
        id="missao"
        ref={missao.ref as React.RefObject<HTMLElement>}
        className={`bg-[#F0F0F0] px-10 py-12 md:px-12 md:py-16 lg:px-20 text-center
          transition-all duration-700 ease-out
          ${missao.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[16px] md:text-[20px] tracking-widest mb-8 md:mb-10">MISSÃO</h2>

        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          A Bertolini Da Rós Advocacia tem como missão a prestação de serviços jurídicos criminais com rigor técnico, postura ética e dedicação incansável à causa de cada cliente. O escritório desenvolve uma advocacia criminal interdisciplinar, estabelecendo parcerias estratégicas com profissionais de áreas complementares ao Direito para construir defesas sólidas, fundamentadas e tecnicamente abrangentes.
        </p>

        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mx-auto text-justify">
          Pautamos nossa atuação pelo trabalho árduo e pela entrega integral a cada caso. A discrição absoluta no trato das informações e o uso criterioso de tecnologia de ponta garantem ao cliente não apenas uma defesa competente, mas também segurança, transparência e comunicação eficiente em todas as etapas do processo.
        </p>
      </section>

      <section
        ref={atuacoes.ref as React.RefObject<HTMLElement>}
        className={`bg-[#ffffff] px-10 py-12 md:px-12 md:py-16 lg:px-20 text-center
          transition-all duration-700 ease-out
          ${atuacoes.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex justify-end mb-9 md:mb-4">
          <Link href="/atuacoes">
            <button
              className="font-[Tenor_Sans] text-black text-[14px] md:text-[16px] tracking-widest hover:opacity-70 bg-transparent border-none cursor-pointer"
            >
              Veja mais + 
            </button>
          </Link>
        </div>

        <h2 className="font-[Tenor_Sans] text-black text-[16px] md:text-[20px] tracking-widest mb-8 md:mb-10">ATUAÇÕES</h2>

        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          Defesa criminal completa, dos crimes comuns aos de alta complexidade, como lavagem de capitais, crimes tributários e corrupção, com atuação especializada também no Direito Penal Digital.
        </p>
      </section>

      <section
        id="artigos"
        ref={artigos.ref as React.RefObject<HTMLElement>}
        className={`bg-[#F0F0F0] px-6 py-12 md:px-12 md:py-16 lg:px-20
          transition-all duration-700 ease-out
          ${artigos.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[16px] md:text-[20px] tracking-widest mb-8 md:mb-12 text-center">ARTIGOS PUBLICADOS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-[900px] mx-auto">
          <Link href="https://www.conjur.com.br/2025-nov-28/as-implicacoes-de-infidelidade-patrimonial-no-caso-do-banco-master/" target="_blank" className="bg-[#53707F] rounded-[20px] p-6 md:p-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="font-[Tenor_Sans] font-semibold text-white text-[13px] md:text-[14px] tracking-widest mb-3 md:mb-4 text-center">
              ARTIGO 01
            </h3>
            <h3 className="font-[Tenor_Sans] text-white text-[13px] md:text-[14px] tracking-widest mb-3 md:mb-4 text-center">
              As implicações de infidelidade patrimonial no caso do Banco Master
            </h3>
            <p className="font-[Tenor_Sans] text-white text-[12px] md:text-[13px] leading-relaxed text-justify">
              Foi preso semana passada Daniel Vorcaro, dono do Banco Master, suspeito da prática dos crimes de gestão fraudulenta [...]
            </p>
          </Link>

          <Link href="https://www.conjur.com.br/2025-jan-31/o-lancamento-definitivo-do-credito-tributario-como-condicao-objetiva-de-punibilidade-e-o-principio-da-independencia-de-instancias/" target="_blank" className="bg-[#53707F] rounded-[20px] p-6 md:p-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="font-[Tenor_Sans] font-semibold text-white text-[13px] md:text-[14px] tracking-widest mb-3 md:mb-4 text-center">
              ARTIGO 02
            </h3>
            <h3 className="font-[Tenor_Sans] text-white text-[13px] md:text-[14px] tracking-widest mb-3 md:mb-4 text-center">
              Lançamento definitivo do crédito tributário como condição objetiva de punibilidade
            </h3>
            <p className="font-[Tenor_Sans] text-white text-[12px] md:text-[13px] leading-relaxed text-justify">
              Na perspectiva de tutelar criminalmente a ordem tributária, extensas discussões foram e ainda são realizadas [...]
            </p>
          </Link>

          <Link href="https://www.migalhas.com.br/depeso/403681/o-dilema-das-representacoes-fiscais-para-fins-penais-e-voto-no-carf" target="_blank" className="bg-[#53707F] rounded-[20px] p-6 md:p-8 cursor-pointer sm:col-span-2 md:col-span-1 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="font-[Tenor_Sans] font-semibold text-white text-[13px] md:text-[14px] tracking-widest mb-3 md:mb-4 text-center">
              ARTIGO 03
            </h3>
            <p className="font-[Tenor_Sans] text-white text-[13px] md:text-[14px] tracking-widest mb-3 md:mb-4 text-center">
              O novo dilema das representações fiscais para fins penais e o voto de qualidade no CARF
            </p>
            <p className="font-[Tenor_Sans] text-white text-[12px] md:text-[13px] leading-relaxed text-justify">
              A lei 14.689/23 reintroduziu o "voto de qualidade", afetando a persecução penal-tributária com maior [...]
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}