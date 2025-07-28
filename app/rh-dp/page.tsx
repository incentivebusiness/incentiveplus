"use client";
import CarouselCards from "../components/CarrouselCards";
import Header from "../components/Header";
import Image from "next/image";
import React from "react";
import { beneficiosData, diferenciaisData } from "../data/carrouselData";
import Footer from "../components/Footer";
import ButtonEspecialista from "../components/ButtonEspecialista";
import FormPlus from "../components/FormPlus";
import HeaderHome from "../components/Header";
import Link from "next/link";

const IncentiveCarePage = () => {
  return (
    <>
      {/* <HeaderHome /> */}
      <div className="flex items-center justify-center hover:cursor-pointer p-2">
        <Link href="/">
          <Image src="/images/logocare.png" width={200} height={200} alt="" />
        </Link>
      </div>

      <div className="min-h-screen bg-white text-[rgb(1,7,74)] text-[11px] ">
        {/* Banner Principal - 1440x365 */}
        <section className="relative w-full h-[600px] md:h-[465px] overflow-hidden ">
          <Image
            src="/images/capaazul2.png"
            alt="Banner Principal Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" />
          <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center justify-center px-8">
            <div className="text-white text-center max-w-2xl flex flex-col items-center">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-medium mb-4">
                Transforme seu <b>RH</b> e <b>DP</b> em motores de{" "}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent font-extrabold">
                  crescimento
                </span>{" "}
                para sua empresa!
              </h1>
              <p className="text-lg mb-6 md:whitespace-nowrap">
                Garanta conformidade, otimize processos e impulsione o potencial
                dos seus colaboradores
              </p>
              <div className="pb-4 bg-[rgb(2,23,64)] bg-opacity-80 rounded-lg px-4 py-2">
                <p className="text-lg md:text-xl max-w-[400px] ">
                  Descubra as soluções completas que sua gestão de pessoas
                  precisa e baixe nossos e-books exclusivos para aprofundar seus
                  conhecimentos
                </p>
                <a href="#form">
                  <button className="text-lg md:text-lg mt-4 bg-gradient-to-r from-blue-400 to-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    <span>
                      Download e-books{" "}
                      <Image
                        src="/images/dawnload.png"
                        alt="Icone Download"
                        width={20}
                        height={20}
                        className="inline-block mr-2 w-auto h-auto"
                      />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Título */}
        <section className="pt-16 bg-white">
          <div className="max-w-[760px] mx-auto px-8 ">
            <h2 className="text-3xl font-extrabold text-center mb-5 ">
              Conheça as nossas{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  soluções
                </span>
                <Image
                  src="/images/circulotorto.png"
                  alt="Círculo decorativo"
                  width={500}
                  height={500}
                  className="absolute inset-0 -top-6 -left-4 w-[200%] h-[200%] object-contain -z-0"
                />
              </span>
            </h2>
          </div>
        </section>

        {/* 1. Seção Branca - Admissão (Imagem Esquerda, Texto Direita) */}
        <section className="py-8 md:py-16 bg-white text-[rgb(1,7,74)]">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Conteúdo principal */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent leading-tight">
                  Admissão de novos colaboradores
                </h3>

                <p className="text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
                  <strong>
                    Somos uma empresa especialista em processos admissionais,
                  </strong>{" "}
                  incluindo contratações tradicionais, temporárias, por tempo
                  determinado, contrato de experiência, estágios e admissão de
                  jovem aprendiz.
                </p>

                <h5 className="text-sm sm:text-base font-bold mb-3 md:mb-4">
                  Garantimos:
                </h5>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">
                      <img
                        src="/images/dedo.png"
                        alt="Ícone"
                        className="w-4 h-4 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Conformidade com a Consolidação das Leis do Trabalho
                      (CLT), às normas do Ministério do Trabalho e Emprego (MTE)
                      e às obrigações acessórias transmitidas via eSocial;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">
                      <img
                        src="/images/dedo.png"
                        alt="Ícone"
                        className="w-4 h-4 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Canal de comunicação seguro e em conformidade com a LGPD,
                      destinado ao compartilhamento de documentos.
                    </span>
                  </li>
                </ul>

                <ButtonEspecialista />
              </div>

              {/* Imagem - oculta em telas pequenas */}
              <div className="hidden md:block flex-1 max-w-md">
                <div className="relative h-[300px] lg:h-[400px]">
                  <Image
                    src="/images/mulherlendo.png"
                    alt="Admissão de Colaboradores"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Borda Divisória */}
        <section className="w-full">
          <Image
            src="/images/borda.png"
            alt="Borda Divisória"
            width={1440}
            height={50}
            className="w-full h-auto object-cover"
          />
        </section>

        {/* 2. Seção com Banner - Controle de Jornada (Banner + Texto Esquerda, Imagem Direita) */}
        <section className="relative w-full min-h-[400px] md:h-[700px] overflow-hidden bg-gray-100">
          <Image
            src="/images/fundoazul.png"
            alt="Banner Background"
            fill
            className="object-cover rounded-t-[30px] z-0"
          />
          <div className="absolute inset-0"></div>
          <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center p-4 md:p-0">
            {/* Imagem - oculta em telas pequenas ou reduzida */}
            <div className="hidden md:flex flex-1 relative h-[500px] w-[368px]">
              <Image
                src="/images/homenfeliz.png"
                alt="Controle de Jornada"
                fill
                className="object-contain"
              />
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 px-4 md:px-12 py-8 md:py-0">
              <div className="max-w-xl text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent leading-tight">
                  Controle de Jornada de Trabalho
                </h3>

                <p className="mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
                  Seus colaboradores ainda utilizam o livro de ponto ou o cartão
                  de ponto? Nós temos o sistema que a sua empresa precisa!
                  Conheça as vantagens do nosso Controle de Ponto Digital:
                </p>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Sistema 100% gerenciado pela sua empresa;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Produto em conformidade com a Portaria 671/2021 –
                      Ministério do Trabalho e Previdência (MTP);
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Funciona em modo online e offline, atendendo todas as
                      necessidades de trabalho;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Possui configurações que inibem fraudes e alterações
                      indevidas nos registros de ponto;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Permite acompanhamento em tempo integral da jornada, banco
                      de horas e escalas;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Possibilita integração com sistema de folha de pagamento,
                      otimizando o processo e assegurando precisão nos
                      lançamentos de rubricas;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Gera relatórios analíticos com base nos eventos
                      previamente configurados e utilizados pelos colaboradores.
                    </span>
                  </li>
                </ul>

                <ButtonEspecialista />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Seção Branca - Folha de Pagamento (Imagem Direita, Texto Esquerda) */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Conteúdo principal */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent leading-tight">
                  Folha de pagamento, Férias e Rescisão
                </h3>

                <div className="mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
                  <strong>
                    Seu DP realiza processos manuais para calcular e validar as
                    verbas na folha de pagamento, férias e rescisão? Nós temos a
                    automação que a sua empresa precisa!
                    <br />
                    <br />
                    Com o nosso serviço de fechamento de folha, a sua empresa:
                  </strong>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">
                      <img
                        src="/images/dedo.png"
                        alt="Ícone"
                        className="w-4 h-auto mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Otimiza tempo para o seu RH e DP focar em outras
                      atividades estratégicas;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">
                      <img
                        src="/images/dedo.png"
                        alt="Ícone"
                        className="w-4 h-auto mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Conta com um processo automatizado, padronizado, seguro e
                      em conformidade às mudanças na legislação trabalhista;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">
                      <img
                        src="/images/dedo.png"
                        alt="Ícone"
                        className="w-4 h-auto mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Recebe em tempo hábil o arquivo de remessa para programar
                      os pagamentos;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">
                      <img
                        src="/images/dedo.png"
                        alt="Ícone"
                        className="w-4 h-auto mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Terá acesso a um canal de comunicação seguro e em
                      conformidade com a LGPD, destinado ao compartilhamento de
                      documentos.
                    </span>
                  </li>
                </ul>

                <div className="mb-6 md:mb-8">
                  <p className="text-sm sm:text-base font-bold">
                    Não perca tempo! Entre em contato conosco e saiba como
                    otimizar seus processos de DP
                  </p>
                </div>

                <ButtonEspecialista />
              </div>

              {/* Imagem - oculta em telas pequenas */}
              <div className="hidden md:block flex-1 max-w-md">
                <div className="relative h-[300px] lg:h-[367px]">
                  <Image
                    src="/images/blocodenotas.png"
                    alt="Folha de Pagamento"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Borda Divisória */}
        <section className="w-full">
          <Image
            src="/images/borda.png"
            alt="Borda Divisória"
            width={1440}
            height={50}
            className="w-full h-auto object-cover mt-10"
          />
        </section>

        {/* 4. Seção com Banner - Trabalhista (Banner + Imagem Esquerda, Texto Direita) */}
        <section className="relative w-full min-h-[400px] md:h-[800px] overflow-hidden bg-gray-100">
          <Image
            src="/images/fundoazul.png"
            alt="Banner Background"
            fill
            className="object-cover rounded-t-[30px] z-0"
          />
          <div className="absolute inset-0"></div>
          <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center p-4 md:p-0">
            {/* Imagem - oculta em telas pequenas */}
            <div className="hidden md:flex flex-1 relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/blackhoman.png"
                alt="Trabalhista"
                fill
                className="object-contain"
              />
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 px-4 md:px-12 py-8 md:py-0">
              <div className="max-w-xl text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent leading-tight">
                  Trabalhista e Assessoria Jurídica
                </h3>

                <div className="mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
                  <strong>
                    A sua empresa está 100% em conformidade com as leis
                    trabalhistas?
                  </strong>{" "}
                  Toda empresa precisa estar alinhada às leis federais,
                  estaduais e convenções coletivas que regulam salário, jornada,
                  licenças, rescisões e outras variáveis. Essa prática exige
                  investir em profissionais especializados em direito do
                  trabalho, que entendem a complexidade da legislação e atuam de
                  forma preventiva. Algo que poucos RH e DP conseguem conciliar
                  com outras tarefas do setor.
                  <br />
                  <br />
                  <strong>
                    Evite riscos trabalhistas! Conheça nossa solução de Gestão
                    Trabalhista e Assessoria Jurídica.
                  </strong>
                  <br />
                  <br />
                  <strong>Benefícios para a sua empresa:</strong>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Redução de custos com equipe e estrutura interna;
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Redução de passivos trabalhistas através da expertise de
                      uma empresa especializada em gestão de documentos e
                      processos;
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Maior segurança, qualidade e conformidade nos processos.
                      Na prática será o nosso suporte consultivo junto a sua
                      equipe estratégica implementando uma cultura de prevenção
                      e conformidade, com processos claros e documentados. Caso
                      ocorram ações judiciais, asseguramos o apoio técnico e
                      documental necessário para fortalecer a defesa da sua
                      empresa.
                    </span>
                  </li>
                </ul>

                <ButtonEspecialista />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Seção Branca - Recrutamento (Imagem Direita, Texto Esquerda) */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            {/* Parte Superior: Título + Texto (Esquerda) e Imagem (Direita) */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              <div className="flex-1 text-sm sm:text-base leading-relaxed">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Recrutamento e Seleção
                </h3>
                <p className=" mb-4 text-sm sm:text-base leading-relaxed">
                  <b>
                    A sua equipe de Recrutamento e Seleção está focada em
                    preencher vagas para manter o quadro de funcionário completo
                    ou sabe que tem a missão de selecionar profissionais
                    qualificados para fazer parte da sua empresa?
                  </b>{" "}
                </p>
                <p className=" mb-4 leading-relaxed">
                  <b>Contratação errada custa caro.</b> Empresas que consideram
                  o recrutamento e seleção como algo estratégico não contratam
                  somente por indicação ou currículo, mas por aderência entre o
                  perfil do candidato e a vaga, além da proximidade à cultura e
                  propósito da empresa.
                </p>
                <p className=" leading-relaxed">
                  <b>
                    {" "}
                    Estruture o processo seletivo da sua empresa e colha
                    resultados como:
                  </b>
                </p>
              </div>

              <div className="flex-1 relative h-[200px] md:h-[218px]">
                <Image
                  src="/images/lupa.png"
                  alt="Recrutamento e Seleção"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Parte Inferior: Duas colunas de listas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm sm:text-base leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 flex-shrink-0">
                    <img
                      src="/images/bolinha2.png"
                      alt="Ícone"
                      className="w-2 h-2 mt-1"
                    />
                  </span>
                  <span className="">
                    Mitigação de tempo perdido com triagens improdutivas;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 flex-shrink-0">
                    <img
                      src="/images/bolinha2.png"
                      alt="Ícone"
                      className="w-2 h-2 mt-1"
                    />
                  </span>
                  <span className="">
                    Contratações mais rápidas e assertivas;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 flex-shrink-0">
                    <img
                      src="/images/bolinha2.png"
                      alt="Ícone"
                      className="w-2 h-2 mt-1"
                    />
                  </span>
                  <span className="">
                    Redução do turnover e mitigação de custos com desligamentos
                    e novas seleções;
                  </span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 flex-shrink-0">
                    <img
                      src="/images/bolinha2.png"
                      alt="Ícone"
                      className="w-2 h-2 mt-1"
                    />
                  </span>
                  <span className="">
                    Mais profissionais alinhados à cultura e aos objetivos da
                    empresa;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 flex-shrink-0">
                    <img
                      src="/images/bolinha2.png"
                      alt="Ícone"
                      className="w-2 h-2 mt-1"
                    />
                  </span>
                  <span className="">
                    Maior produtividade desde os primeiros dias de integração;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 flex-shrink-0">
                    <img
                      src="/images/bolinha2.png"
                      alt="Ícone"
                      className="w-2 h-2 mt-1"
                    />
                  </span>
                  <span className="">
                    Fortalecimento da marca da sua empresa.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-md md:text-lg font-extrabold mb-6">
              Mude agora o seu R&S!
            </h3>

            <ButtonEspecialista />
          </div>
        </section>

        {/* Borda Divisória */}
        <section className="w-full">
          <Image
            src="/images/borda.png"
            alt="Borda Divisória"
            width={1440}
            height={50}
            className="w-full h-auto object-cover"
          />
        </section>

        {/* 6. Seção com Banner - Treinamento (Banner + Imagem Esquerda, Texto Direita) */}
        <section className="relative w-full min-h-[400px] md:h-[700px] overflow-hidden bg-gray-100">
          <Image
            src="/images/fundoazul.png"
            alt="Banner Background"
            fill
            className="object-cover rounded-t-[30px] z-0"
          />
          <div className="absolute inset-0"></div>
          <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center p-4 md:p-0">
            {/* Imagem - oculta em telas pequenas */}
            <div className="hidden md:flex flex-1 relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/2man.png"
                alt="Treinamento"
                fill
                className="object-contain"
              />
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 px-4 md:px-12 py-8 md:py-0">
              <div className="max-w-lg text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent leading-tight">
                  Onboarding e Offboarding
                </h3>

                <h5 className="text-sm sm:text-base font-bold mb-3 md:mb-4 leading-relaxed">
                  Chega de caos no processo de contratação e demissão!
                </h5>

                <p className="text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
                  Com a prestação de serviço da Incentive Care, seu processo de
                  Onboarding e Offboarding ganham mais profissionalismo e
                  humanização, sem perder a empatia e o respeito pelo
                  funcionário.
                </p>

                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Você sabe diferenciar Onboarding de Offboarding?
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Sabe em qual momento acontece cada processo?
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2 flex-shrink-0">
                      <img
                        src="/images/bolinha2.png"
                        alt="Ícone"
                        className="w-2 h-2 mt-1"
                      />
                    </span>
                    <span className="text-sm sm:text-base">
                      Você sabe quais resultados que a sua empresa pode ter ao
                      profissionalizar e humanizar o processo de Onboarding e
                      Offboarding?
                    </span>
                  </li>
                </ul>

                <p className="text-sm sm:text-base mb-6 md:mb-8 leading-relaxed">
                  Essas são algumas das questões que a Incentive Care te ajudará
                  a entender, desde o conceito e benefícios até como aplicar as
                  melhores práticas de Onboarding e Offboarding!
                </p>

                <ButtonEspecialista />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Seção Branca - Carousels */}
        <section className="py-16 ">
          <div className="max-w-[1440px] mx-auto px-2 md:px-8">
            {/* Primeiro Carousel - Benefícios */}
            <div className="mb-16">
              <section className="py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
                  {/* Texto à esquerda */}
                  <div className="md:w-1/2 text-xs sm:text-sm md:text-base">
                    <h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                      Treinamento e Desenvolvimento
                    </h3>
                    <p className=" mb-4">
                      Seus colaboradores têm conhecimento e habilidades para
                      sustentar o crescimento que a sua empresa busca? Suas
                      estratégias podem estar fundamentadas em dados, mas sem
                      funcionários capacitados a sua empresa não irá crescer!
                    </p>
                    <p className=" mb-4">
                      Estudos comprovam que, equipes sem conhecimento técnico e
                      comportamental (hard e soft skill) causam o famoso efeito
                      cascata, afetando a experiência do cliente, a
                      produtividade e o ROI. Nós temos o que a sua empresa
                      precisa. Através de um programa de treinamento e
                      desenvolvimento sob medida, o seu negócio vivenciará
                      resultados consistentes como:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Fortalecimento da cultura organizacional;</li>
                      <li>
                        Eficiência operacional (redução de erros e aumento de
                        produtividade);
                      </li>
                      <li>Melhoria na experiência do cliente – NPS;</li>
                      <li>Aumento no ROI;</li>
                      <li>Entre outros benefícios.</li>
                    </ul>
                  </div>

                  {/* Imagem à direita */}
                  <div className="md:w-1/2">
                    <img
                      src="/images/computador.png" // Substitua pelo caminho da sua imagem
                      alt="Treinamento e Desenvolvimento"
                      className="w-[270] h-[264] rounded-lg"
                      width={270}
                      height={264}
                    />
                  </div>
                </div>
              </section>
              <CarouselCards
                title="Como funciona o programa T&D Care?"
                cards={beneficiosData}
                cardType="default"
              />
            </div>
            <div className="mt-10 py-20  flex flex-col items-center">
              <h4 className="text-md font-semibold mb-2">
                Está preparado para acelerar o crescimento da sua empresa?
              </h4>
              <p className="mb-6 font-semibold text-md">
                Conhecimento transforma pessoas. Treinamento direcionado
                potencializa resultados!
              </p>
              <ButtonEspecialista />
            </div>

            {/* Segundo Carousel - Diferenciais */}
          </div>
          <section className="w-full">
            <Image
              src="/images/borda.png"
              alt="Borda Divisória"
              width={1440}
              height={50}
              className="w-full h-auto object-cover"
            />
          </section>

          <div className="bg-gray-100">
            <div className="bg-[url('/images/retanguloazul.png')] bg-cover rounded-t-[30px] bg-center bg-no-repeat min-h-[600px] py-12 lg:py-24">
              {/* Container principal com largura limitada */}
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Seção de conteúdo principal */}
                <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                  {/* Imagem à esquerda - responsiva */}
                  <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                    <Image
                      src="/images/pesquisa.png"
                      alt="Pesquisa de Clima"
                      width={400}
                      height={300}
                      className="w-[268px] h-auto object-contain"
                    />
                  </div>

                  {/* Texto à direita - responsivo */}
                  <div className="flex-1 text-white text-center lg:text-left max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                      Pesquisa de Clima
                    </h3>

                    <div className="text-sm sm:text-base lg:text-lg space-y-4 leading-relaxed">
                      <p>
                        Suas estratégias são baseadas em suposições ou em dados
                        reais?
                      </p>
                      <p>
                        Algumas estratégias definidas pela alta gestão das
                        empresas não produzem os resultados esperados porque
                        desconsideram a realidade dos funcionários no ambiente
                        de trabalho. O que realmente acontece no gemba é, muitas
                        vezes, diferente do que os gestores acreditam que
                        acontece.
                      </p>
                      <p>
                        Por meio da pesquisa de clima da Incentive Care, sua
                        empresa poderá mapear a percepção dos colaboradores
                        sobre diversos aspectos organizacionais, identificando
                        tanto os pontos fortes quanto os obstáculos culturais e
                        operacionais que impedem um ambiente saudável e
                        produtivo.
                      </p>
                    </div>

                    <div className="mt-8">
                      <ButtonEspecialista />
                    </div>
                  </div>
                </div>

                {/* Carousel com container limitado */}
                <div className="mb-12">
                  <CarouselCards
                    title="Como funciona a Pesquisa de Clima Care?"
                    cards={diferenciaisData}
                    cardType="blue"
                  />
                </div>

                {/* Call to action final */}
                <div className="text-center">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold mb-6">
                    Não perca tempo!
                  </h3>
                  <ButtonEspecialista />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Primeiro Carousel - Tema padrão */}

        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Conteúdo principal */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent leading-tight">
                  Endomarketing
                </h3>

                <p className="text-sm sm:text-base mb-3 md:mb-4 leading-relaxed">
                  <strong>
                    Investir em seus colaboradores através do endomarketing é
                    investir no crescimento sustentável da sua empresa.
                  </strong>
                </p>

                <p className="text-sm sm:text-base mb-3 md:mb-4 leading-relaxed">
                  Endomarketing é um conjunto de ações e estratégias do setor de
                  Marketing e RH, focada no relacionamento e engajamento dos
                  colaboradores dentro da organização. O endomarketing tem como
                  objetivo criar uma comunicação eficaz e transparente entre a
                  empresa e seus funcionários, de forma que todos se sintam
                  parte do propósito e dos objetivos do negócio.
                </p>

                <p className="text-sm sm:text-base mb-3 md:mb-4 leading-relaxed">
                  Na prática, são os colaboradores como "clientes internos",
                  sendo valorizados através de ações que promovem o bem-estar,
                  reconhecimento pessoal e profissional, sinergia com a cultura
                  da organização etc. Quando as ações acontecem, o engajamento e
                  a produtividade aumentam significativamente, refletindo
                  diretamente nos resultados da empresa.
                </p>

                <p className="text-sm sm:text-base mb-6 md:mb-8 leading-relaxed font-medium">
                  <strong>
                    Sua empresa está preparada para dar o primeiro passo e
                    transformar sua equipe em seu maior ativo estratégico? Então
                    não perca tempo!
                  </strong>
                </p>

                <ButtonEspecialista />
              </div>

              {/* Imagem - oculta em telas pequenas */}
              <div className="hidden md:block flex-1 max-w-md">
                <div className="relative">
                  <Image
                    src="/images/rede.png"
                    alt="Endomarketing"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-auto max-w-[320px] lg:max-w-[400px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de E-books */}
        <div id="form">
          <FormPlus />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default IncentiveCarePage;
