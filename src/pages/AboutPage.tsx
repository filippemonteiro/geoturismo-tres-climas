export function AboutPage() {
  const teamMembers = [
    {
      name: "Nome do Coordenador(a)",
      role: "Coordenador(a) do Projeto",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Nome do Membro 2",
      role: "Pesquisador(a) / Geólogo(a)",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Nome do Membro 3",
      role: "Desenvolvedor(a) Web",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading text-gray-800">
            Sobre o Projeto GeoTurismo Três Climas
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-sans max-w-3xl mx-auto">
            Conheça nossa missão, nossos objetivos e a equipe que trabalha para
            revelar as maravilhas geológicas de Itapipoca.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-heading text-serra mb-4">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-700 font-sans">
              Promover o geoturismo em Itapipoca como uma ferramenta de{" "}
              <strong className="text-serra">
                desenvolvimento sustentável
              </strong>
              , valorizando a geodiversidade local e incentivando a{" "}
              <strong className="text-serra">geoconservação</strong> através da
              educação e do envolvimento da comunidade.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-heading text-sertao mb-4">
              Nossos Objetivos
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 font-sans">
              <li>
                Mapear e catalogar os geossítios de relevância no município.
              </li>
              <li>Criar roteiros geoturísticos acessíveis e informativos.</li>
              <li>
                Fomentar a <strong className="text-sertao">geoeducação</strong>{" "}
                em escolas e na comunidade.
              </li>
              <li>Estimular a economia local através do turismo consciente.</li>
              <li>
                Contribuir para a preservação do patrimônio geológico e
                cultural.
              </li>
            </ul>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <img
                  src={member.imageUrl}
                  alt={`Foto de ${member.name}`}
                  className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
                />
                <h3 className="text-2xl font-bold font-heading text-litoral">
                  {member.name}
                </h3>
                <p className="font-sans text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
