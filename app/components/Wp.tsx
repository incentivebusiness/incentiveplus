// // src/components/WhatsAppIcon.tsx
// import Image from 'next/image';
// import React from 'react';

// const WhatsAppIcon = () => {
//   const phoneNumber = '+5517996331057'; // Substitua pelo número da empresa

//   return (
//     <a
//       href={`https://wa.me/${phoneNumber}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         position: 'fixed',
//         bottom: '30px',
//         right: '30px',
//         backgroundColor: '#fff',
//         borderRadius: '50%',
//         padding: '10px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//         zIndex: 1000,
//       }}
//     >
//      <Image src='/images/wp.png' width={40} height={40} alt='whatssapp' className='w-[60px]'/>
//     </a>
//   );
// };

// export default WhatsAppIcon;
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WhatsAppIcon = () => {
  const phoneNumber = "+5511961961855";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <Image
        src="/images/wp.png"
        width={40}
        height={40}
        alt="whatsapp"
        className="w-[60px]"
      />
    </motion.a>
  );
};

export default WhatsAppIcon;
