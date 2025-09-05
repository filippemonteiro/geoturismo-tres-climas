import { routesDetails } from "../data/routes";
import { AnimatedSection } from "../components/AnimatedSection";

export function GeossitiosPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <header className="text-center mb-16">
          <AnimatedSection>
            <h1 className="text-5xl font-bold font-heading text-gray-800">
              Catálogo de Geossítios
            </h1>
            <p className="mt-4 text-xl text-gray-600 font-sans max-w-3xl mx-auto">
              Explore o inventário do patrimônio geológico de Itapipoca. Cada local conta uma parte da história do nosso planeta.
            </p>
          </AnimatedSection>
        </header>

        <div className="space-y-16">
          {routesDetails.map((route) => (
            <AnimatedSection key={route.slug}>
              <section>
                <h2 className="text-3xl font-bold font-heading text-gray-800 border-b-2 pb-4 mb-8">
                  {route.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {route.points.map((point) => (
                    <div key={point.name} className="bg-gray-50 p-6 rounded-lg shadow-md h-full border-l-4 border-litoral hover:shadow-xl hover:border-sertao transition-all">
                      <h3 className="text-xl font-bold font-heading text-gray-800">
                        {point.name}
                      </h3>
                      <p className="font-sans text-gray-600 mt-2">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}