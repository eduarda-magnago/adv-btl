import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function Termos() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
      <Header />

      <section className="relative px-12 py-18 text-center overflow-hidden mb-10">
        <div className="absolute z-0 inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <Image src="/img/logo-br.png" alt="" width={500} height={500} />
        </div>

        <h1 className="font-[Lora] text-[48px] font-normal text-[#17445B] mb-6">
          Nossa História
        </h1>
        <p className="font-[Lora] text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-10">
          Conheça a trajetória por trás da nossa advocacia. Uma história construída com dedicação, ética e compromisso com a justiça.
        </p>

        <button className="flex items-center relative z-10  gap-3 font-[Tenor_Sans] text-[16px] text-white bg-[#53707F] rounded-[20px] px-8 py-3 mx-auto cursor-pointer">
          Especializações
          <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
        </button>
      </section>

      <section className="bg-[#53707F] px-2 py-15 text-center">
        <h2 className="font-[Tenor_Sans] text-white text-[20px] tracking-widest mb-2">
          SAIBA MAIS
        </h2>
        <p className="font-[Tenor_Sans] text-white text-[14px]">
          Cada caso é único. Conheça os valores e a visão que guiam nossa atuação no direito penal.
        </p>
      </section>

    <Footer />
    </main>
  );
}