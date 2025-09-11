export function HighlightsPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32">
      <h1 className="text-5xl font-bold font-heading text-center text-gray-800 mb-16">
        Destaques e Curiosidades
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">
        <section id="geologia">
          <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
            Geologia e Geomorfologia
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed">
            Nesta seção, será apresentado o contexto geológico e geomorfológico
            de Itapipoca. Serão abordadas as principais formações rochosas, como
            os inselbergs graníticos do Maciço de Uruburetama e os sedimentos da
            Formação Barreiras, explicando como esses elementos esculpiram a
            paisagem dos Três Climas.
          </p>
        </section>

        <section id="paleontologia">
          <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
            Paleontologia
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed">
            Itapipoca é um dos mais importantes depósitos fossilíferos do Ceará.
            Esta seção detalhará a megafauna pleistocênica encontrada na região,
            como preguiças-gigantes e mastodontes, explicando a importância dos
            tanques fossilíferos para a pesquisa paleontológica no Nordeste do
            Brasil.
          </p>
        </section>

        <section id="biodiversidade">
          <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
            Biodiversidade
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed">
            A diversidade de ambientes (praia, serra e sertão) resulta em uma
            rica biodiversidade. Serão destacados aqui os principais ecossistemas
            e espécies da fauna e flora local, relacionando-os com a
            geodiversidade da Rota dos Três Climas.
          </p>
        </section>
      </div>
    </div>
  );
}