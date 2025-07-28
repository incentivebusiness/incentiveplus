export default function ButtonEspecialista() {
  const phoneNumber = "+5511961961855";
  return (
    <a href={`https://wa.me/${phoneNumber}`}>
      <button className="bg-gradient-to-r from-blue-400 text-sm md:text-md to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-3xl transition-colors">
        Falar com nosso especialista
      </button>
    </a>
  );
}
