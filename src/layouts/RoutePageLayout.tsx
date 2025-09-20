import { useState, useEffect, useRef } from "react";
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
  readonly description: readonly string[];
  readonly coordinates: { readonly lat: number; readonly lng: number };
  readonly images: readonly Image[];
}

interface RoutePageLayoutProps {
  readonly route: {
    readonly name: string;
    readonly description: readonly string[];
    readonly descriptionImage?: {
      readonly url: string;
      readonly caption: string;
    };
    readonly theme: "litoral" | "serra" | "sertao";
    readonly points: readonly Point[];
  };
}

const themeClasses = {
  litoral: "bg-litoral text-white",
  serra: "bg-serra text-white",
  sertao: "bg-sertao text-white",
};

const themeButtonClasses = {
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
  const [selectedPointIndex, setSelectedPointIndex] = useState(0);
  const location = useLocation();
  const selectedButtonRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount =
        direction === "left"
          ? -container.clientWidth * 0.8
          : container.clientWidth * 0.8;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const pointIndex = route.points.findIndex(
        (p) => slugify(p.name) === hash
      );
      if (pointIndex !== -1) {
        setSelectedPointIndex(pointIndex);
      }
    } else {
      setSelectedPointIndex(0);
    }
  }, [location.hash, route.points]);

  useEffect(() => {
    if (selectedButtonRef.current) {
      selectedButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedPointIndex]);

  const selectedPoint = route.points[selectedPointIndex];

  return (
    <div className="bg-stone-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 border-b pb-12">
          <h1
            className="route-title text-5xl font-bold font-heading"
            data-theme={route.theme}
          >
            {route.name}
          </h1>
          <div className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto space-y-4">
            {route.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {route.descriptionImage && (
            <figure className="mt-8 max-w-4xl mx-auto">
              <img
                src={route.descriptionImage.url}
                alt={route.descriptionImage.caption}
                className="rounded-lg shadow-md mx-auto"
              />
              <figcaption className="mt-2 text-sm text-gray-600">
                {route.descriptionImage.caption}
              </figcaption>
            </figure>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">
            Navegue pelos Pontos de Interesse:
          </h2>
          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-2 p-4 scrollbar-hide"
            >
              {route.points.map((point, index) => (
                <button
                  key={point.name}
                  ref={selectedPointIndex === index ? selectedButtonRef : null}
                  onClick={() => setSelectedPointIndex(index)}
                  className={`py-2 px-4 rounded-full transition-colors whitespace-nowrap border-2 border-transparent ${
                    selectedPointIndex === index
                      ? `${themeClasses[route.theme]} font-bold`
                      : "bg-white hover:bg-stone-100 text-gray-700"
                  }`}
                >
                  {point.name}
                </button>
              ))}
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
              <button
                onClick={() => handleScroll("left")}
                className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <main>
          {selectedPoint && (
            <div
              id={slugify(selectedPoint.name)}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 scroll-mt-24"
            >
              <div className="p-8">
                <h3 className="text-3xl font-semibold font-heading tracking-wide text-gray-800 mb-8 text-center border-b pb-4">
                  {selectedPoint.name}
                </h3>
                <PointImageGallery
                  images={selectedPoint.images}
                  pointName={selectedPoint.name}
                  onImageClick={setSelectedImage}
                />
                <div className="font-sans text-gray-700 mt-6 text-left leading-relaxed space-y-4">
                  {selectedPoint.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center">
                  {selectedPoint.coordinates && (
                    <a
                      href={`http://googleusercontent.com/maps?q=${selectedPoint.coordinates.lat},${selectedPoint.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block text-white font-bold text-sm py-2 px-4 rounded-full transition-transform hover:scale-105 ${
                        themeButtonClasses[route.theme]
                      }`}
                    >
                      Ver no Mapa
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <ImageModal
        src={selectedImage}
        alt="Imagem expandida"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
