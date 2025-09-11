import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 font-heading">
          <Link to="/">GeoTurismo Três Climas</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Apresentação
            </Link>
          </li>
          <li>
            <Link
              to="/locais-de-estudo"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Locais de Estudo
            </Link>
          </li>
          <li>
            <Link
              to="/destaques"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Destaques
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}