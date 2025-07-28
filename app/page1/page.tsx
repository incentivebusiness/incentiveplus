import React from "react";
import Image from "next/image";
import FormPlus from "../components/FormPlus";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">LOGO</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              HOME
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              SOBRE
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              SERVIÇOS
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              CONTATO
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[465px]">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src="/images/capa3.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0" />
        </div>

        {/* Conteúdo do texto */}
        <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center justify-center px-8">
          <div className="text-white text-center max-w-2xl flex flex-col items-center">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
              Impulsionamos o seu negócio rumo ao{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent font-extrabold">
                sucesso
              </span>{" "}
              que ele merece!
            </h1>
            <h5 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 ">
              Oferecemos uma gama de <b>serviços com soluções inteligentes</b>{" "}
              para otimizar o seu negócio:
            </h5>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
              <div className="bg-white/10 p-6 rounded-lg space-y-4 max-w-xl mx-auto">
                {/* Topo: ícone + título */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/images/iconfoguete.png"
                      width={50}
                      height={5}
                      alt="Ícone de foguete"
                    />
                  </div>
                  <h2 className="text-lg font-semibold">
                    Marketing de Incentivo
                  </h2>
                </div>

                {/* Meio: imagem vertical + parágrafo */}
                <div className="flex items-start space-x-4">
                  <div className="w-12">
                    <Image
                      src="/images/iconbarra.png"
                      width={10}
                      height={50}
                      alt="Barra vertical colorida"
                    />
                  </div>
                  <p className="text-sm text-white">
                    Ferramentas estratégicas para aumento de vendas
                  </p>
                </div>

                {/* Botão: centralizado */}
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                    CONHEÇA!
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8  flex items-center justify-center">
                  <span className="text-sm">
                    {" "}
                    <Image
                      src="/images/iconpeopleconfg.png"
                      width={20}
                      height={20}
                      alt="icone de pessoas configurando"
                    />
                  </span>
                </div>
                <span>RH, Departamento Pessoal e Trabalhista</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-sm">
                    <Image
                      src="/images/iconmaquininha.png"
                      width={20}
                      height={20}
                      alt="icone de maquininha de pagamento"
                    />
                  </span>
                </div>
                <span>Incentive Plus Bank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incentive Plus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/images/peopleslaptop.png"
                  alt="Pessoa sorrindo"
                  fill
                  className="rounded-full object-contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Conheça o
                <br />
                <span className="text-blue-600">Incentive Plus</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Uma solução completa para impulsionar seu negócio com as
                melhores estratégias do mercado.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Image
                  src="/images/geo.png"
                  alt="logo geo"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="/images/makibellaazul.png"
                  alt="logo makibella"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="/images/fikibela.png"
                  alt="logo fikibela"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="/images/campea.png"
                  alt="logo campea"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="/images/campeao.png"
                  alt="logo campeao"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="/images/usi.png"
                  alt="logo usi"
                  width={80}
                  height={40}
                  className="grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="py-16 bg-white">
        <Image
          src="/images/intersect.png"
          alt="intersessao"
          fill
          className="object-cover"
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Venda mais,
                <br />
                trabalhe menos com
                <br />
                nossas campanhas de
                <br />
                <span className="text-blue-600">incentivo</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Transforme sua equipe de vendas com estratégias comprovadas que
                geram resultados excepcionais.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Saiba mais
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-80">
                <Image
                  src="/images/business.png"
                  alt="Ilustração de vendas"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            O que nossos clientes estão
            <br />
            dizendo sobre nossos licenças
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/cardpesquisa.png"
                  alt="Cliente 1"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Nome do Cliente</h4>
                  <p className="text-gray-500 text-sm">Cargo, Empresa</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Excelente serviço! Conseguimos aumentar nossas vendas em 150%
                após implementar as estratégias."
              </p>
              <div className="flex text-yellow-400 mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/cardmulheres.png"
                  alt="Pesquisa"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Nome do Cliente</h4>
                  <p className="text-gray-500 text-sm">Cargo, Empresa</p>
                </div>
              </div>
              <p className="">
                "A equipe é muito profissional e os resultados apareceram
                rapidamente. Recomendo!"
              </p>
              <div className="flex text-yellow-400 mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/cardmoca.png"
                  alt="moça"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Nome do Cliente</h4>
                  <p className="text-gray-500 text-sm">Cargo, Empresa</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Superou todas as expectativas. Nossa equipe está mais motivada
                e produtiva."
              </p>
              <div className="flex text-yellow-400 mt-4">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Descubra como podemos transformar
              <br />o seu negócio hoje mesmo!
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Estratégias Personalizadas
                </h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos soluções sob medida para o seu negócio,
                  considerando suas necessidades específicas.
                </p>

                <h3 className="font-semibold text-lg mb-4">
                  Acompanhamento Contínuo
                </h3>
                <p className="text-gray-600">
                  Nossa equipe oferece suporte constante para garantir os
                  melhores resultados.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Resultados Comprovados
                </h3>
                <p className="text-gray-600 mb-4">
                  Histórico de sucesso com mais de 500 empresas atendidas em
                  todo o Brasil.
                </p>

                <h3 className="font-semibold text-lg mb-4">
                  Tecnologia Avançada
                </h3>
                <p className="text-gray-600">
                  Utilizamos as mais modernas ferramentas para potencializar
                  seus resultados.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Começar agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Acelere o seu negócio!
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">📈 Aumento de Vendas</h4>
                  <p className="text-gray-600 text-sm">
                    Estratégias comprovadas para multiplicar seus resultados
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">🎯 Foco em Resultados</h4>
                  <p className="text-gray-600 text-sm">
                    Metodologia orientada a objetivos mensuráveis
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">
                    👥 Equipe Especializada
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Profissionais experientes dedicados ao seu sucesso
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">
                    ⚡ Implementação Rápida
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Soluções ágeis que começam a funcionar imediatamente
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative w-full h-96">
                <Image
                  src="/images/maquinadedo.png"
                  alt="Crescimento do negócio"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Entre em
                <br />
                contato
              </h2>
              <p className="text-white/90 mb-8">
                Pronto para transformar seu negócio? Fale conosco e descubra
                como podemos ajudar você a alcançar seus objetivos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <span>contato@empresa.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📱</span>
                  </div>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📍</span>
                  </div>
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-gray-800 text-center">
                  {/* <FormPlus /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LOGO</h3>
              <p className="text-gray-400">
                Transformando negócios através de estratégias inovadoras.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Consultoria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Treinamentos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Campanhas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>contato@empresa.com</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;
