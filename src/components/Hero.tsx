// src/components/Hero.tsx

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-litoral text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase">
        GeoTurismo Três Climas
      </h1>
      <p className="mt-4 text-lg md:text-2xl font-sans max-w-3xl">
        Explore a extraordinária geodiversidade de Itapipoca, onde o Sertão, a Serra e o Litoral se encontram.
      </p>
      <a
        href="#routes"
        className="mt-8 px-8 py-3 bg-white text-litoral font-bold font-heading rounded-full uppercase tracking-wider hover:bg-gray-200 transition-colors"
      >
        Conheça os Roteiros
      </a>
    </section>
  );
}