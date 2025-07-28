"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import ButtonCPF from "./ButtonCPF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Header = ({ menuColor = "text-white" }) => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  // Links for the dropdown menu
  const serviceLinks = [
    // { href: "/servicos/contaCorrente", label: "Incentive Plus Bank" },
    { href: "/servicos/redeParcerias", label: "Rede de Parcerias" },
    { href: "/servicos/saude", label: "Seguro de Saúde" },
    { href: "/servicos/segurodeVida", label: "Seguro de Acidentes Pessoais" },
    {
      href: "/servicos/cuidandodevoce",
      label: "MAPFRE Cuidado de Você + Rede TEM",
    },
    { href: "/servicos/affinityPet", label: "Affinity PET" },
    {
      href: "/servicos/assistenciaDomiciliar",
      label: "Assistência Domiciliar",
    },
  ];

  //fecha menu dropdaw clicando fora do modal
  // useEffect(() => {
  //     document.addEventListener('mousedown', closeDropdown);
  //     return () => {
  //         document.removeEventListener('mousedown', closeDropdown);
  //     };
  // }, []);

  // Links for the dropdown menu
  // const serviceLinks = [
  //   { href: "/servicos/solucoesEmpresariais", label: "Soluções Empresariais" },
  //   { href: "/servicos/contaCorrente", label: "Incentive Plus Bank" },
  //   { href: "/servicos/redeParcerias", label: "Rede de Parcerias" },
  //   { href: "/servicos/saude", label: "Seguro de Saúde" },
  //   { href: "/servicos/segurodeVida", label: "Seguro de Acidentes Pessoais" },
  //   {
  //     href: "/servicos/cuidandodevoce",
  //     label: "MAPFRE Cuidado de Você + Rede TEM",
  //   },
  //   { href: "/servicos/affinityPet", label: "Affinity PET" },
  //   {
  //     href: "/servicos/assistenciaDomiciliar",
  //     label: "Assistência Domiciliar",
  //   },
  // ];

  return (
    <header className={`container text-white mt-3 md:mt-0`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logocare.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-[120px] xl:w-[200px] h-auto absolute md:top-3 md:left-[90px] top-5 left-[20px] z-90"
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 text-xl mt-8 pr-10">
          {/* Dropdown Menu: Serviços */}
          <ButtonCPF />
          <div className="relative group" ref={dropdownRef}>
            {/* <a href=""> */}

            <button
              onClick={toggleDropdown}
              className="text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline flex items-center"
            >
              Pacote de Benefícios
              <span
                className={`ml-2 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 w-48 mt-2 bg-white text-[rgb(1,24,74)] rounded-xl shadow-lg z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-semibold text-[rgb(1,24,74)] hover:bg-gray-100 hover:border-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Criar Conta */}
          {!session && (
            <Link
              href="/autenticacao/nova-conta"
              className="text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline"
            >
              Criar Conta
            </Link>
          )}

          {/* Entrar */}
          {!session ? (
            <Link
              href="/autenticacao/login"
              className="text-white bg-[rgb(1,24,74)] px-4 py-1 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline ml-auto"
            >
              Entrar
            </Link>
          ) : (
            <>
              <Link
                href={"/admin/dashboard"}
                className="text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline"
              ></Link>
              <div className="relative group">
                <button
                  onClick={() => signOut()}
                  className="text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline ml-auto"
                >
                  Sair
                </button>
              </div>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[rgb(1,24,74)] focus:outline-none absolute top-6 right-6 z-51"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full mt-[60px] bg-white text-[rgb(1,24,74)] z-50">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <Link href="/">
                <button className="relative group bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <span className="absolute left-3 top-1/3 -translate-y-1/2 text-white animate-bounce">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="w-5 h-5 text-white"
                    />
                  </span>
                  <span className="ml-6 group-hover:ml-8 transition-all duration-300">
                    Para Empresa
                  </span>
                </button>
              </Link>
              {session && (
                <Link
                  href={"/conta/usuario"}
                  className="block px-4 py-2  hover:text-[rgb(89,138,243)] hover:scale-105"
                ></Link>
              )}
              <div className="lg:hidden bg-white p-4 flex flex-col items-center gap-1">
                <button
                  onClick={toggleDropdown}
                  className="text-[rgb(1,24,74)] mb-2 block"
                >
                  Pacote de Benefícios
                  <span
                    className={`ml-2 transform transition-transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="bg-white shadow-md rounded-xl border-2 border-[rgb(1,24,74)]">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-semibold text-[rgb(1,24,74)] hover:bg-gray-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {!session && (
                <Link
                  href="/autenticacao/nova-conta"
                  className="hover:text-[rgb(89,138,243)] hover:scale-105"
                >
                  Criar Conta
                </Link>
              )}
              {!session ? (
                <Link
                  href="/autenticacao/login"
                  className="text-white py-1 px-2 font-semibold text-lg rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 transition duration-300 mb-2 block"
                >
                  Entrar
                </Link>
              ) : (
                <button
                  onClick={() => signOut()}
                  className="hover:text-[rgb(89,138,243)] hover:scale-105"
                >
                  Sair
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
