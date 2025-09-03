import { RouteCard } from "./RouteCard";

const routesData = [
  {
    title: "Roteiro Sol & Praia",
    description: "Descubra as praias, dunas e a geologia costeira de Itapipoca.",
    colorTheme: "desert",
  },
  {
    title: "Roteiro das Águas",
    description: "Explore os rios, açudes e a importância hídrica da região.",
    colorTheme: "mountain",
  },
  {
    title: "Roteiro Pré-Histórico",
    description: "Viaje no tempo com os registros rupestres e fósseis milenares.",
    colorTheme: "desert",
  },
  {
    title: "Roteiro das Pedras",
    description: "Conheça os impressionantes monólitos e formações rochosas.",
    colorTheme: "mountain",
  },
];

export function RoutesSection() {
  return (
    <section id="routes" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold font-heading text-gray-800">
          Explore Nossos Roteiros
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Cada roteiro é uma imersão na geodiversidade única da Cidade dos Três Climas, revelando paisagens e histórias fascinantes.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routesData.map((route) => (
            <RouteCard
              key={route.title}
              title={route.title}
              description={route.description}
              colorTheme={route.colorTheme as 'mountain' | 'desert'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}