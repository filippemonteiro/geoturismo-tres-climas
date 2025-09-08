import { Link } from "react-router-dom";
import imageUrl from "../assets/itapipoca-geodiversidade.jpg";

export function IntroductionSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-bold font-heading text-gray-800">
            Itapipoca: Um Território Singular
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-sans">
            Explore um município privilegiado que une três paisagens extraordinárias: o <span className="font-bold text-sertao">Sertão</span> dos monólitos, a <span className="font-bold text-serra">Serra</span> de clima ameno e o <span className="font-bold text-litoral">Litoral</span> de dunas e praias.
          </p>
          <Link
            to="/itapipoca"
            className="mt-6 inline-block bg-serra text-white font-bold font-heading py-3 px-8 rounded-full uppercase tracking-wider hover:bg-green-700 transition-colors"
          >
            Descubra os 3 Climas
          </Link>
        </div>
        <div>
          <img
            src={imageUrl}
            alt="Mosaico com imagens representando a geodiversidade de Itapipoca"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}