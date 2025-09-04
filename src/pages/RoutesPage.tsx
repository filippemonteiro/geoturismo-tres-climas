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
        <ul className="space-y-4">
          {route.points.map((point) => (
            <li key={point.name} className="border-b pb-4">
              <h3 className="text-xl font-bold font-heading text-gray-700">
                {point.name}
              </h3>
              <p className="font-sans text-gray-600">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <h1 className="text-5xl font-bold font-heading text-center text-gray-800">
          Roteiros Geoturísticos
        </h1>
        <div className="mt-16">
          <Tabs tabs={tabs} initialTabIndex={initialTabIndex} />
        </div>
      </div>
    </div>
  );
}
