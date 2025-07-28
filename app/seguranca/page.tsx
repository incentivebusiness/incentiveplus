import Footer from "@/components/Footer";
import HeaderHome from "@/components/HeaderHome";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderHome />
      <div className="flex flex-col justify-center items-center text-[rgb(1,24,74)]  py-20 px-10 md:px-20">
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl xl:text-4xl pb-6 text-[rgb(1,24,74)] font-bold text-center mb-6">
            POLÍTICA DE SEGURANÇA
          </h1>
          <a href="/politica-de-privacidade">
            <h5 className="mt-4 text-xl hover:text-blue-600">
              Política de Privacidade de Dados Pessoais
            </h5>
          </a>
          <a
            href="/pdfs/politica-de-dados-LGPD.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="mt-4 text-xl hover:text-blue-600">
              Política de Atendimento ao Titular de Dados
            </h5>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
