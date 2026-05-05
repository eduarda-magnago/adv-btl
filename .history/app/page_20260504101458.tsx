import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
      <header className="flex justify-between items-centerpy-2">
        <Image className="cursor-pointer" src="/img/logo-bertolini.png" alt="Bertolini Da Rós Advocacia" width={300} height={80}/>

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

      <section className="px-12">
        <h1 className="font-[Lora] text-[50px] font-normal text-[#17445B] leading-tight max-w-[600px] mb-8">
          Advocacia criminal com propósito e precisão
        </h1>

        <p className="font-[Lora] text-[30px] font-normal text-[#0A0A0A] max-w-[700px] leading-relaxed mb-12">
          Atuação especializada em direito penal, com foco em estratégia, técnica e dedicação absoluta à defesa dos nossos clientes.
        </p>

        <button className="flex items-center gap-4 font-[Tenor_Sans] text-[25px] text-[#182443] bg-transparent border border-[#182443] rounded px-8 py-3 cursor-pointer">
          Entre em contato
          <Image src="/img/seta-botao.png" alt="ícone" width={32} height={32} />
        </button>
      </section>

    </main>
  );
}