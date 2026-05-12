import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#ffffff] px-6 py-6 md:px-10 md:py-8 flex flex-row justify-between items-center">
        <Link href="/">
          <div className="w-35 sm:w-42.5 md:w-50">
            <Image src="/img/bertolini-logo.png" alt="Logo Bertolini Da Rós Advocacia" width={200} height={80} className="w-full h-auto"/>
          </div>
        </Link>

        <div className="text-right">
          <h3 className="font-[Tenor_Sans] text-black text-[13px] sm:text-[15px] md:text-[18px] tracking-widest mb-2 md:mb-4">
            Endereço
          </h3>
          <p className="font-[Tenor_Sans] text-black text-[10px] sm:text-[12px] md:text-[14px] leading-relaxed max-w-37.5 sm:max-w-55 md:max-w-[280px]">
            Rua Alfeu Alves Pereira, 79, Enseada do Suá, Vitória - ES, Cep 29.050-285.
          </p>
        </div>
      </div>

      <div className="bg-[#53707F] px-6 py-4 md:px-10 lg:px-20 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
        <a href="/termos" className="font-[Tenor_Sans] text-white text-[10px] hover:font-bold text-center">
          Termos & Política de Privacidade
        </a>
        <p className="font-[Tenor_Sans] text-white text-[10px] text-center">
          © Bertolini Da Rós 2026 - Todos os direitos reservados.
        </p>
        <p className="font-[Tenor_Sans] text-white text-[10px] text-center">
          Desenvolvido por <a href="https://www.instagram.com/webstudio.em" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:font-bold no-underline">EM Studio.</a>
        </p>
        
      </div>
    </footer>
  );
}