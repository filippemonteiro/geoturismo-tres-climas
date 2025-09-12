import { useParams } from "react-router-dom";
import { useState } from "react";
import { Tabs } from "../components/Tabs";
import { routesDetails } from "../data/routes";
import { ImageModal } from "../components/ImageModal";

export function RoutesPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeRouteIndex = routesDetails.findIndex(
    (route) => route.slug === slug
  );
  const initialTabIndex = activeRouteIndex !== -1 ? activeRouteIndex : 0;

  const buttonThemeClasses = {
    litoral: "bg-[#1E88E5] hover:bg-[#1565C0]",
    serra: "bg-[#388E3C] hover:bg-[#2E7D32]",
    sertao: "bg-[#F57C00] hover:bg-[#E65100]",
  };

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

              {point.images && point.images.length > 0 && (
                <div className="mb-4">
                  {point.images.length === 1 ? (
                    <img
                      src={point.images[0]}
                      alt={`Imagem de ${point.name}`}
                      className="rounded-lg object-cover w-full h-96 shadow cursor-pointer transition-transform hover:scale-105"
                      onClick={() => setSelectedImage(point.images[0])}
                    />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {point.images.map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`Imagem ${index + 1} de ${point.name}`}
                          className="rounded-lg object-cover w-full h-64 shadow cursor-pointer transition-transform hover:scale-105"
                          onClick={() => setSelectedImage(imgSrc)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <p className="font-sans text-gray-700 mt-2 leading-relaxed">
                {point.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-end">
                {point.coordinates && (
                  <a
                    href={`http://googleusercontent.com/maps/search/?api=1&query=${point.coordinates.lat},${point.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-white font-bold text-sm py-2 px-4 rounded-full transition-transform hover:scale-105 ${
                      buttonThemeClasses[
                        route.theme as "litoral" | "serra" | "sertao"
                      ]
                    }`}
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
    <div className="bg-stone-50">
      <div className="container mx-auto px-4 py-24 pt-32">
        <h1 className="text-5xl font-bold font-heading text-center text-gray-800 mb-16">
          Locais de Estudo
        </h1>
        <Tabs tabs={tabs} initialTabIndex={initialTabIndex} />
      </div>
      <ImageModal
        src={selectedImage}
        alt="Imagem expandida"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
