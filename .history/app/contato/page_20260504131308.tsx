import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function Contato() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative px-12 py-18 text-center overflow-hidden mb-10">
        <div className="absolute z-0 inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <Image src="/img/logo-br.png" alt="" width={500} height={500} />
        </div>

        <h1 className="font-[Lora] text-[48px] font-normal text-[#17445B] mb-6">
          Contato
        </h1>
        <p className="font-[Lora] text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-10">
          Estamos disponíveis para ouvir o seu caso e orientá-lo com clareza. O primeiro passo começa aqui.
        </p>

        <button className="flex items-center relative z-10  gap-3 font-[Tenor_Sans] text-[16px] text-white bg-[#53707F] rounded-[20px] px-8 py-3 mx-auto cursor-pointer">
          Fale conosco
          <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
        </button>
      </section>

      <section className="bg-[#53707F] px-2 py-15 text-center">
        <h2 className="font-[Tenor_Sans] text-white text-[20px] tracking-widest mb-2">
          PRONTO PARA DAR O PRÓXIMO PASSO?
        </h2>
        <p className="font-[Tenor_Sans] text-white text-[14px]">
          Envie sua mensagem agora.
        </p>
      </section>

      <section className="bg-[#DCDCDC] px-6 md:px-20 py-16">
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
                <input type="text" className="bg-white rounded-full px-4 py-3 outline-none border border-[#182443] text-[14px] font-[Tenor_Sans]"/>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                <label className="font-[Tenor_Sans] text-[#182443] text-[14px]">E-mail</label>
                <input type="email" className="bg-white rounded-full px-4 py-3 outline-none border border-[#182443] text-[14px] font-[Tenor_Sans]"
                />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-[Tenor_Sans] text-[#182443] text-[14px]">Mensagem</label>
                <textarea rows={5} className="bg-white rounded-[16px] px-4 py-3 outline-none border border-[#182443] text-[14px] font-[Tenor_Sans] resize-none"
                />
            </div>

            <div className="flex justify-end">
                <button className="bg-[#53707F] text-white font-[Tenor_Sans] text-[14px] px-8 py-3 rounded-[15px] cursor-pointer">
                Enviar
                </button>
            </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}