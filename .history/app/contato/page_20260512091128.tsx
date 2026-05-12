"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

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

export default function Contato() {
  const chamada    = useReveal();
  const formulario = useReveal();
  const canais     = useReveal();
  const fotoEs     = useReveal();
  const mapa       = useReveal();

  // ✅ Agora estão dentro do componente
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "erro">("idle");

  async function handleEnviar() {
    if (!nome || !email || !mensagem) {
      setStatus("erro");
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(
        "service_ty9yp1b",
        "template_m8tdvfp",
        { nome, email, mensagem },
        "NffOzps3l5na51rOu"
      );
      setStatus("ok");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch {
      setStatus("erro");
    }
  }

  return (
    <main className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative px-6 py-12 md:px-12 md:py-18 text-center overflow-hidden mb-6 md:mb-10">
        <div className="absolute z-0 inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <Image src="/img/logo-br.png" alt="" width={500} height={500} className="w-[280px] md:w-[500px] h-auto" />
        </div>
        <h1 className="font-[Lora] text-[32px] md:text-[48px] font-normal text-[#17445B] mb-4 md:mb-6">
          Contato
        </h1>
        <p className="font-[Lora] text-[14px] md:text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-8 md:mb-10">
          Estamos disponíveis para ouvir o seu caso e orientá-lo com clareza. A sua primeira etapa começa aqui.
        </p>
        <button>
          <a href="#contato" className="flex items-center relative z-10 gap-3 font-[Tenor_Sans] text-[14px] md:text-[16px] text-white bg-[#53707F] rounded-[20px] px-6 md:px-8 py-3 mx-auto cursor-pointer w-fit">
            Fale conosco
            <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
          </a>
        </button>
      </section>

      <section
        ref={chamada.ref as React.RefObject<HTMLElement>}
        className={`bg-[#53707F] px-6 py-12 md:px-2 md:py-15 text-center
          transition-all duration-700 ease-out
          ${chamada.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-white text-[16px] md:text-[20px] tracking-widest mb-2">
          PRONTO PARA DAR O PRÓXIMO PASSO?
        </h2>
        <p className="font-[Tenor_Sans] text-white text-[12px] md:text-[14px]">
          Envie sua mensagem agora.
        </p>
      </section>

      <section
        id="contato"
        ref={formulario.ref as React.RefObject<HTMLElement>}
        className={`bg-[#DCDCDC] px-6 md:px-20 py-16
          transition-all duration-700 ease-out
          ${formulario.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest text-center mb-2">
            CONTE SOBRE O SEU CASO
          </h2>
          <p className="font-[Tenor_Sans] text-black text-[14px] text-center mb-10">
            Use esse espaço para enviar sobre sua situação.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-[Tenor_Sans] text-[#182443] text-[14px]">Nome</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="bg-white rounded-full px-4 py-3 outline-none border border-[#182443] text-[14px] font-[Tenor_Sans]"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="font-[Tenor_Sans] text-[#182443] text-[14px]">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white rounded-full px-4 py-3 outline-none border border-[#182443] text-[14px] font-[Tenor_Sans]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-[Tenor_Sans] text-[#182443] text-[14px]">Mensagem</label>
              <textarea
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="bg-white rounded-[16px] px-4 py-3 outline-none border border-[#182443] text-[14px] font-[Tenor_Sans] resize-none"
              />
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={handleEnviar}
                disabled={status === "loading"}
                className="bg-[#53707F] text-white font-[Tenor_Sans] text-[14px] px-8 py-3 rounded-[15px] cursor-pointer disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
              </button>
              {status === "ok" && (
                <p className="text-green-700 text-[13px] font-[Tenor_Sans]">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {status === "erro" && (
                <p className="text-red-600 text-[13px] font-[Tenor_Sans]">
                  Preencha todos os campos e tente novamente.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={canais.ref as React.RefObject<HTMLElement>}
        className={`bg-white px-6 md:px-20 py-16 text-center
          transition-all duration-700 ease-out
          ${canais.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-6">
          OUTROS CANAIS
        </h2>
        <div className="font-[Tenor_Sans] text-black text-[14px] flex flex-col gap-2">
          <p>Telefone: +55 (27) 997944606</p>
          <p>E-mail: lazarodaros@gmail.com</p>
          <p>Instagram: @bertolinidaros.adv</p>
        </div>
      </section>

      <section
        ref={fotoEs.ref as React.RefObject<HTMLElement>}
        className={`relative w-full h-[400px]
          transition-all duration-700 ease-out
          ${fotoEs.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <Image src="/img/foto-es.png" alt="Espírito Santo" fill />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-[20px] px-15 py-8 w-[90%] md:w-[550px] text-center">
            <h3 className="font-[Lora] text-black text-[22px] font-normal mb-4">
              Referência jurídica no Espírito Santo
            </h3>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed">
              Atuação junto ao TJES, TRT-17ª e Justiça Federal com conhecimento profundo do mercado e da jurisprudência local.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={mapa.ref as React.RefObject<HTMLElement>}
        className={`bg-[#D9D9D9] px-6 md:px-20 py-16
          transition-all duration-700 ease-out
          ${mapa.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest text-center mb-8">
          LOCALIZAÇÃO
        </h2>
        <div className="max-w-[900px] mx-auto rounded-[16px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Rua+Alfeu+Alves+Pereira,+79,+Enseada+do+Suá,+Vitória+-+ES&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}