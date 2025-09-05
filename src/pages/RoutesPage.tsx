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
    content: (
      <div>
        <ul className="space-y-6">
          {route.points.map((point) => (
            <li key={point.name} className="border-b pb-6">
              <h3 className="text-xl font-bold font-heading text-gray-800">
                {point.name}
              </h3>
              <p className="font-sans text-gray-700 mt-2 leading-relaxed">
                {point.description}
              </p>
              {point.coordinates && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${point.coordinates.lat},${point.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-litoral text-white font-bold text-sm py-2 px-4 rounded-full transition-transform hover:scale-105"
                >
                  Ver no Mapa
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <h1 className="text-5xl font-bold font-heading text-center text-gray-800 mb-16">
          Roteiros Geoturísticos
        </h1>
        <Tabs tabs={tabs} initialTabIndex={initialTabIndex} />
      </div>
    </div>
  );
}
