import backgroundImage from "../assets/background-home.jpg";

export function HomePage() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-bold font-heading drop-shadow-lg">
            GeoTurismo Três Climas
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-light drop-shadow-md">
            Explorando a Geodiversidade de Itapipoca, Ceará
          </p>
        </div>
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-heading text-gray-800 mb-6">
            Apresentação do Projeto
          </h2>
          <div className="prose max-w-none text-left md:text-lg text-gray-700 space-y-4">
            <p>
              Este website foi criado com a iniciativa primordial de apresentar
              os roteiros geoturísticos da Rota dos Três Climas de Itapipoca-CE,
              produto da dissertação de mestrado de Ricardo Matos Machado,
              desenvolvida no âmbito do Programa de Pós-Graduação em
              Desenvolvimento e Meio Ambiente (PRODEMA/UFC).
            </p>
            <p>
              Nosso objetivo é proporcionar aos geoturistas, à comunidade
              científica e à população local um material digital, interativo e
              de fácil acesso sobre as espetacularidades geomorfológicas e o
              potencial para o geoturismo na região, que abrange paisagens de
              litoral, serra e sertão.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
