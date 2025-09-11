import { useParams } from "react-router-dom";
import { Tabs } from "../components/Tabs";
import { routesDetails } from "../data/routes";

export function RoutesPage() {
  const { slug } = useParams();

  const activeRouteIndex = routesDetails.findIndex(
    (route) => route.slug === slug
  );
  const initialTabIndex = activeRouteIndex !== -1 ? activeRouteIndex : 0;

  const tabs = routesDetails.map((route) => ({
    label: route.name,
    theme: route.theme as "litoral" | "serra" | "sertao",
    content: (
      <div className="space-y-12">
        <div className="prose max-w-none text-center">
          <p className="text-xl text-gray-600">{route.description}</p>
        </div>
        {route.points.map((point) => (
          <div
            key={point.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4">
                {point.name}
              </h3>

              {/* Lógica de Renderização Condicional para Imagens */}
              {point.images && point.images.length > 0 && (
                <div className="mb-4">
                  {point.images.length === 1 ? (
                    // CASO 1: APENAS UMA IMAGEM
                    <img
                      src={point.images[0]}
                      alt={`Imagem de ${point.name}`}
                      className="rounded-lg object-cover w-full h-96 shadow"
                    />
                  ) : (
                    // CASO 2: MÚLTIPLAS IMAGENS (GALERIA)
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {point.images.map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`Imagem ${index + 1} de ${point.name}`}
                          className="rounded-lg object-cover w-full h-64 shadow"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <p className="font-sans text-gray-700 mt-2 leading-relaxed">
                {point.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between">
                {point.reference && (
                  <p className="text-sm text-gray-500 italic mb-2 md:mb-0">
                    Referência: {point.reference}
                  </p>
                )}
                {point.coordinates && (
                  <a
                    href={`http://googleusercontent.com/maps/search/?api=1&query=${point.coordinates.lat},${point.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-bold text-sm py-2 px-4 rounded-full transition-transform hover:scale-105"
                  >
                    Ver no Mapa
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-24 pt-32">
        <h1 className="text-5xl font-bold font-heading text-center text-gray-800 mb-16">
          Locais de Estudo
        </h1>
        <Tabs tabs={tabs} initialTabIndex={initialTabIndex} />
      </div>
    </div>
  );
}