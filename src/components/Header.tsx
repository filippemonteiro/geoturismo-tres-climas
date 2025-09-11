import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = "text-gray-600 hover:text-blue-600 font-medium";
  const activeLinkClasses = "text-blue-600 font-bold";

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 font-heading">
          <Link to="/" onClick={() => setIsOpen(false)}>
            GeoTurismo Três Climas
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Apresentação
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locais-de-estudo"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Locais de Estudo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destaques"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Destaques
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m4 6H4"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Apresentação
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locais-de-estudo"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Locais de Estudo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destaques"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Destaques
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}