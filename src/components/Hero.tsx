import heroImageUrl from "../assets/formacoes-rochosas-itapipoca.jpg";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen text-white text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase">
          GeoTurismo Três Climas
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-sans max-w-3xl">
          Explore a extraordinária geodiversidade de Itapipoca, onde o Sertão, a
          Serra e o Litoral se encontram.
        </p>
        <a
          href="#routes"
          className="mt-8 px-8 py-3 bg-white text-sertao font-bold font-heading rounded-full uppercase tracking-wider hover:bg-gray-200 transition-colors"
        >
          Conheça os Roteiros
        </a>
      </div>
    </section>
  );
}
