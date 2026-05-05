"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold,
        rootMargin: "-40px 0px -40px 0px",
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Historia() {
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
          Nossa História
        </h1>
        <p className="font-[Lora] text-[14px] md:text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-8 md:mb-10">
          Conheça a trajetória por trás da nossa advocacia. Um escritório construído desde o início com propósito claro e determinado para enfrentar os desafios de cada cliente.
        </p>
        <button>
          <a href="#valores" className="flex items-center relative z-10 gap-3 font-[Tenor_Sans] text-[14px] md:text-[16px] text-white bg-[#53707F] rounded-[20px] px-6 md:px-8 py-3 mx-auto cursor-pointer w-fit">
            Valores da empresa
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
          Nossa visão no ramo da advocacia.
        </p>
      </section>

      <section
        id="missao"
        ref={escritorio.ref as React.RefObject<HTMLElement>}
        className={`bg-[#F0F0F0] px-10 py-12 md:px-12 md:py-16 lg:px-20 text-center
          transition-all duration-700 ease-out
          ${escritorio.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[16px] md:text-[20px] tracking-widest mb-8 md:mb-10">O ESCRITORIO</h2>

        <p className="font-[Tenor_Sans] text-black text-[13px] md:text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          Com atuação centrada no Direito Criminal e uma visão multidisciplinar do exercício jurídico, a Bertolini Da Rós Advocacia se destaca pela união entre rigor técnico e compromisso humano.<br/><br/> O escritório tem na produção acadêmica e na formação continuada pilares fundamentais de sua identidade: artigos publicados, especializações e participação ativa nos debates da comunidade jurídica traduzem essa vocação. A prática diária é guiada pela convicção de que uma defesa eficiente exige preparo constante, estratégia personalizada e atenção genuína a cada caso.
        </p>
      </section>

      <section
        id="valores"
        ref={principios.ref as React.RefObject<HTMLElement>}
        className={`bg-[#ffffff] px-20 py-16 text-center
          transition-all duration-700 ease-out
          ${principios.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-4">
          NOSSOS PRINCÍPIOS
        </h2>
        <p className="font-[Tenor_Sans] text-black text-[16px] mb-12 max-w-[700px] mx-auto">
          Os valores que guiam nossa atuação e  definem nossa identidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          <div className="bg-[#EBEBEB] rounded-[16px] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-[#53707F] px-6 py-3 flex items-center justify-center gap-3">
              <Image src="/img/icone-justica.png" alt="Justiça" width={24} height={24} />
              <h3 className="font-[Tenor_Sans] text-white text-[18px]">Justiça</h3>
            </div>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed text-justify p-6">
              Garantir uma defesa justa e tecnicamente sólida é o nosso dever. Atuamos com rigor e respeito às garantias constitucionais que norteiam o processo penal brasileiro.
            </p>
          </div>

          <div className="bg-[#F3F3F3] rounded-[16px] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-[#53707F] px-6 py-3 flex items-center justify-center gap-3">
              <Image src="/img/icone-etica.png" alt="Ética" width={24} height={24} />
              <h3 className="font-[Tenor_Sans] text-white text-[18px]">Ética</h3>
            </div>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed text-justify p-6">
              Atuamos com transparência, sigilo profissional e rigor moral. Cada situação é tratada com a seriedade e a discrição que a advocacia criminal exige de seus profissionais.
            </p>
          </div>

          <div className="bg-[#F3F3F3] rounded-[16px] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-[#53707F] px-6 py-3 flex items-center justify-center gap-3">
              <Image src="/img/icone-compromisso.png" alt="Compromisso" width={24} height={24} />
              <h3 className="font-[Tenor_Sans] text-white text-[18px]">Compromisso</h3>
            </div>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed text-justify p-6">
              Dedicação integral do primeiro contato à decisão final. Uma defesa eficaz nasce do preparo constante e da atenção genuína às particularidades de cada cliente.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={advogado.ref as React.RefObject<HTMLElement>}
        className={`bg-[#DCDCDC] px-20 py-16
          transition-all duration-700 ease-out
          ${advogado.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-[900px] mx-auto">
          <div className="w-[260px] h-[300px] bg-[#C4C4C4] flex-shrink-0" />
          <div className="flex flex-col gap-4">
            <h2 className="font-[Tenor_Sans] text-black text-[18px] tracking-widest">
              ADV. LÁZARO BERTOLINI
            </h2>
            <p className="font-[Tenor_Sans] text-black text-[14px] tracking-widest">
              OAB/ES 41.885
            </p>
            <p className="font-[Tenor_Sans] text-black text-[14px] leading-relaxed text-justify">
              Advogado criminalista com atuação multidisciplinar, combina experiência prática e formação técnica no exercício da advocacia. Cursa MBA em Direito Digital e Inteligência Artificial pela Faculdade de Direito de VItória (FDV).
            </p>
            <p className="font-[Tenor_Sans] text-black text-[14px] leading-relaxed text-justify">
              É Membro da Comissão de Direito Penal Econômico e de Compliance da OAB/ES, participa ativamente dos debates institucionais que moldam a prática jurídica criminal no país. Integra ainda o grupo de estudos avançados do IBCCRIM (Instituto Brasileiro de Ciências Criminais) com foco em jurisprudência nos Tribunais Superiores e, publica artigos em revistas acadêmicas e sites jurídicos, contribuindo para o desenvolvimento científico do Direito Penal.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}