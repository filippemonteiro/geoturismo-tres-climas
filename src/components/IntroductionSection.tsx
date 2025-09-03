import imageUrl from "../assets/itapipoca-geodiversidade.png";

export function IntroductionSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-bold font-heading text-gray-800">
            Itapipoca: A Cidade dos 3 Climas
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-sans">
            Itapipoca possui um território privilegiado que abrange três
            paisagens distintas: o{" "}
            <span className="font-bold text-sertao">Sertão</span>, a{" "}
            <span className="font-bold text-serra">Serra</span> e o{" "}
            <span className="font-bold text-litoral">Litoral</span>. Essa
            diversidade de ambientes resulta em uma geodiversidade
            extraordinária, com ecossistemas únicos e formações rochosas que
            contam a história de milhões de anos.
          </p>
          <p className="mt-4 text-lg text-gray-600 font-sans">
            Nosso projeto de geoturismo convida você a explorar esses cenários
            através de roteiros que destacam a importância da geoconservação e
            da geoeducação.
          </p>
        </div>
        <div>
          <img
            src={imageUrl}
            alt="Paisagem representando a geodiversidade de Itapipoca"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
