import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f5f3ee] min-h-screen">
      <header className="flex justify-between items-center px-16 py-8">
        <Image src="img/logo.png" alt="Bertolini Da Rós Advocacia" width={160} height={80} />

        <nav className="flex gap-12">
          {["Missão", "História", "Serviços", "Artigos", "Contato"].map((item) => (
            <a key={item} href="#" className="font-[Tenor_Sans] text-[25px] text-black tracking-widest no-underline">
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
      </header>

      <section className="px-16 py-20">
        <h1 className="font-[Lora] text-[80px] font-normal text-[#17445B] leading-tight max-w-[600px] mb-8">
          Advocacia criminal com propósito e precisão
        </h1>

        <p className="font-[Lora] text-[35px] font-normal text-[#0A0A0A] max-w-[500px] leading-relaxed mb-12">
          Atuação especializada em direito penal, com foco em estratégia, técnica e dedicação absoluta à defesa dos nossos clientes
        </p>

        <button className="flex items-center gap-3 font-[Tenor_Sans] text-[35px] text-[#182443] bg-transparent border border-[#182443] rounded px-8 py-3 cursor-pointer">
          Entre em contato
          <Image src="/icone-seta.png" alt="ícone" width={32} height={32} />
        </button>
      </section>

    </main>
  );
}