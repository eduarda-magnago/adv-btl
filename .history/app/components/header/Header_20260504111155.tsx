import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
      <header className="flex justify-between items-center px-12 py-10">
        <Image className="cursor-pointer" src="/img/bertolini-logo.png" alt="Bertolini Da Rós Advocacia" width={200} height={80}/>

        <nav className="flex gap-10">
          <div className="font-[Tenor_Sans] text-[15px] text-black tracking-widest no-underline flex gap-10">
            <a href="#missao">MISSÃO</a>
            <a href="#historia">HISTÓRIA</a>
            <a href="#servicos">SERVIÇOS</a>
            <a href="#artigos">ARTIGOS</a>
            <a href="#contato">CONTATO</a>
          </div>
        </nav>
      </header>
    </main>
  );
}