import React from "react"
import Image from "next/image"

interface ServiceCardProps {
  iconSrc: string
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-[rgb(1,24,74)] bg-opacity-20 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto transition-all duration-300 hover:bg-opacity-30">
      {/* Topo: ícone + título */}
      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mt-1 sm:mt-0">
          <Image
            src={iconSrc}
            width={40}
            height={40}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold leading-tight text-white flex-1">
          {title}
        </h2>
      </div>

      {/* Barra + descrição */}
      <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-5">
        <div className="w-1 sm:w-1.5 flex-shrink-0 mt-1">
          <Image
            src="/images/iconbarra.png"
            width={10}
            height={50}
            alt="Barra"
            className="w-full h-auto min-h-[40px]"
          />
        </div>
        <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Botão */}
      <div className="flex justify-center pt-1 sm:pt-2">
        <button className="bg-[rgb(1,24,74)] hover:bg-blue-800 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-3xl text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
          CONHEÇA!
        </button>
      </div>
    </div>
  )
}

export default ServiceCard