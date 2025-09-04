import { Link } from "react-router-dom";

export function Header() {
  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Roteiros", path: "/roteiros" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-2xl font-heading text-gray-800">
          GeoTurismo <span className="text-litoral">3 Climas</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-sans text-gray-600 hover:text-litoral transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
