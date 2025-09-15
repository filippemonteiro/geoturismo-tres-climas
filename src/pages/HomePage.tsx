import backgroundImage from "../assets/background-home.png";
import { contentData } from "../data/contentData";

export function HomePage() {
  const pageData = contentData.find((p) => p.path === "/");
  const projectPresentation = pageData?.content
    .split("\n\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-bold font-heading drop-shadow-lg">
            <span className="inline-block animate-fade-in-up text-[#F57C00]">
              Geoturismo
            </span>{" "}
            <span className="inline-block animate-fade-in-up animation-delay-150 text-[#1E88E5]">
              Três
            </span>{" "}
            <span className="inline-block animate-fade-in-up animation-delay-300 text-[#388E3C]">
              Climas
            </span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-light drop-shadow-md animate-fade-in-up animation-delay-450">
            Conhecendo a Geodiversidade de Itapipoca (Ceará, Brasil)
          </p>
        </div>
      </div>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-6">
              {pageData?.title || "Apresentação do Projeto"}
            </h2>
            <div className="prose max-w-none text-left md:text-lg text-gray-700 space-y-4">
              {projectPresentation}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
