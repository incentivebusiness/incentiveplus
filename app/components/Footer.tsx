"use client";

import Image from "next/image";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[rgb(1,24,74)] lg:px-[10rem] ">
        <div className="flex justify-center pt-10">
          <a href="#" className="bg-white rounded-full p-2 w-10 h-10">
            <img src="/images/setaUp.png" className="text-2xl" />
          </a>
        </div>
        <div className="w-full flex justify-center items-center pt-0 pb-2">
          <img
            src="/images/logocare.png"
            width={40}
            height={60}
            className="w-[200px] h-auto"
            alt="Logo"
          />
        </div>
        <div className="flex text-center justify-center items-center pb-4  text-white/60 hover:text-white px-8 md:px-20">
          ❤️ ©️ Incentive Care 2025 | Todos os Direitos Reservados.
        </div>
        <div className="border-t border-transparent pb-4 mx-10">
          <div className="h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-20 text-white pb-10 ">
          <div className="text-xs flex flex-col items-center gap-4 py-3 sm:py-0">
            <h5 className="mb-4">NOSSAS REDES SOCIAIS</h5>
            <div className="flex gap-4">
              {/* <img src="/images/facebook.png" className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" /> */}
              {/* <a
                href="https://www.instagram.com/incentivecare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/instagram.png"
                  className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300"
                  alt="Instagram"
                />
              </a> */}

              <a
                href="https://www.instagram.com/incentivecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300"
              >
                <FaInstagram size={40} color="#ffffff" className="mt-2" />
              </a>
              <a
                href="mailto:comercial@incentivebusiness.com.br"
                className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300"
              >
                <FaEnvelope size={40} color="#ffffff" className="mt-2" />
              </a>
              <a
                href="https://wa.me/5511961961855" // substitua com seu número com DDI e DDD
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300"
              >
                <FaWhatsapp size={40} color="white" className="mt-2" />
              </a>

              {/* <img src="/images/linkedIn.png" className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" /> */}
            </div>
          </div>

          <div className="text-xs flex flex-col items-center py-3 sm:py-0">
            <h5 className="mb-4">SERVIÇOS</h5>
            <ul className="text-center">
              <li>INCENTIVE CARE</li>
              <a href="/seguranca" className="hover:text-blue-600 ">
                <li className="hover:text-underline">Segurança</li>
              </a>
              <li>Criação de Site</li>
              <li>Criação de Loja Virtual</li>
            </ul>
          </div>

          <div className="flex flex-col items-center py-6 sm:py-0 text-xs">
            <h5 className="mb-4">ESCRITÓRIOS INCENTIVE CARE</h5>
            <ul className="text-center">
              <li>São Paulo:</li>
              <li>
                Av. dos Autonomistas, 2561 - Vila Yara, Osasco - SP, 06090-020
              </li>
              <li>(11) 3016-1870 | +55 (11) 96196-1855</li>
              <li className="mt-2">SÃO JOSÉ DO RIO PRETO:</li>
              <li>
                R. Martinho Gonçalves, 2140 - Vila Nossa Senhora da Paz - São
                José do Rio Preto/SP
              </li>
              <li>(17) 3364-9940</li>
              <li>CNPJ: 42.931.435/0001-08</li>
            </ul>
          </div>
        </div>

        <p className="text-[8px] text-white p-2 ">
          Seguro garantido pela MAPFRE Seguros Gerais S.A. – CNPJ
          61.074.175/0001-38, Código SUSEP: 0623-8 - Av. das Nações Unidas, nº
          14.261, Andar 17 ao 21 Ala A, Vila Gertrudes, São Paulo - SP, CEP
          04794-000. | O presente Certificado substitui e anula os certificados
          anteriores eventualmente emitidos pela Seguradora. | Processo SUSEP
          Nº: 15414.001639/2011-89 - SEGURO COLETIVO DE DECESSOS E AUXÍLIO
          FUNERAL – Processo SUSEP nº 15414.000357/2011-64 SEGURO DE ACIDENTES
          PESSOAIS COLETIVO. As condições gerais do seguro poderão ser
          consultadas no site www.mapfre.com.br. O segurado poderá consultar a
          situação cadastral do corretor de seguros e da sociedade seguradora no
          sítio eletrônico www.susep.gov.br, por meio do número de seu registro
          na SUSEP, nome completo, CNPJ ou CPF. Para registro de reclamações dos
          consumidores dos mercados supervisionados, acessar o
          site: www.consumidor.gov.br. SOBRE PROTEÇÃO DE DADOS (LGPD):  O Grupo
          MAPFRE respeita e cumpre as exigências previstas na Lei nº 13.709/2018
          que dispõe sobre a proteção de dados pessoais zelando pelos seus dados
          pessoais. Responsável pelo tratamento: GRUPO MAPFRE; Finalidade: Pré
          Contrato/Contratação. Caso deseje obter mais informações de seus
          direitos como o titular dos dados pessoais, e como a MAPFRE trata seus
          dados, consulte 
          https://politica.mapfre.com.br/#/politica-privacidade. Central de
          Atendimento: Serviço de Atendimento ao Consumidor MAPFRE (SAC 24h –
          Todos os Dias) 0800 771 8978. Deficiente Auditivo e de Fala MAPFRE
          0800 775 5045 - atendimento 24 horas, todos os dias. Ouvidoria 0800
          775 1079.   Ouvidoria Deficiente Auditivo e de Fala 0800 962 7373 -
          atendimento de 2ª à 6ª, exceto feriados. A Ouvidoria poderá ser
          acionada para atuar na defesa dos direitos dos consumidores,
          esclarecer e/ou solucionar demandas já tratadas pelos canais de
          atendimento habituais. Sinistros ligue 0800-709-8432 - atendimento de
          2ª à 6ª das 08hs às 18hs, exceto feriados.
        </p>
      </div>
    </>
  );
};

export default Footer;
