import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Dropdown = ({
  title,
  children,
  closeMobileMenu,
}: {
  title: string;
  children: React.ReactNode;
  closeMobileMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    closeMobileMenu();
  };

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

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: handleLinkClick,
      } as React.Attributes);
    }
    return child;
  });

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
          className={`w-4 h-4 ml-1 transition-transform ${
            isOpen || "group-hover:rotate-180"
          }`}
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
        className={`absolute top-full right-0 lg:left-0 w-64 bg-white rounded-md shadow-lg z-50 py-1 
                   md:hidden ${isOpen ? "block" : "hidden"}
                   md:group-hover:block md:hidden`}
      >
        {childrenWithProps}
      </div>
    </div>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const closeMobileMenu = () => setIsMenuOpen(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  const dropdownLinkClasses =
    "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#A67B5B]";

  const allNavLinks = (
    <>
      <Dropdown title="Apresentação" closeMobileMenu={closeMobileMenu}>
        <NavLink to="/presentation/geotourism" className={dropdownLinkClasses}>
          Geoturismo
        </NavLink>
        <NavLink
          to="/presentation/geodiversity"
          className={dropdownLinkClasses}
        >
          O que é Geodiversidade
        </NavLink>
        <NavLink
          to="/presentation/geomorphological-heritage"
          className={dropdownLinkClasses}
        >
          Patrimônio Geomorfológico
        </NavLink>
        <NavLink
          to="/presentation/three-climates"
          className={dropdownLinkClasses}
        >
          Terra dos três climas
        </NavLink>
      </Dropdown>
      <Dropdown
        title="Locais de Interesse Geomorfológico"
        closeMobileMenu={closeMobileMenu}
      >
        <NavLink
          to="/routes/roteiro-sol-e-praia"
          className={dropdownLinkClasses}
        >
          Roteiro Sol e Praia
        </NavLink>
        <NavLink to="/routes/roteiro-das-aguas" className={dropdownLinkClasses}>
          Roteiro das Águas
        </NavLink>
        <NavLink
          to="/routes/roteiro-pre-historico"
          className={dropdownLinkClasses}
        >
          Roteiro Pré-Histórico
        </NavLink>
        <NavLink
          to="/routes/roteiro-das-pedras"
          className={dropdownLinkClasses}
        >
          Roteiro das Pedras
        </NavLink>
      </Dropdown>
      <Dropdown
        title="Destaques e Curiosidades"
        closeMobileMenu={closeMobileMenu}
      >
        <NavLink to="/highlights/geology" className={dropdownLinkClasses}>
          Geologia e Geomorfologia
        </NavLink>
        <NavLink to="/highlights/paleontology" className={dropdownLinkClasses}>
          Paleontologia
        </NavLink>
        <NavLink to="/highlights/biodiversity" className={dropdownLinkClasses}>
          Biodiversidade
        </NavLink>
        <NavLink to="/highlights/hypsometry" className={dropdownLinkClasses}>
          Hipsometria (altitude)
        </NavLink>
      </Dropdown>
      <Dropdown title="Contato" closeMobileMenu={closeMobileMenu}>
        <NavLink to="/contact" className={dropdownLinkClasses}>
          Fale conosco
        </NavLink>
      </Dropdown>
    </>
  );

  const downloadButton = (
    <a
      href="/lei-municipal-062-2023.pdf"
      download
      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C89B5B] hover:bg-[#A67B5B] transition-colors whitespace-nowrap"
    >
      Baixar Lei Orgânica
    </a>
  );

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="w-full mx-auto px-4 lg:px-6 py-4 flex items-center h-full">
        {isSearchOpen ? (
          <div className="w-full h-full flex items-center relative">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar no site..."
                className="w-full h-full focus:outline-none text-lg pr-10"
                autoFocus
              />
            </form>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-stone-800"
              aria-label="Fechar busca"
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
        ) : (
          <>
            <div className="flex-shrink-0 text-xl font-bold">
              <Link to="/">
                <span className="text-[#F57C00]">Geoturismo</span>{" "}
                <span className="text-[#1E88E5]">Três</span>{" "}
                <span className="text-[#388E3C]">Climas</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center ml-auto">
              <div className="hidden lg:flex items-center space-x-6">
                {allNavLinks}
              </div>
              <div className="hidden md:flex lg:hidden items-center space-x-6">
                <Dropdown
                  title="Apresentação"
                  closeMobileMenu={closeMobileMenu}
                >
                  <NavLink
                    to="/presentation/geotourism"
                    className={dropdownLinkClasses}
                  >
                    Geoturismo
                  </NavLink>
                  <NavLink
                    to="/presentation/geodiversity"
                    className={dropdownLinkClasses}
                  >
                    O que é Geodiversidade
                  </NavLink>
                  <NavLink
                    to="/presentation/geomorphological-heritage"
                    className={dropdownLinkClasses}
                  >
                    Patrimônio Geomorfológico
                  </NavLink>
                  <NavLink
                    to="/presentation/three-climates"
                    className={dropdownLinkClasses}
                  >
                    Terra dos três climas
                  </NavLink>
                </Dropdown>
                <Dropdown
                  title="Locais de Interesse Geomorfológico"
                  closeMobileMenu={closeMobileMenu}
                >
                  <NavLink
                    to="/routes/roteiro-sol-e-praia"
                    className={dropdownLinkClasses}
                  >
                    Roteiro Sol e Praia
                  </NavLink>
                  <NavLink
                    to="/routes/roteiro-das-aguas"
                    className={dropdownLinkClasses}
                  >
                    Roteiro das Águas
                  </NavLink>
                  <NavLink
                    to="/routes/roteiro-pre-historico"
                    className={dropdownLinkClasses}
                  >
                    Roteiro Pré-Histórico
                  </NavLink>
                  <NavLink
                    to="/routes/roteiro-das-pedras"
                    className={dropdownLinkClasses}
                  >
                    Roteiro das Pedras
                  </NavLink>
                </Dropdown>
                <Dropdown title="Mais" closeMobileMenu={closeMobileMenu}>
                  <NavLink
                    to="/highlights/geology"
                    className={dropdownLinkClasses}
                  >
                    Geologia e Geomorfologia
                  </NavLink>
                  <NavLink
                    to="/highlights/paleontology"
                    className={dropdownLinkClasses}
                  >
                    Paleontologia
                  </NavLink>
                  <NavLink
                    to="/highlights/biodiversity"
                    className={dropdownLinkClasses}
                  >
                    Biodiversidade
                  </NavLink>
                  <NavLink
                    to="/highlights/hypsometry"
                    className={dropdownLinkClasses}
                  >
                    Hipsometria (altitude)
                  </NavLink>
                  <NavLink to="/contact" className={dropdownLinkClasses}>
                    Fale conosco
                  </NavLink>
                </Dropdown>
              </div>

              <div className="pl-6 ml-6 border-l border-gray-300 flex items-center space-x-4">
                {downloadButton}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Abrir busca"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 hover:text-stone-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center ml-auto space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Abrir busca"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
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
          </>
        )}
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-78 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
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
          <nav className="flex flex-col space-y-4">{allNavLinks}</nav>
          <div className="pt-4 mt-4 border-t border-gray-200">
            {downloadButton}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}
    </header>
  );
}
