import { useState } from "react";
import { ImageModal } from "../components/ImageModal";

// Apenas as interfaces abaixo foram alteradas para incluir "readonly"
interface Point {
  readonly name: string;
  readonly description: string;
  readonly coordinates: { readonly lat: number; readonly lng: number };
  readonly images: readonly string[];
}

interface RoutePageLayoutProps {
  readonly route: {
    readonly name: string;
    readonly description: string;
    readonly theme: "litoral" | "serra" | "sertao";
    readonly points: readonly Point[];
  };
}

const themeClasses = {
  litoral: "bg-[#1E88E5] hover:bg-[#1565C0]",
  serra: "bg-[#388E3C] hover:bg-[#2E7D32]",
  sertao: "bg-[#F57C00] hover:bg-[#E65100]",
};

export function RoutePageLayout({ route }: RoutePageLayoutProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!route) {
    return <div>Roteiro não encontrado.</div>;
  }

  return (
    <div className="bg-stone-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading text-gray-800">
            {route.name}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            {route.description}
          </p>
        </div>

        <div className="space-y-12">
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
                  <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        themeClasses[route.theme]
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
      </div>
      <ImageModal
        src={selectedImage}
        alt="Imagem expandida"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
