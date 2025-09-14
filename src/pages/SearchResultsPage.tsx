import { useSearchParams, Link } from "react-router-dom";
import { performSearch, type SearchResult } from "../services/searchService";
import { slugify } from "../utils/slugify";

const ResultCard = ({ result }: { result: SearchResult }) => {
  if (result.type === "page") {
    return (
      <Link
        to={result.path}
        className="block hover:bg-stone-50 transition-colors"
      >
        <div className="bg-white p-6 rounded-lg shadow border">
          <p className="text-sm text-gray-500 mb-1">Página</p>
          <h2 className="text-2xl font-bold font-heading text-stone-800">
            {result.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            {result.content.substring(0, 250)}...
          </p>
        </div>
      </Link>
    );
  }

  if (result.type === "point") {
    const pointSlug = slugify(result.point.name);
    const linkTo = `/routes/${result.routeSlug}#${pointSlug}`;

    return (
      <Link to={linkTo} className="block hover:bg-stone-50 transition-colors">
        <div className="bg-white p-6 rounded-lg shadow border">
          <p className="text-sm text-gray-500 mb-1">Ponto de Interesse em:</p>
          <h2 className="text-2xl font-bold font-heading text-gray-800">
            {result.point.name}
          </h2>
          <p className="text-sm text-gray-500 mb-2">{result.routeName}</p>
          <p className="text-gray-700 leading-relaxed">
            {result.point.description.substring(0, 250)}...
          </p>
        </div>
      </Link>
    );
  }

  return null;
};

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = performSearch(query);

  return (
    <div className="bg-stone-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-heading text-gray-800 mb-2">
          Resultados da Busca
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Você buscou por:{" "}
          <span className="font-semibold text-stone-800">"{query}"</span>
        </p>

        {query.trim().length < 2 ? (
          <p className="text-center text-gray-500 text-xl py-12">
            Digite ao menos 2 caracteres para buscar.
          </p>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            <p className="text-md text-gray-500">
              {results.length} resultado(s) encontrado(s).
            </p>
            {results.map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl py-12">
            Nenhum resultado encontrado para sua busca.
          </p>
        )}
      </div>
    </div>
  );
}
