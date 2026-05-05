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
          Termos & Política de Privacidade
        </h1>
        <p className="font-[Lora] text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-10">
          Transparência e responsabilidade no tratamento das suas informações. Leia com atenção os termos que regem o uso deste site.
        </p>

        <button className="flex items-center relative z-10  gap-3 font-[Tenor_Sans] text-[16px] text-white bg-[#53707F] rounded-[20px] px-8 py-3 mx-auto cursor-pointer">
          Alguma dúvida?
          <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
        </button>
      </section>
    <Footer />
        </main>
  );
}