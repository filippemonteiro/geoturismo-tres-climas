import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = "text-gray-700 hover:text-[#A67B5B] font-medium transition-colors";
  const activeLinkClasses = "text-[#A67B5B] font-bold";

  const navLinks = (
    <>
      <NavLink to="/" end className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)} onClick={() => setIsOpen(false)}>
        Apresentação
      </NavLink>
      <NavLink to="/locais-de-estudo" className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)} onClick={() => setIsOpen(false)}>
        Locais de Estudo
      </NavLink>
      <NavLink to="/destaques" className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)} onClick={() => setIsOpen(false)}>
        Destaques
      </NavLink>
      <NavLink to="/referencias" className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)} onClick={() => setIsOpen(false)}>
        Referências
      </NavLink>
      <NavLink to="/contato" className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)} onClick={() => setIsOpen(false)}>
        Contato
      </NavLink>
    </>
  );

  const downloadButton = (
    <a
      href="/LEI MUNICIPAL_062_2023_0000001__.pdf"
      download
      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C89B78] hover:bg-[#A67B5B] transition-colors"
    >
      Baixar Lei Municipal
    </a>
  );

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
            <span className="text-[#F57C00]">GeoTurismo</span>{' '}
            <span className="text-[#1E88E5]">Três</span>{' '}
            <span className="text-[#388E3C]">Climas</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            {navLinks}
          </div>
          <div className="pl-6 ml-6 border-l border-gray-300">
            {downloadButton}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m4 6H4"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Lateral Mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
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
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"></div>}
    </header>
  );
}