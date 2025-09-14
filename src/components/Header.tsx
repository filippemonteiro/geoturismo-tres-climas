import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Dropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative group" ref={containerRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-gray-700 hover:text-[#A67B5B] font-medium transition-colors whitespace-nowrap flex items-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute top-full left-0 w-64 bg-white rounded-md shadow-lg z-50 py-1 
                   lg:hidden ${isOpen ? "block" : "hidden"}
                   lg:group-hover:block lg:hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  const dropdownLinkClasses =
    "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#A67B5B]";

  const navLinks = (
    <>
      <Dropdown title="Apresentação">
        <NavLink
          to="/presentation/geotourism"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Geoturismo
        </NavLink>
        <NavLink
          to="/presentation/geodiversity"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          O que é Geodiversidade
        </NavLink>
        <NavLink
          to="/presentation/geomorphological-heritage"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Patrimônio Geomorfológico
        </NavLink>
        <NavLink
          to="/presentation/three-climates"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Terra dos Três Climas
        </NavLink>
      </Dropdown>

      <Dropdown title="Locais de Interesse Geomorfológico">
        <NavLink
          to="/routes/sol-e-praia"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Roteiro Sol e Praia
        </NavLink>
        <NavLink
          to="/routes/das-aguas"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Roteiro das Águas
        </NavLink>
        <NavLink
          to="/routes/pre-historico"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Roteiro Pré-Histórico
        </NavLink>
        <NavLink
          to="/routes/das-pedras"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Roteiro das Pedras
        </NavLink>
      </Dropdown>

      <Dropdown title="Destaques e Curiosidades">
        <NavLink
          to="/highlights/geology"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Geologia e Geomorfologia
        </NavLink>
        <NavLink
          to="/highlights/paleontology"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Paleontologia
        </NavLink>
        <NavLink
          to="/highlights/biodiversity"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Biodiversidade
        </NavLink>
        <NavLink
          to="/highlights/hypsometry"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Hipsometria (altitude)
        </NavLink>
      </Dropdown>

      <Dropdown title="Contato">
        <NavLink
          to="/contact"
          className={dropdownLinkClasses}
          onClick={closeMobileMenu}
        >
          Fale conosco
        </NavLink>
      </Dropdown>
    </>
  );

  const downloadButton = (
    <a
      href="/LEI MUNICIPAL_062_2023_0000001__.pdf"
      download
      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C89B5B] hover:bg-[#A67B5B] transition-colors whitespace-nowrap"
    >
      Baixar Lei Orgânica
    </a>
  );

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
            <span className="text-[#F57C00]">Geoturismo</span>{" "}
            <span className="text-[#1E88E5]">Três</span>{" "}
            <span className="text-[#388E3C]">Climas</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks}
          <div className="pl-4 ml-4 border-l border-gray-300">
            {downloadButton}
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m4 6H4"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-78 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-lg">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">{navLinks}</nav>
          <div className="pt-4 mt-4 border-t border-gray-200">
            {downloadButton}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        ></div>
      )}
    </header>
  );
}
