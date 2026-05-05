import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function Historia() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative px-12 py-18 text-center overflow-hidden mb-10">
        <div className="absolute z-0 inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <Image src="/img/logo-br.png" alt="" width={500} height={500} />
        </div>

        <h1 className="font-[Lora] text-[48px] font-normal text-[#17445B] mb-6">
          Nossa História
        </h1>
        <p className="font-[Lora] text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-10">
          Conheça a trajetória por trás da nossa advocacia. Um escritório construído desde o início com propósito claro e determinação para enfrentar os desafios de cada cliente.
        </p>

        <button className="flex items-center relative z-10  gap-3 font-[Tenor_Sans] text-[16px] text-white bg-[#53707F] rounded-[20px] px-8 py-3 mx-auto cursor-pointer">
          Especializações
          <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
        </button>
      </section>

      <section className="bg-[#53707F] px-2 py-15 text-center">
        <h2 className="font-[Tenor_Sans] text-white text-[20px] tracking-widest mb-2">
          QUEM SOMOS
        </h2>
        <p className="font-[Tenor_Sans] text-white text-[14px]">
          Cada caso é único. Conheça os valores e a visão que guiam nossa atuação no direito penal.
        </p>
      </section>

      <section className="bg-[#F0F0F0] px-20 py-16 text-center">
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-10">O ESCRITÓRIO</h2>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ea esse aperiam ab dolor quis vel, veniam sed dolore eveniet error odio sit ut cupiditate iure laboriosam officiis rerum quaerat.
        </p>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mx-auto text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae atque vitae magni aut corporis! Eligendi amet, corrupti voluptas provident nostrum magnam in beatae optio, neque autem commodi nisi recusandae.
        </p>
      </section>

      <section className="bg-[#f8f8f8] px-20 py-16">
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-[900px] mx-auto">
          <div className="w-[260px] h-[260px] bg-[#C4C4C4] flex-shrink-0" />
          <div className="flex flex-col gap-4">
            <h2 className="font-[Tenor_Sans] text-black text-[18px] tracking-widest">
              ADV. LÁZARO BERTOLINI
            </h2>
            <p className="font-[Tenor_Sans] text-black text-[14px] tracking-widest">
              OAB/ES 41.885
            </p>
            <p className="font-[Tenor_Sans] text-black text-[14px] leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-[Tenor_Sans] text-black text-[14px] leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-[#ffffff] px-20 py-16 text-center">
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-4">
            NOSSOS PRINCÍPIOS
        </h2>
        <p className="font-[Tenor_Sans] text-black text-[16px] mb-12 max-w-[700px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <div className="bg-[#EBEBEB] rounded-[16px] overflow-hidden cursor-pointer">
            <div className="bg-[#53707F] px-6 py-3 flex items-center justify-center gap-3">
                <Image src="/img/icone-justica.png" alt="Justiça" width={24} height={24} />
                <h3 className="font-[Tenor_Sans] text-white text-[18px]">Justiça</h3>
            </div>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed text-justify p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            </div>

            <div className="bg-[#EBEBEB] rounded-[16px] overflow-hidden cursor-pointer">
            <div className="bg-[#53707F] px-6 py-3 flex items-center justify-center gap-3">
                <Image src="/img/icone-etica.png" alt="Ética" width={24} height={24} />
                <h3 className="font-[Tenor_Sans] text-white text-[18px]">Ética</h3>
            </div>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed text-justify p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            </div>

            <div className="bg-[#EBEBEB] rounded-[16px] overflow-hidden cursor-pointer">
            <div className="bg-[#53707F] px-6 py-3 flex items-center justify-center gap-3">
                <Image src="/img/icone-compromisso.png" alt="Compromisso" width={24} height={24} />
                <h3 className="font-[Tenor_Sans] text-white text-[18px]">Compromisso</h3>
            </div>
            <p className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed text-justify p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            </div>

        </div>
        </section>

        <section className="bg-[#F0F0F0] px-20 py-16 text-center">
            <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-4">
                ATUAÇÕES
            </h2>
            <p className="font-[Tenor_Sans] text-black text-[16px] mb-10 max-w-[700px] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto cursor-pointer">
                {[
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                ].map((item, index) => (
                <div
                    key={index}
                    className="bg-[#53707F] rounded-full px-6 py-3 flex items-center gap-3"
                >
                    <Image src="/img/icone-check.png" alt="check" width={24} height={24} />
                    <span className="font-[Tenor_Sans] text-white text-[14px]">{item}</span>
                </div>
                ))}
            </div>
        </section>

    <Footer />
    </main>
  );
}