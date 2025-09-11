import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Coluna 1: Sobre o Projeto */}
          <div>
            <h3 className="font-bold text-lg mb-3 font-heading">
              GeoTurismo Três Climas
            </h3>
            <p className="text-gray-400 text-sm">
              Plataforma de divulgação científica e geoturística da Rota dos
              Três Climas, Itapipoca-CE.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-bold text-lg mb-3 font-heading">Navegue</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Apresentação
                </Link>
              </li>
              <li>
                <Link
                  to="/locais-de-estudo"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Locais de Estudo
                </Link>
              </li>
              <li>
                <Link
                  to="/destaques"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Destaques
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Realização */}
          <div>
            <h3 className="font-bold text-lg mb-3 font-heading">Realização</h3>
            <p className="text-gray-400 text-sm font-semibold">
              Ricardo Matos Machado
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Dissertação de Mestrado apresentada ao Programa de Pós-Graduação
              em Desenvolvimento e Meio Ambiente (PRODEMA/UFC).
            </p>
          </div>
        </div>

        {/* Linha divisória, Copyright e Créditos */}
        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GeoTurismo Três Climas. Todos os
            direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido por{" "}
            <a
              href="https://filippemonteiro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Filippe Monteiro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}