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
        <a href="/" className="font-bold text-2xl font-heading text-gray-800">
          GeoTurismo <span className="text-litoral">3 Climas</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="font-sans text-gray-600 hover:text-litoral transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Abrir menu de navegação"
            className="text-gray-700 focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
