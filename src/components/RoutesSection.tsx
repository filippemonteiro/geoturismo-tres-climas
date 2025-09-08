import { Link } from "react-router-dom";
import { RouteCard } from "./RouteCard";
import { routesDetails } from "../data/routes";

export function RoutesSection() {
  return (
    <section id="routes" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold font-heading text-gray-800">
          Explore Nossos Roteiros
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routesDetails.map((route) => (
            <Link to={`/roteiros/${route.slug}`} key={route.slug}>
              <RouteCard
                title={route.name}
                description="Clique para ver os detalhes do roteiro."
                theme={route.theme as "litoral" | "serra" | "sertao"}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
