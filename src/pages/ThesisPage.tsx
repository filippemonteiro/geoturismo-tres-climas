export function ThesisPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <h1 className="text-5xl font-bold font-heading text-center text-gray-800 mb-16">
          A Dissertação
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
              Resumo
            </h2>
            <p className="font-sans text-gray-700 leading-relaxed">
              Aqui você irá inserir o resumo da dissertação. Este texto deve
              apresentar de forma concisa os objetivos, a metodologia e os
              principais resultados do trabalho de pesquisa.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
              Abstract
            </h2>
            <p className="font-sans text-gray-700 leading-relaxed">
              This section will contain the abstract of the dissertation in
              English, providing an international audience with a summary of the
              research.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
              Metodologia
            </h2>
            <p className="font-sans text-gray-700 leading-relaxed">
              Descrição detalhada dos métodos utilizados na pesquisa, incluindo
              a coleta de dados, as ferramentas de análise e as etapas do
              desenvolvimento do website como produto geoturístico.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold font-heading text-gray-800 mb-4">
              Visualizar a Tese Completa
            </h2>
            <div className="border rounded-lg overflow-hidden">
              <iframe
                src="/caminho/para/seu/arquivo.pdf"
                width="100%"
                height="800px"
                title="Visualizador de PDF da Tese"
              ></iframe>
            </div>
            <a
              href="/caminho/para/seu/arquivo.pdf"
              download
              className="mt-4 inline-block bg-blue-600 text-white font-bold text-sm py-3 px-6 rounded-full transition-transform hover:scale-105"
            >
              Baixar PDF
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}