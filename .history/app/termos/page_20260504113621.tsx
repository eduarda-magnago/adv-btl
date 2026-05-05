import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function Termos() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen">
      <Header />

      <section className="relative px-12 py-10 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <Image src="/img/logo-br.png" alt="" width={400} height={400} />
        </div>

        <h1 className="font-[Lora] text-[48px] font-normal text-[#17445B] mb-6">
          Termos & Política de Privacidade
        </h1>
        <p className="font-[Lora] text-[18px] text-[#0A0A0A] max-w-[600px] mx-auto leading-relaxed mb-10">
          Transparência e responsabilidade no tratamento das suas informações. Leia com atenção os termos que regem o uso deste site.
        </p>

        <button className="flex items-center gap-3 font-[Tenor_Sans] text-[16px] text-white bg-[#53707F] rounded-[25px] px-8 py-3 mx-auto cursor-pointer">
          Alguma dúvida?
          <Image src="/img/seta-branco.png" alt="ícone" width={24} height={24} />
        </button>
      </section>

      <section className="bg-[#53707F] px-20 py-10 text-center">
        <h2 className="font-[Tenor_Sans] text-white text-[20px] tracking-widest mb-2">
          TERMOS & POLÍTICA DE PRIVACIDADE
        </h2>
        <p className="font-[Tenor_Sans] text-white text-[14px]">
          Última atualização: Maio de 2026.
        </p>
      </section>

      <section className="px-20 py-16 max-w-[900px]">

        <h2 className="font-[Tenor_Sans] text-black text-[18px] tracking-widest mb-6">
          TERMOS E CONDIÇÕES
        </h2>
        <p className="font-[Tenor_Sans] text-black text-[13px] mb-4">
          Bertolini da Rós Advocacia — OAB/ES 41.885
        </p>

        <ol className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed space-y-4 list-decimal list-inside">
          <li>
            <strong>Aceitação.</strong> Ao navegar neste site, você concorda com estes Termos. Caso não concorde, por favor não utilize o site.
          </li>
          <li>
            <strong>Conteúdo informativo.</strong> As informações aqui publicadas têm caráter exclusivamente informativo e não constituem consulta jurídica. Para orientação sobre seu caso, é necessária a contratação de um advogado.
          </li>
          <li>
            <strong>Relação advogado-cliente.</strong> O acesso ao site e o envio de mensagens pelo formulário de contato não estabelecem relação advogado-cliente. Essa relação só se constitui mediante assinatura de contrato e definição de honorários.
          </li>
          <li>
            <strong>Formulário de contato.</strong> As informações enviadas pelo formulário são utilizadas exclusivamente para retorno de contato e tratadas com sigilo profissional, nos termos do Código de Ética.
          </li>
          <li>
            <strong>Propriedade intelectual.</strong> Todo o conteúdo deste site é protegido pela legislação brasileira de direitos autorais. É vedada qualquer reprodução sem autorização prévia e por escrito.
          </li>
          <li>
            <strong>Responsabilidade.</strong> O escritório não se responsabiliza por decisões tomadas com base no conteúdo deste site sem a devida consulta prévia.
          </li>
          <li>
            <strong>Foro.</strong> Fica eleito o Foro da Comarca de Vitória - ES para dirimir quaisquer controvérsias decorrentes do uso deste site.
          </li>
        </ol>

        <h2 className="font-[Tenor_Sans] text-black text-[18px] tracking-widest mt-12 mb-6">
          POLÍTICA DE PRIVACIDADE
        </h2>
        <p className="font-[Tenor_Sans] text-black text-[13px] mb-4">
          Bertolini da Rós Advocacia — OAB/ES 41.885
        </p>

        <ol className="font-[Tenor_Sans] text-black text-[13px] leading-relaxed space-y-4 list-decimal list-inside">
          <li>
            <strong>Responsável pelo dados.</strong> Dr. Lazaro Bertolini da Rós — Rua Alfeu Alves Pereira, 79, Enseada do Suá, Vitória - ES.
          </li>
          <li>
            <strong>Dados coletados.</strong> Coletamos apenas os dados informados voluntariamente no formulário de contato: nome, e-mail, telefone e mensagem.
          </li>
          <li>
            <strong>Finalidade.</strong> Os dados são utilizados exclusivamente para responder ao seu contato e, em for o caso, para eventual contratação de serviços. Esses dados para envio de publicidade não são usados.
          </li>
          <li>
            <strong>Compartilhamento.</strong> Seus dados não são vendidos nem compartilhados com terceiros, salvo por obrigação legal ou determinação judicial.
          </li>
          <li>
            <strong>Seus direitos (LGPD).</strong> Você pode a qualquer momento solicitar acesso, correção ou exclusão dos seus dados. Entre em contato pelo e-mail lazarodaros@gmail.com.
          </li>
          <li>
            <strong>Contato.</strong> lazarodaros@gmail.com +55 (27) 99794-4606
          </li>
        </ol>

      </section>

      <Footer />
    </main>
  );
}