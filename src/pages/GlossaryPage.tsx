import { useState } from "react";
import { glossaryTerms } from "../data/glossary";
import { AnimatedSection } from "../components/AnimatedSection";

export function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedTerms = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  const filteredTerms = sortedTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <header className="text-center mb-12">
          <AnimatedSection>
            <h1 className="text-5xl font-bold font-heading text-gray-800">
              Glossário Geológico
            </h1>
            <p className="mt-4 text-xl text-gray-600 font-sans max-w-3xl mx-auto">
              Desvende os termos técnicos e aprofunde seu conhecimento sobre a
              geodiversidade da nossa região.
            </p>
          </AnimatedSection>
        </header>

        <div className="mb-12 sticky top-24 z-30 bg-white/80 backdrop-blur-md rounded-lg shadow-sm p-4">
          <input
            type="text"
            placeholder="Pesquisar termo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-litoral font-sans text-lg"
          />
        </div>

        <div className="space-y-8">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item) => (
              <AnimatedSection key={item.term}>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-serra">
                  <h3 className="text-2xl font-bold font-heading text-gray-800">
                    {item.term}
                  </h3>
                  <p className="font-sans text-gray-700 mt-2 text-lg leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </AnimatedSection>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="font-sans text-xl text-gray-500">
                Nenhum termo encontrado para a sua busca.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
