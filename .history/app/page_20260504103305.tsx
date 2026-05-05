import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
      <header className="flex justify-between items-center px-12 py-10">
        <Image className="cursor-pointer" src="/img/bertolini-logo.png" alt="Bertolini Da Rós Advocacia" width={200} height={80}/>

        <nav className="flex gap-10">
          <div className="font-[Tenor_Sans] text-[15px] text-black tracking-widest no-underline flex gap-10">
            <a href="#">MISSÃO</a>
            <a href="#">HISTÓRIA</a>
            <a href="#">SERVIÇOS</a>
            <a href="#">ARTIGOS</a>
            <a href="#">CONTATO</a>
          </div>
        </nav>
      </header>

      <section className="px-12 pt-8">
        <h1 className="font-[Lora] text-[50px] font-normal text-[#17445B] leading-tight max-w-[600px] mb-8">
          Advocacia criminal com propósito e precisão
        </h1>

        <p className="font-[Lora] text-[25px] font-normal text-[#0A0A0A] max-w-[700px] leading-relaxed mb-12">
          Atuação especializada em direito penal, com foco em estratégia, técnica e dedicação absoluta à defesa dos nossos clientes.
        </p>

        <button className="flex items-center gap-4 font-[Tenor_Sans] text-[20px] text-[#182443] bg-transparent border border-[#182443] rounded-[25px] px-8 py-3 cursor-pointer">
          Entre em contato
          <Image src="/img/seta-botao.png" alt="ícone" width={32} height={32} />
        </button>
      </section>

      <section className="bg-[#53707F] px-20 py-16 mt-16">
        <p className="font-[Tenor_Sans] text-white text-[20px] leading-relaxed max-w-[900px] mx-auto text-center italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
      </section>

      <section className="bg-[#F0F0F0] px-20 py-16 text-center just">
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-10">MISSÃO</h2>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mb-6">
          A Bertolini Da Rós Advocacia tem como missão a prestação de serviços jurídicos criminais com rigor técnico, postura ética e dedicação incansável à causa de cada cliente. O escritório desenvolve uma advocacia criminal interdisciplinar, estabelecendo parcerias estratégicas com profissionais de áreas complementares ao Direito para construir defesas sólidas, fundamentadas e tecnicamente abrangentes.
        </p>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px]">
          Pautamos nossa atuação pelo trabalho árduo e pela entrega integral a cada caso. A discrição absoluta no trato das informações e o uso criterioso de tecnologia de ponta garantem ao cliente não apenas uma defesa competente, mas também segurança, transparência e comunicação eficiente em todas as etapas do processo.
        </p>
      </section>

    </main>
  );
}