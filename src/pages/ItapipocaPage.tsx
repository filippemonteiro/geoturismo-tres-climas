import { AnimatedSection } from "../components/AnimatedSection";
import LitoralImage from "../assets/lencois-baleienses-itapipoca.jpg";
import SerraImage from "../assets/macico-de-uruburetama.jpg";
import SertaoImage from "../assets/sitio-lajinhas-itapipoca.jpg";

export function ItapipocaPage() {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-24 pt-32">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading">
            Itapipoca: Geodiversidade em Três Climas
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-sans max-w-3xl mx-auto">
            Um município de território singular no Ceará, onde a dinâmica
            geológica esculpiu três paisagens distintas e ricas em belezas
            naturais: Litoral, Serra e Sertão.
          </p>
        </header>

        <div className="space-y-20">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <figure>
                <img
                  src={LitoralImage}
                  alt="Campo de dunas e lagoas interdunares dos Lençóis Baleienses em Itapipoca"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <figcaption className="text-center mt-2 text-sm text-gray-500 font-sans">
                  Lençóis Baleienses, Litoral de Itapipoca
                </figcaption>
              </figure>
              <div className="text-left">
                <h2 className="text-4xl font-bold font-heading text-litoral mb-4">
                  O Litoral: Campos de Dunas e Lagoas
                </h2>
                <p className="text-lg text-gray-700 font-sans leading-relaxed">
                  Os Lençóis Baleienses são um espetacular campo de dunas
                  móveis, formadas por sedimentos eólicos da idade holocênica.
                  Após a quadra chuvosa, entre fevereiro e maio, o nível
                  freático se eleva e forma um conjunto de lagoas interdunares
                  de água doce, criando um cenário de beleza cênica única,
                  similar aos Lençóis Maranhenses. Com dunas que frequentemente
                  ultrapassam 20 metros de altura, o local é ideal para o
                  turismo, a geração de renda para a comunidade da Praia da
                  Baleia e a prática de esportes como kitesurf e stand up
                  paddle.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left md:order-2">
                <h2 className="text-4xl font-bold font-heading text-serra mb-4">
                  A Serra: Maciços Residuais e Clima
                </h2>
                <p className="text-lg text-gray-700 font-sans leading-relaxed">
                  A Serra de Itapipoca integra o maciço residual de Uruburetama,
                  uma formação rochosa do Complexo granítico-migmatítico
                  neoproterozoico que resistiu a milênios de erosão. Sua porção
                  norte-oriental, a vertente úmida, recebe o aporte
                  pluvio-nebular do oceano, gerando chuvas orográficas que
                  contrastam com a aridez da depressão sertaneja. Com altitudes
                  que variam de 100 a 500 metros e relevo ondulado a montanhoso,
                  a serra permite ao visitante compreender na prática os eventos
                  climáticos e as respostas ambientais que a orografia propicia.
                </p>
              </div>
              <figure className="md:order-1">
                <img
                  src={SerraImage}
                  alt="Vista panorâmica da vertente úmida do maciço residual de Uruburetama"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <figcaption className="text-center mt-2 text-sm text-gray-500 font-sans">
                  Vertente úmida do Maciço de Uruburetama
                </figcaption>
              </figure>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <figure>
                <img
                  src={SertaoImage}
                  alt="Formações rochosas do Sítio Paleontológico Lajinhas, no sertão de Itapipoca"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <figcaption className="text-center mt-2 text-sm text-gray-500 font-sans">
                  Sítio Paleontológico Lajinhas, Sertão de Itapipoca
                </figcaption>
              </figure>
              <div className="text-left">
                <h2 className="text-4xl font-bold font-heading text-sertao mb-4">
                  O Sertão: Monólitos e Paleoarqueologia
                </h2>
                <p className="text-lg text-gray-700 font-sans leading-relaxed">
                  O sertão de Itapipoca é um verdadeiro museu a céu aberto. A
                  paisagem é dominada por monólitos (inselbergs) e lajedos que
                  expõem rochas do embasamento cristalino. Locais como o Sítio
                  Paleontológico Lajinhas e a Pedra de Itacoatiara são
                  geossítios de imensa relevância, guardando fósseis da
                  megafauna pleistocênica e inscrições rupestres. Estes pontos
                  não apenas revelam a profunda história geológica do Ceará, mas
                  também oferecem um vislumbre da vida pré-histórica na região,
                  sendo fundamentais para a pesquisa e o Geoturismo.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
