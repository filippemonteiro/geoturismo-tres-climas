import heroImage from "../assets/itapipoca-geodiversidade.jpg";

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold font-heading text-center text-gray-800 mb-8">
        Geodiversidade e Potencial Geoturístico de Itapipoca-CE
      </h1>
      <div className="flex justify-center mb-8">
        <img
          src={heroImage}
          alt="Paisagem representativa da geodiversidade de Itapipoca"
          className="rounded-lg shadow-lg max-w-4xl w-full"
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-sans text-gray-700 leading-relaxed">
          Este website foi criado com a iniciativa primordial de apresentar os
          roteiros geoturísticos da Rota dos Três Climas de Itapipoca-CE,
          produto da dissertação de mestrado de Ricardo Matos Machado,
          desenvolvida no âmbito do Programa de Pós-Graduação em
          Desenvolvimento e Meio Ambiente (PRODEMA/UFC).
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          Nosso objetivo é proporcionar aos geoturistas, à comunidade
          científica e à população local um material digital, interativo e de
          fácil acesso sobre as espetacularidades geomorfológicas e o potencial
          para o geoturismo na região, que abrange paisagens de litoral, serra e
          sertão.
        </p>
      </div>
    </div>
  );
}