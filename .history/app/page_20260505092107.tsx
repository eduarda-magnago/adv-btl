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
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const quote   = useReveal();
  const missao  = useReveal();
  const atuacoes = useReveal();
  const artigos  = useReveal();

  return (
    <main className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">

      <Header />

      <section className="px-6 pt-8 md:px-12">
        <h1 className="font-[Lora] text-[32px] md:text-[50px] font-normal text-[#17445B] leading-tight max-w-[600px] mb-6 md:mb-8">
          Advocacia criminal com propósito e precisão
        </h1>

        <p className="font-[Lora] text-[16px] md:text-[25px] font-normal text-[#0A0A0A] max-w-[700px] leading-relaxed mb-8 md:mb-12">
          Atuação especializada em direito penal, com foco em estratégia, técnica e dedicação absoluta à defesa dos nossos clientes.
        </p>

        <Link href="/contato">
          <button className="flex items-center gap-3 md:gap-4 font-[Tenor_Sans] text-[16px] md:text-[20px] text-[#182443] bg-transparent border border-[#182443] rounded-[25px] px-6 md:px-8 py-3 cursor-pointer">
            Entre em contato
            <Image src="/img/seta-botao.png" alt="ícone" width={32} height={32} />
          </button>
        </Link>

        <Image src="/img/ponte2.png" alt="Imagem da terceira ponte" width={800} height={600} className="absolute right-0 bottom-0" />
      </section>

      <section
        ref={quote.ref as React.RefObject<HTMLElement>}
        className={`bg-[#53707F] px-10 py-12 md:px-16 md:py-16 lg:px-20 mt-10 md:mt-16
          transition-all duration-700 ease-out
          ${quote.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-[Tenor_Sans] text-white text-[14px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[900px] mx-auto text-center italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        id="atuacoes"
        ref={atuacoes.ref as React.RefObject<HTMLElement>}
        className={`bg-[#ffffff] px-10 py-12 md:px-12 md:py-16 lg:px-20 text-center
          transition-all duration-700 ease-out
          ${atuacoes.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex justify-end mb-6 md:mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-[Tenor_Sans] text-black text-[14px] md:text-[16px] tracking-widest hover:opacity-70 bg-transparent border-none cursor-pointer"
          >
            {expanded ? "Leia menos -" : "Leia mais +"}
          </button>
        </div>

        <h2 className="font-[Tenor_Sans] text-black text-[16px] md:text-[20px] tracking-widest mb-8 md:mb-10">ATUAÇÕES</h2>

        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          O escritório atua na defesa criminal em toda a sua extensão, dos crimes comuns, como os praticados contra a pessoa, o patrimônio e com entorpecentes, aos delitos de maior complexidade no âmbito do Direito Penal Econômico, incluindo lavagem de capitais, crimes tributários, corrupção e ilícitos contra o sistema financeiro.
        </p>
        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          A atuação alcança ainda o Direito Penal Digital, com defesa especializada em crimes cibernéticos, fraudes eletrônicas e demais ilícitos praticados no ambiente virtual, área que exige atualização constante e compreensão técnica aprofundada do meio digital.
        </p>

        {expanded && (
          <>
            <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
              <b>DIREITO PENAL:</b> Defesa em todas as fases do processo penal, do inquérito à execução da pena. O escritório atua em crimes contra a honra, contra a dignidade sexual, contra o patrimônio, contra a vida e nas demais espécies delitivas previstas na legislação penal, sempre com compromisso na proteção das garantias fundamentais de cada cliente, independentemente da natureza ou complexidade do caso.
            </p>
            <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
              <b>DIREITO PENAL ECONÔMICO:</b> Atuação em casos que envolvem crimes contra a ordem econômica e financeira, como lavagem de dinheiro, crimes tributários, corrupção e fraudes corporativas. Uma área que exige domínio técnico interdisciplinar, aliando o Direito Penal ao universo empresarial e regulatório.
            </p>
            <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
              <b>DIREITO PENAL DIGITAL:</b> Assessoria e defesa em condutas praticadas no ambiente virtual, como estelionato digital, crimes contra a honra, invasão de dispositivos, crimes envolvendo inteligência artificial, entre outras. Uma frente de atuação cada vez mais relevante diante da expansão das relações humanas no espaço digital.
            </p>
          </>
        )}
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