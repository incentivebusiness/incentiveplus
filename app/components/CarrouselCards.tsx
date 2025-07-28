// "use client";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const CarouselCards = ({ title, cards, cardType = "default" }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(2);

//   // Responsividade - máximo 2 cards
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else {
//         setItemsPerView(2); // Máximo 2 cards em telas maiores
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerView >= cards.length ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? Math.max(0, cards.length - itemsPerView) : prev - 1
//     );
//   };

//   const visibleCards = cards.slice(currentIndex, currentIndex + itemsPerView);

//   // Estilos condicionais baseados no tipo de card
//   const isBlueTheme = cardType === "blue";

//   const cardBg = isBlueTheme
//     ? "bg-[rgba(2,23,64,0.9)]"
//     : "bg-[rgb(237,244,252)]";

//   const titleColor = isBlueTheme ? "text-white" : "text-[rgb(1,24,73)]";
//   const textColor = isBlueTheme ? "text-blue-100" : "text-[rgb(1,24,73)]";
//   const iconBg = isBlueTheme ? "bg-blue-700" : "bg-orange-100";

//   const buttonBg = isBlueTheme
//     ? "bg-blue-700 hover:bg-blue-600"
//     : "bg-white hover:bg-gray-50";
//   const buttonIconColor = isBlueTheme ? "text-blue-200" : "text-gray-600";
//   const indicatorActive = isBlueTheme ? "bg-blue-300" : "bg-orange-500";
//   const indicatorInactive = isBlueTheme ? "bg-blue-700" : "bg-gray-300";

//   return (
//     <div className={`w-full ${isBlueTheme ? "py-16 px-8 rounded-2xl" : ""} `}>
//       <h3 className={`text-2xl font-bold text-center mb-8 ${titleColor}`}>
//         {title}
//       </h3>

//       <div className="relative">
//         {/* Botão Anterior */}
//         <button
//           onClick={prevSlide}
//           className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 shadow-lg rounded-full p-2 transition-colors`}
//           disabled={currentIndex === 0}
//         >
//           <ChevronLeft className={`w-3 md:w-6 h-3 md:h-6 ${buttonIconColor}`} />
//         </button>

//         {/* Botão Próximo */}
//         <button
//           onClick={nextSlide}
//           className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 shadow-lg rounded-full p-2 transition-colors`}
//           disabled={currentIndex + itemsPerView >= cards.length}
//         >
//           <ChevronRight
//             className={`w-3 md:w-6 h-3 md:h-6 ${buttonIconColor}`}
//           />
//         </button>

//         {/* Cards Container */}
//         <div className="mx-12 overflow-hidden">
//           <div
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(0)` }}
//           >
//             {visibleCards.map((card, index) => (
//               <div
//                 key={currentIndex + index}
//                 className={`flex-shrink-0 px-4 ${
//                   itemsPerView === 1 ? "w-full" : "w-1/2"
//                 }`}
//               >
//                 <div
//                   className={`${cardBg} p-6 h-32 rounded-3xl ${
//                     isBlueTheme ? "" : ""
//                   }`}
//                 >
//                   {/* Layout horizontal - Ícone à esquerda, conteúdo à direita */}
//                   <div className="flex items-center h-full">
//                     {/* Ícone */}
//                     <div className="flex-shrink-0 mr-4">
//                       <div
//                         className={`w-8 md:w-12 w-8 md:h-12 flex items-center justify-center`}
//                       >
//                         <img
//                           src={card.icon}
//                           alt={card.title}
//                           className="w-full h-auto"
//                         />
//                       </div>
//                     </div>

//                     {/* Conteúdo */}
//                     <div className="flex-1">
//                       {/* Título */}
//                       <h4
//                         className={`text-[12px] font-semibold mb-2 ${titleColor}`}
//                       >
//                         {card.title}
//                       </h4>

//                       {/* Descrição */}
//                       <p className={`${textColor} text-[11px] leading-relaxed`}>
//                         {card.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Indicadores */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: Math.ceil(cards.length / itemsPerView) }).map(
//             (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index * itemsPerView)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   Math.floor(currentIndex / itemsPerView) === index
//                     ? indicatorActive
//                     : indicatorInactive
//                 }`}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarouselCards;
"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type CarouselCardsProps = {
  title: string;
  cards: Card[];
  cardType?: "default" | "blue";
};
const CarouselCards: React.FC<CarouselCardsProps> = ({
  title,
  cards,
  cardType = "default",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Responsividade - máximo 2 cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2); // Máximo 2 cards em telas maiores
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= cards.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, cards.length - itemsPerView) : prev - 1
    );
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + itemsPerView);

  // Estilos condicionais baseados no tipo de card
  const isBlueTheme = cardType === "blue";

  const cardBg = isBlueTheme
    ? "bg-[rgba(2,23,64,0.9)]"
    : "bg-[rgb(237,244,252)]";

  const titleColor = isBlueTheme ? "text-white" : "text-[rgb(1,24,73)]";
  const textColor = isBlueTheme ? "text-blue-100" : "text-[rgb(1,24,73)]";
  const iconBg = isBlueTheme ? "bg-blue-700" : "bg-orange-100";

  const buttonBg = isBlueTheme
    ? "bg-blue-700 hover:bg-blue-600"
    : "bg-white hover:bg-gray-50";
  const buttonIconColor = isBlueTheme ? "text-blue-200" : "text-gray-600";
  const indicatorActive = isBlueTheme ? "bg-blue-300" : "bg-orange-500";
  const indicatorInactive = isBlueTheme ? "bg-blue-700" : "bg-gray-300";

  return (
    <div
      className={`w-full ${
        isBlueTheme ? "py-8 md:py-16 px-4 md:px-8 rounded-2xl" : ""
      } `}
    >
      <h3
        className={`text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 ${titleColor}`}
      >
        {title}
      </h3>

      <div className="relative">
        {/* Botão Anterior */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 z-10 shadow-lg rounded-full p-1 md:p-2 transition-colors`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className={`w-4 md:w-6 h-4 md:h-6 ${buttonIconColor}`} />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={nextSlide}
          className={`absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 z-10 shadow-lg rounded-full p-1 md:p-2 transition-colors`}
          disabled={currentIndex + itemsPerView >= cards.length}
        >
          <ChevronRight
            className={`w-4 md:w-6 h-4 md:h-6 ${buttonIconColor}`}
          />
        </button>

        {/* Cards Container - Reduzindo margem lateral no mobile */}
        <div className="mx-6 md:mx-12 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(0)` }}
          >
            {visibleCards.map((card, index) => (
              <div
                key={currentIndex + index}
                className={`flex-shrink-0 px-2 md:px-4 ${
                  itemsPerView === 1 ? "w-full" : "w-1/2"
                }`}
              >
                <div
                  className={`${cardBg} p-4 md:p-6 h-36 md:h-40 rounded-3xl ${
                    isBlueTheme ? "" : ""
                  }`}
                >
                  {/* Layout horizontal - Ícone à esquerda, conteúdo à direita */}
                  <div className="flex items-center h-full">
                    {/* Ícone */}
                    <div className="flex-shrink-0 mr-2 md:mr-4">
                      <div
                        className={`w-6 md:w-12 h-6 md:h-12 flex items-center justify-center`}
                      >
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      {/* Título */}
                      <h4
                        className={`text-xs md:text-sm font-semibold mb-1 md:mb-2 ${titleColor} leading-tight`}
                      >
                        {card.title}
                      </h4>

                      {/* Descrição */}
                      <p
                        className={`${textColor} text-xs md:text-sm leading-relaxed`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-2">
          {Array.from({ length: Math.ceil(cards.length / itemsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? indicatorActive
                    : indicatorInactive
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;
