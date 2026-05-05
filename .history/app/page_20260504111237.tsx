import Image from "next/image";
import Footer from "./components/Footer";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
      <Header />

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

      <section id="missao" className="bg-[#F0F0F0] px-20 py-16 text-center">
        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-10">MISSÃO</h2>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          A Bertolini Da Rós Advocacia tem como missão a prestação de serviços jurídicos criminais com rigor técnico, postura ética e dedicação incansável à causa de cada cliente. O escritório desenvolve uma advocacia criminal interdisciplinar, estabelecendo parcerias estratégicas com profissionais de áreas complementares ao Direito para construir defesas sólidas, fundamentadas e tecnicamente abrangentes.
        </p>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mx-auto text-justify">
          Pautamos nossa atuação pelo trabalho árduo e pela entrega integral a cada caso. A discrição absoluta no trato das informações e o uso criterioso de tecnologia de ponta garantem ao cliente não apenas uma defesa competente, mas também segurança, transparência e comunicação eficiente em todas as etapas do processo.
        </p>
      </section>

      <section id="atuacoes" className="bg-[#ffffff] px-20 py-16 text-center">
        <div className="flex justify-end mb-4">
          <a href="#" className="font-[Tenor_Sans] text-black text-[16px] tracking-widest hover:opacity-90">
            Veja mais +
          </a>
        </div>

        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-10">ATUAÇÕES</h2>

        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          O escritório atua na defesa criminal em toda a sua extensão, dos crimes comuns, como os praticados contra a pessoa, o patrimônio e com entorpecentes, aos delitos de maior complexidade no âmbito do Direito Penal Econômico, incluindo lavagem de capitais, crimes tributários, corrupção e ilícitos contra o sistema financeiro.
        </p>
        <p className="font-[Tenor_Sans] text-black text-[16px] leading-relaxed max-w-[800px] mb-6 mx-auto text-justify">
          A atuação alcança ainda o Direito Penal Digital, com defesa especializada em crimes cibernéticos, fraudes eletrônicas e demais ilícitos praticados no ambiente virtual, área que exige atualização constante e compreensão técnica aprofundada do meio digital.
        </p>
      </section>

      <section id="artigos" className="bg-[#F0F0F0] px-20 py-16">
        <div className="flex justify-end mb-4">
          <a href="#" className="font-[Tenor_Sans] text-black text-[16px] tracking-widest hover:opacity-70">
            Veja mais +
          </a>
        </div>

        <h2 className="font-[Tenor_Sans] text-black text-[20px] tracking-widest mb-12 text-center">ARTIGOS PUBLICADOS</h2>

        <div className="grid grid-cols-3 gap-6 max-w-[900px] mx-auto">
          <div className="bg-[#53707F] rounded-[20px] p-8 cursor-pointer">
            <h3 className="font-[Tenor_Sans] text-white text-[14px] tracking-widest mb-4 text-center">
              ARTIGO 01
            </h3>
            <p className="font-[Tenor_Sans] text-white text-[13px] leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-[#53707F] rounded-[20px] p-8 cursor-pointer">
            <h3 className="font-[Tenor_Sans] text-white text-[14px] tracking-widest mb-4 text-center">
              ARTIGO 02
            </h3>
            <p className="font-[Tenor_Sans] text-white text-[13px] leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-[#53707F] rounded-[20px] p-8 cursor-pointer">
            <h3 className="font-[Tenor_Sans] text-white text-[14px] tracking-widest mb-4 text-center">
              ARTIGO 03
            </h3>
            <p className="font-[Tenor_Sans] text-white text-[13px] leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}