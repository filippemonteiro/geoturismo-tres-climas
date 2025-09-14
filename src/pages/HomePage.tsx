import backgroundImage from "../assets/background-home.png";

export function HomePage() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-bold font-heading drop-shadow-lg">
            <span className="text-[#F57C00]">Geoturismo</span>{" "}
            <span className="text-[#1E88E5]">Três</span>{" "}
            <span className="text-[#388E3C]">Climas</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-light drop-shadow-md">
            Conhecendo a Geodiversidade de Itapipoca, Ceará
          </p>
        </div>
      </div>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-6">
              Apresentação do Projeto
            </h2>
            <div className="prose max-w-none text-left md:text-lg text-gray-700 space-y-4">
              <p>
                Este website foi criado com base nos roteiros turísticos estabelecidos a partir da Rota Turística dos Três Climas de Itapipoca (Ceará), a qual foi oficializada através da lei orgânica 062/2023. 
              </p>
              <p>
                Com ênfase nas formas de relevo e como produto da Tese de Doutorado de Ricardo Matos Machado, desenvolvida no âmbito do Programa de Pós-Graduação em Geografia da Universidade Federal do Ceará (UFC), o objetivo desta página é proporcionar aos entusiastas do relevo um material digital interativo e de fácil acesso sobre as potencialidades geomorfológicas do território itapipoquense, o qual é contemplado com lindas paisagens litorâneas, serranas e sertanejas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
