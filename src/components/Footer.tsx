import { Link } from "react-router-dom";

export function Footer() {
  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Roteiros", path: "/roteiros" },
    { label: "Geossítios", path: "/geossitios" },
    { label: "Glossário", path: "/glossario" },
    { label: "Itapipoca", path: "/itapipoca" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/geoturismotresclimas/",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="font-bold text-2xl font-heading">
            GeoTurismo <span className="text-litoral">3 Climas</span>
          </h3>
          <p className="mt-4 text-gray-400 font-sans">
            Um projeto de extensão dedicado à divulgação e conservação da
            geodiversidade de Itapipoca, Ceará.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wider text-gray-400">
            Navegação
          </h4>
          <nav className="mt-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans hover:text-litoral transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wider text-gray-400">
            Redes Sociais
          </h4>
          <div className="mt-4 flex flex-col space-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans hover:text-litoral transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <p className="container mx-auto text-center text-sm text-gray-500 font-sans">
          &copy; {new Date().getFullYear()} GeoTurismo Três Climas. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
