import { Link } from "react-router-dom";
import logoUFC from "../assets/logo-ufc.png";

export function Footer() {
  return (
    <footer className="bg-stone-200 text-stone-600 pt-12 pb-8 border-t border-stone-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-3 font-heading text-stone-800">
              <span className="text-[#F57C00]">Geoturismo</span>{" "}
              <span className="text-[#1E88E5]">Três</span>{" "}
              <span className="text-[#388E3C]">Climas</span>
            </h3>
            <p className="text-sm">
              Plataforma de divulgação científica e geoturística da Rota dos
              Três Climas, Itapipoca-CE.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 font-heading text-stone-800">
              Navegue
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#A67B5B] text-sm transition-colors"
                >
                  Apresentação
                </Link>
              </li>
              <li>
                <Link
                  to="/locais-de-estudo"
                  className="hover:text-[#A67B5B] text-sm transition-colors"
                >
                  Locais de Estudo
                </Link>
              </li>
              <li>
                <Link
                  to="/destaques"
                  className="hover:text-[#A67B5B] text-sm transition-colors"
                >
                  Destaques
                </Link>
              </li>
              <li>
                <Link
                  to="/referencias"
                  className="hover:text-[#A67B5B] text-sm transition-colors"
                >
                  Referências
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="hover:text-[#A67B5B] text-sm transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 font-heading text-stone-800">
              Realização
            </h3>
            <p className="text-sm font-semibold text-stone-700">
              Ricardo Matos Machado
            </p>
            <p className="text-sm mt-1">
              Dissertação de Mestrado apresentada ao Programa de Pós-Graduação
              em Desenvolvimento e Meio Ambiente (PRODEMA/UFC).
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-stone-300 text-center">
          <div className="flex justify-center items-center mb-4">
            <img
              src={logoUFC}
              alt="Logo da Universidade Federal do Ceará"
              className="h-16"
            />
          </div>
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Geoturismo Três Climas. Todos os
            direitos reservados.
          </p>
          <p className="text-stone-500 text-sm mt-2">
            Desenvolvido por{" "}
            <a
              href="https://filippemonteiro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#A67B5B] transition-colors"
            >
              Filippe Monteiro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
