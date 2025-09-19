import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageModal } from "../components/ImageModal";
import { slugify } from "../utils/slugify";

interface Image {
  readonly url: string;
  readonly caption: string;
  readonly source: string;
}

interface Point {
  readonly name: string;
  readonly description: string;
  readonly coordinates: { readonly lat: number; readonly lng: number };
  readonly images: readonly Image[];
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

const PointImageGallery = ({
  images,
  pointName,
  onImageClick,
}: {
  images: readonly Image[];
  pointName: string;
  onImageClick: (src: string) => void;
}) => {
  const imageCount = images.length;
  const gridImageClasses =
    "rounded-lg object-cover w-full h-64 shadow cursor-pointer transition-transform hover:scale-105";
  const singleImageClasses =
    "rounded-lg w-full shadow cursor-pointer transition-transform hover:scale-105";

  const renderImageWithCaption = (
    image: Image,
    index: number,
    className: string
  ) => (
    <figure key={index} className="flex flex-col h-full">
      <img
        src={image.url}
        alt={image.caption || `Imagem ${index + 1} de ${pointName}`}
        className={className}
        onClick={() => onImageClick(image.url)}
      />
      {(image.caption || image.source) && (
        <figcaption className="text-xs text-gray-600 mt-2 text-left bg-gray-50 p-2 rounded-b-lg flex-grow">
          {image.caption}
          {image.source && (
            <span className="block font-medium">Fonte: {image.source}</span>
          )}
        </figcaption>
      )}
    </figure>
  );

  if (imageCount === 0) return null;

  if (imageCount === 1) {
    return (
      <div className="mb-4 flex justify-center">
        <div className="w-full lg:w-2/3">
          {renderImageWithCaption(images[0], 0, singleImageClasses)}
        </div>
      </div>
    );
  }

  const layoutClass =
    imageCount === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`mb-4 grid ${layoutClass} gap-4`}>
      {images.map((img, index) =>
        renderImageWithCaption(img, index, gridImageClasses)
      )}
    </div>
  );
};

export function RoutePageLayout({ route }: RoutePageLayoutProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash, route]);

  if (!route) {
    return <div>Roteiro não encontrado.</div>;
  }

  return (
    <div className="bg-stone-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1
            className="route-title text-5xl font-bold font-heading"
            data-theme={route.theme}
          >
            {route.name}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            {route.description}
          </p>
        </div>

        <div className="space-y-16">
          {route.points.map((point: Point) => (
            <div
              key={point.name}
              id={slugify(point.name)}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 scroll-mt-24"
            >
              <div className="p-8">
                <h3 className="text-3xl font-semibold font-heading tracking-wide text-gray-800 mb-8 text-center border-b pb-4">
                  {point.name}
                </h3>

                <PointImageGallery
                  images={point.images}
                  pointName={point.name}
                  onImageClick={setSelectedImage}
                />

                <p className="font-sans text-gray-700 mt-6 text-left leading-relaxed">
                  {point.description}
                </p>

                <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center">
                  {point.coordinates && (
                    <a
                      href={`https://www.google.com/maps?q=${point.coordinates.lat},${point.coordinates.lng}`}
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
