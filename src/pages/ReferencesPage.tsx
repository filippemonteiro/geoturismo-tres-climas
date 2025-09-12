export function ReferencesPage() {
  const mainCitation = `Machado, R. M. (2024). Título da Dissertação. Dissertação de Mestrado, Universidade Federal do Ceará, Fortaleza.`;

  const bibtexCitation = `@mastersthesis{machado2024geoturismo,
    author = {Machado, Ricardo Matos},
    title = {Geoturismo em Itapipoca, Ceará: Potencialidades da Rota dos Três Climas},
    school = {Universidade Federal do Ceará},
    year = {2024},
    address = {Fortaleza},
  }`;

  const handleDownload = (content: string, fileName: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-24 pt-32">
        <h1 className="text-5xl font-bold font-heading text-center text-gray-800 mb-16">
          Referências
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow border">
          <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
            Citação Principal da Dissertação
          </h2>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="font-mono text-gray-700">{mainCitation}</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => handleDownload(bibtexCitation, "machado_2024.bib", "application/x-bibtex")}
              className="bg-stone-600 text-white font-bold py-2 px-4 rounded-full hover:bg-stone-700 transition-colors"
            >
              Exportar BibTeX
            </button>
          </div>

          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold font-heading text-gray-800 mb-4">
              Referências Bibliográficas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). (2017).
                Manual Técnico de Geomorfologia. Rio de Janeiro: IBGE.
              </li>
              <li>
                SILVA, A. B. (2020). Geodiversidade do estado do Ceará. Fortaleza:
                Editora UFC.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}