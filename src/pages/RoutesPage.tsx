import { Tabs } from "../components/Tabs";
import { routesDetails } from "../data/routes";

export function RoutesPage() {
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
        <p className="mt-4 text-xl text-gray-600 font-sans text-center max-w-3xl mx-auto">
          Explore em detalhes cada um dos percursos que revelam a geodiversidade
          de Itapipoca.
        </p>

        <div className="mt-16">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
