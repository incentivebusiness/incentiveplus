import type React from "react"
import Image from "next/image"
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard"


const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[600px] min-h-[600px] max-h-[900px]">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src="/images/capa3.png"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
        </div>

        {/* Conteúdo do texto */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-white text-center max-w-6xl flex flex-col items-center justify-center py-8 sm:py-12">

            {/* Título principal */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-2 leading-tight">
              Impulsionamos o seu negócio rumo<br /> ao{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent font-extrabold">
                sucesso
              </span>{" "}
              que ele merece!
            </h1>

            {/* Subtítulo */}
            <h5 className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 px-2 leading-relaxed">
              Oferecemos uma gama de <b>serviços com soluções inteligentes</b> para otimizar o seu negócio:
            </h5>

            {/* Cards Container - Layout Responsivo Melhorado */}
            <div className="w-full max-w-6xl px-2 sm:px-4">
              {/* Mobile: Stack vertical */}
              <div className="flex flex-col space-y-4 sm:hidden">
                <ServiceCard
                  iconSrc="/images/iconfoguete.png"
                  title="Marketing de Incentivo"
                  description="Ferramentas estratégicas para aumento de vendas"
                />
                <ServiceCard
                  iconSrc="/images/iconpeopleconfg.png"
                  title="RH, Departamento Pessoal e Trabalhista"
                  description="Gestão completa de recursos humanos e compliance trabalhista"
                />
                <ServiceCard
                  iconSrc="/images/iconmaquininha.png"
                  title="Incentive Plus Bank"
                  description="Soluções financeiras e meios de pagamento inteligentes"
                />
              </div>

              {/* Tablet: 2+1 Layout */}
              <div className="hidden sm:flex md:hidden flex-col space-y-4">
                <div className="flex flex-row space-x-4 justify-center">
                  <div className="flex-1 max-w-sm">
                    <ServiceCard
                      iconSrc="/images/iconfoguete.png"
                      title="Marketing de Incentivo"
                      description="Ferramentas estratégicas para aumento de vendas"
                    />
                  </div>
                  <div className="flex-1 max-w-sm">
                    <ServiceCard
                      iconSrc="/images/iconpeopleconfg.png"
                      title="RH, Departamento Pessoal e Trabalhista"
                      description="Gestão completa de recursos humanos e compliance trabalhista"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="max-w-sm">
                    <ServiceCard
                      iconSrc="/images/iconmaquininha.png"
                      title="Incentive Plus Bank"
                      description="Soluções financeiras e meios de pagamento inteligentes"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: Layout horizontal */}
              <div className="hidden md:flex flex-row justify-center items-stretch space-x-4 lg:space-x-6 xl:space-x-8">
                <div className="flex-1 max-w-xs lg:max-w-sm xl:max-w-md">
                  <ServiceCard
                    iconSrc="/images/iconfoguete.png"
                    title="Marketing de Incentivo"
                    description="Ferramentas estratégicas para aumento de vendas"
                  />
                </div>
                <div className="flex-1 max-w-xs lg:max-w-sm xl:max-w-md">
                  <ServiceCard
                    iconSrc="/images/iconpeopleconfg.png"
                    title="RH, Departamento Pessoal e Trabalhista"
                    description="Gestão completa de recursos humanos e compliance trabalhista"
                  />
                </div>
                <div className="flex-1 max-w-xs lg:max-w-sm xl:max-w-md">
                  <ServiceCard
                    iconSrc="/images/iconmaquininha.png"
                    title="Incentive Plus Bank"
                    description="Soluções financeiras e meios de pagamento inteligentes"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Incentive Plus Section */}
      <section className="py-16 text-[rgb(1,24,77)]">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Conheça o
                <br />
                <span className="text-blue-600">Incentive Plus</span>
              </h2>
              <p className=" mb-8 text-lg">
                Em 2023 a Incentive Plus foi criada com o propósito de trazer diversas soluções com o foco no crescimento e desenvolvimento de empresas e colaboradores, pois ambos precisam um do outro para alcançar o sucesso, cada qual com suas necessidades individuais.

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
      <section className=" xl:py-[20rem] md:py-[5rem] bg-white relative overflow-hidden text-[rgb(1,24,77)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/intersect.png"
            alt="intersessao"
            fill
            className="object-cover "
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">

              <span className='text-xs md:text-sm font-light'>MARKETING DE INCENTIVO</span>
              <h2 className="text-3xl md:text-4xl font-bold  mb-6">
                Venda mais,
                <br />
                trabalhe menos com
                <br />
                nossas campanhas de
                <br />
                <span className="text-blue-600">incentivo</span>
              </h2>
              <p className=" mb-8 text-lg">
                ampanha de incentivo é uma ação criada para engajar pessoas, que podem ser clientes ou colaboradores de uma organização. Ela consiste em oferecer premiações para quem atingir determinadas metas.
                Esse tipo de campanha nas empresas tem como objetivo incentivar a obtenção de melhores resultados por parte dos colaboradores. Dessa forma, as equipes ficam engajadas a alcançar os objetivos determinados, a fim de obter a recompensa ou premiação.
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
                <Image src="/images/cardpesquisa.png" alt="Cliente 1" width={60} height={60} className="rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">Nome do Cliente</h4>
                  <p className="text-gray-500 text-sm">Cargo, Empresa</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Excelente serviço! Conseguimos aumentar nossas vendas em 150% após implementar as estratégias."
              </p>
              <div className="flex text-yellow-400 mt-4">★★★★★</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image src="/images/cardmulheres.png" alt="Pesquisa" width={60} height={60} className="rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">Nome do Cliente</h4>
                  <p className="text-gray-500 text-sm">Cargo, Empresa</p>
                </div>
              </div>
              <p className="">"A equipe é muito profissional e os resultados apareceram rapidamente. Recomendo!"</p>
              <div className="flex text-yellow-400 mt-4">★★★★★</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image src="/images/cardmoca.png" alt="moça" width={60} height={60} className="rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">Nome do Cliente</h4>
                  <p className="text-gray-500 text-sm">Cargo, Empresa</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Superou todas as expectativas. Nossa equipe está mais motivada e produtiva."
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
                <h3 className="font-semibold text-lg mb-4">Estratégias Personalizadas</h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos soluções sob medida para o seu negócio, considerando suas necessidades específicas.
                </p>
                <h3 className="font-semibold text-lg mb-4">Acompanhamento Contínuo</h3>
                <p className="text-gray-600">
                  Nossa equipe oferece suporte constante para garantir os melhores resultados.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Resultados Comprovados</h3>
                <p className="text-gray-600 mb-4">
                  Histórico de sucesso com mais de 500 empresas atendidas em todo o Brasil.
                </p>
                <h3 className="font-semibold text-lg mb-4">Tecnologia Avançada</h3>
                <p className="text-gray-600">
                  Utilizamos as mais modernas ferramentas para potencializar seus resultados.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Acelere o seu negócio!</h2>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">📈 Aumento de Vendas</h4>
                  <p className="text-gray-600 text-sm">Estratégias comprovadas para multiplicar seus resultados</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">🎯 Foco em Resultados</h4>
                  <p className="text-gray-600 text-sm">Metodologia orientada a objetivos mensuráveis</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">👥 Equipe Especializada</h4>
                  <p className="text-gray-600 text-sm">Profissionais experientes dedicados ao seu sucesso</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">⚡ Implementação Rápida</h4>
                  <p className="text-gray-600 text-sm">Soluções ágeis que começam a funcionar imediatamente</p>
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
                Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar você a alcançar seus
                objetivos.
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
                <p className="text-gray-800 text-center">{/* <FormPlus /> */}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
