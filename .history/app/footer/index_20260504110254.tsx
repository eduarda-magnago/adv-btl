import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#ffffff] px-20 py-12 flex justify-between items-start">
        <Image src="/img/bertolini-logo.png" alt="Logo Bertolini Da Rós Advocacia" width={180} height={80}/>

        <div>
          <h3 className="font-[Tenor_Sans] text-black text-[16px] tracking-widest mb-4">
            Endereço
          </h3>
          <p className="font-[Tenor_Sans] text-black text-[14px] leading-relaxed max-w-[280px]">
            Rua Alfeu Alves Pereira, 79, Enseada do Suá, Vitória - ES, Cep 29.050-285.
          </p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#53707F] px-20 py-4 flex justify-between items-center">
        <p className="font-[Tenor_Sans] text-white text-[12px]">
          Desenvolvido por EM Studio.
        </p>
        <p className="font-[Tenor_Sans] text-white text-[12px]">
          © Bertolini Da Rós 2026 - Todos os direitos reservados.
        </p>
        <a href="#" className="font-[Tenor_Sans] text-white text-[12px] hover:opacity-70">
          Termos & Política de Privacidade
        </a>
      </div>
    </footer>
  );
}