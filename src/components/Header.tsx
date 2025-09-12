import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const linkClasses =
    "text-gray-700 hover:text-[#A67B5B] font-medium transition-colors whitespace-nowrap";
  const activeLinkClasses = "text-[#A67B5B] font-bold whitespace-nowrap";

  const dropdownLinkClasses =
    "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#A67B5B]";

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeAllMenus = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <div 
        className="relative group" 
        ref={dropdownContainerRef}
      >
        <button
          onClick={handleDropdownToggle}
          className={`${linkClasses} flex items-center`}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          Apresentação
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
                     lg:hidden ${isDropdownOpen ? 'block' : 'hidden'}
                     lg:group-hover:block lg:hidden`}
        >
          <NavLink
            to="/presentation/geotourism"
            className={dropdownLinkClasses}
            onClick={closeAllMenus}
          >
            Geoturismo
          </NavLink>
          <NavLink
            to="/presentation/geodiversity"
            className={dropdownLinkClasses}
            onClick={closeAllMenus}
          >
            O que é Geodiversidade
          </NavLink>
          <NavLink
            to="/presentation/geomorphological-heritage"
            className={dropdownLinkClasses}
            onClick={closeAllMenus}
          >
            Patrimônio Geomorfológico
          </NavLink>
        </div>
      </div>
      <NavLink
        to="/locais-de-estudo"
        className={({ isActive }) =>
          isActive ? activeLinkClasses : linkClasses
        }
        onClick={closeAllMenus}
      >
        Locais de Interesse Geomorfológico
      </NavLink>
      <NavLink
        to="/destaques"
        className={({ isActive }) =>
          isActive ? activeLinkClasses : linkClasses
        }
        onClick={closeAllMenus}
      >
        Destaques e Curiosidades
      </NavLink>
      <NavLink
        to="/contato"
        className={({ isActive }) =>
          isActive ? activeLinkClasses : linkClasses
        }
        onClick={closeAllMenus}
      >
        Contato
      </NavLink>
    </>
  );

  const downloadButton = (
    <a
      href="/LEI MUNICIPAL_062_2023_0000001__.pdf"
      download
      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C89B5B] hover:bg-[#A67B5B] transition-colors whitespace-nowrap"
    >
      Baixar Lei Municipal
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

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-4">{navLinks}</div>
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
              xmlns="http://www.w3.org/2000/svg"
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
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 focus:outline-none"
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks}
            <div className="pt-4 mt-4 border-t border-gray-200">
              {downloadButton}
            </div>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        ></div>
      )}
    </header>
  );
}