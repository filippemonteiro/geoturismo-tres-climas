function createSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const routesDetails = [
  {
    name: "Roteiro Sol e Praia",
    slug: createSlug("Roteiro Sol e Praia"),
    theme: "litoral",
    points: [
      {
        name: "1 - Praia dos Apliques",
        description:
          "Caracterizada por uma extensa faixa de areia e formações rochosas esculpidas pela ação das marés, ideais para a observação da geologia costeira.",
        coordinates: { lat: -3.3745, lng: -39.3021 },
      },
      {
        name: "2 - Barrinha do Maceió",
        description:
          "Encontro do Rio Maceió com o mar, formando uma paisagem de estuário com manguezais e uma rica biodiversidade. Excelente para ecoturismo.",
        coordinates: { lat: -3.3989, lng: -39.3496 },
      },
      {
        name: "3 - Mirante do Morro Verde",
        description:
          "Ponto elevado que oferece uma vista panorâmica da planície litorânea, permitindo a compreensão da geomorfologia da região.",
        coordinates: { lat: -3.4251, lng: -39.4215 },
      },
      {
        name: "4 - Barra do Bodé",
        description:
          "Foz do riacho Bodé, criando uma área de águas calmas e piscinas naturais na maré baixa, com um ecossistema estuarino preservado.",
        coordinates: { lat: -3.4293, lng: -39.4678 },
      },
      {
        name: "5 - Mirante do Bodé",
        description:
          "Oferece uma vista privilegiada da foz do riacho Bodé e da vastidão do oceano, sendo um excelente ponto para observação da paisagem.",
        coordinates: { lat: -3.428, lng: -39.471 },
      },
      {
        name: "6 - Praia da Baleia",
        description:
          "Famosa por suas dunas brancas e lagoas interdunares, é o principal polo turístico do litoral de Itapipoca, ideal para esportes náuticos e lazer.",
        coordinates: { lat: -3.4475, lng: -39.5283 },
      },
      {
        name: "7 - Praia das Pedrinhas",
        description:
          "Praia rústica com afloramentos rochosos que criam um cenário distinto, ideal para quem busca tranquilidade e contato direto com a natureza.",
        coordinates: { lat: -3.4589, lng: -39.5532 },
      },
      {
        name: "8 - Mirante do Mantoçoca",
        description:
          "Ponto de observação natural com vista espetacular do encontro do Rio Mundaú com o mar, na divisa com o município de Trairi.",
        coordinates: { lat: -3.4735, lng: -39.5781 },
      },
      {
        name: "9 - Lençóis Baleienses",
        description:
          "Espetacular campo de dunas móveis com lagoas interdunares de água doce que se formam após a quadra chuvosa, criando um cenário único.",
        coordinates: { lat: -3.452, lng: -39.5415 },
      },
    ],
  },
  {
    name: "Roteiro das Águas",
    slug: createSlug("Roteiro das Águas"),
    theme: "serra",
    points: [
      {
        name: "1 - Lagoa da Mangabeira",
        description:
          "Corpo d'água cercado de vegetação nativa, importante para a fauna local e um local de beleza cênica para contemplação e fotografia.",
        coordinates: { lat: -3.4965, lng: -39.5857 },
      },
      {
        name: "2 - Lagoa do Mato",
        description:
          "Lagoa sazonal que se destaca na paisagem, oferecendo um vislumbre dos ecossistemas lacustres da região e sua dinâmica hídrica.",
        coordinates: { lat: -3.4912, lng: -39.6105 },
      },
      {
        name: "3 - Lagoa do Humaitá",
        description:
          "Importante reservatório de água doce, rodeado por carnaubais, que desempenha um papel vital para as comunidades e a vida selvagem local.",
        coordinates: { lat: -3.4998, lng: -39.6373 },
      },
      {
        name: "4 - Lagoa das Mercês",
        description:
          "Espelho d'água localizado próximo à área serrana, refletindo a beleza da vegetação e proporcionando um ambiente de tranquilidade.",
        coordinates: { lat: -3.5135, lng: -39.6019 },
      },
      {
        name: "5 - Açude do Poço Verde",
        description:
          "Reservatório estratégico para o abastecimento da região, cuja barragem e espelho d'água se integram à paisagem sertaneja.",
        coordinates: { lat: -3.4079, lng: -39.7356 },
      },
      {
        name: "6 - Açude da Ipu Mazagão",
        description:
          "Açude que forma uma paisagem de grande beleza, especialmente durante o período chuvoso, atraindo aves aquáticas e visitantes.",
        coordinates: { lat: -3.5531, lng: -39.68 },
      },
      {
        name: "7 - Cachoeira de São Daniel",
        description:
          "Queda d'água localizada em ambiente serrano, que se torna um atrativo de ecoturismo durante a estação chuvosa, ideal para banhos e trilhas.",
        coordinates: { lat: -3.5801, lng: -39.6582 },
      },
      {
        name: "8 - Bica da Canoa",
        description:
          "Fonte de água natural na serra, conhecida por suas águas cristalinas e pelo ambiente sombreado e agradável, um refúgio natural.",
        coordinates: { lat: -3.6145, lng: -39.6201 },
      },
      {
        name: "9 - Açude do Quandu",
        description:
          "Grande reservatório que é um marco na paisagem local, fundamental para a agricultura e a vida das comunidades do entorno.",
        coordinates: { lat: -3.4682, lng: -39.8164 },
      },
    ],
  },
  {
    name: "Roteiro Pré-Histórico",
    slug: createSlug("Roteiro Pré-Histórico"),
    theme: "sertao",
    points: [
      {
        name: "1 - Museu Pré-Histórico de Itapipoca",
        description:
          "Instituição que abriga um acervo vital da megafauna pleistocênica e artefatos arqueológicos encontrados na região, essencial para a geoeducação.",
        coordinates: { lat: -3.495, lng: -39.58 },
      },
      {
        name: "2 - Sítio Paleoarqueológico Taboca-Lajinha",
        description:
          "Lajedo com caldeirões rochosos e registros fósseis, um geossítio que revela a interação de processos geológicos e a vida pré-histórica.",
        coordinates: { lat: -3.4633, lng: -39.6865 },
      },
      {
        name: "3 - Sítio Paleontológico do Jirau",
        description:
          "Local de grande importância científica, com registros de fósseis que ajudam a contar a história da vida e do clima na pré-história do Ceará.",
        coordinates: { lat: -3.4111, lng: -39.612 },
      },
      {
        name: "4 - Pedra da Sínia",
        description:
          "Formação rochosa com inscrições rupestres, testemunho da presença de antigos habitantes e sua relação com a paisagem.",
        coordinates: { lat: -3.3905, lng: -39.6591 },
      },
      {
        name: "5 - Sítio Paleontológico João Cativo",
        description:
          "Geossítio onde foram encontrados fósseis da megafauna, como preguiças-gigantes, evidenciando a rica biodiversidade do passado.",
        coordinates: { lat: -3.4289, lng: -39.7123 },
      },
      {
        name: "6 - Pedra Ferrada",
        description:
          "Afloramento rochoso com notáveis inscrições rupestres, que funcionava como um local de expressão e registro para povos pré-históricos.",
        coordinates: { lat: -3.3758, lng: -39.7001 },
      },
      {
        name: "7 - Sítio Paleontológico da Pedra D'água do Deserto",
        description:
          "Local de grande beleza cênica e importância científica, com fósseis e formações geológicas únicas na paisagem sertaneja.",
        coordinates: { lat: -3.3521, lng: -39.7284 },
      },
      {
        name: "8 - Pedra da Arara",
        description:
          "Inselberg com painéis de inscrições rupestres, representando um marco cultural e geológico de grande valor para o patrimônio local.",
        coordinates: { lat: -3.344, lng: -39.7599 },
      },
    ],
  },
  {
    name: "Roteiro das Pedras",
    slug: createSlug("Roteiro das Pedras"),
    theme: "sertao",
    points: [
      {
        name: "1 - Pedra do Braga",
        description:
          "Imponente inselberg granítico que se destaca na paisagem do sertão, um geossítio de grande beleza e importância para o estudo da geologia regional.",
        coordinates: { lat: -3.4518, lng: -39.7543 },
      },
      {
        name: "2 - Mirante de Santarém",
        description:
          "Ponto de observação na serra que oferece uma vista deslumbrante da transição para o sertão, ideal para contemplar o relevo.",
        coordinates: { lat: -3.5892, lng: -39.6015 },
      },
      {
        name: "3 - Pico de Assunção",
        description:
          "Um dos pontos mais altos da Serra de Uruburetama no município, proporcionando uma visão de 360 graus da paisagem e de seus contrastes.",
        coordinates: { lat: -3.6191, lng: -39.6234 },
      },
      {
        name: "4 - Pedra do Itapicu",
        description:
          "Formação rochosa notável, que serve como um marco geográfico e oferece trilhas para os entusiastas do ecoturismo e da geologia.",
        coordinates: { lat: -3.5976, lng: -39.6821 },
      },
      {
        name: "5 - Pedra do Cágado",
        description:
          "Rocha com uma forma peculiar que se assemelha ao animal, fruto de processos de erosão diferencial, aguçando a imaginação dos visitantes.",
        coordinates: { lat: -3.5204, lng: -39.7145 },
      },
      {
        name: "6 - Pedra da Itacoatiara",
        description:
          "Lajedo com diversas e significativas inscrições rupestres, sendo um dos mais importantes sítios arqueológicos da região.",
        coordinates: { lat: -3.5283, lng: -39.7402 },
      },
      {
        name: "7 - Mirante da Santa Rita",
        description:
          "Local de grande beleza cênica na serra, oferecendo vistas espetaculares e um ambiente propício para o turismo contemplativo.",
        coordinates: { lat: -3.6333, lng: -39.6385 },
      },
      {
        name: "8 - Mirante dos Picos",
        description:
          "Ponto estratégico que permite a observação de diversos picos e elevações da serra, um laboratório a céu aberto para o estudo do relevo.",
        coordinates: { lat: -3.625, lng: -39.659 },
      },
      {
        name: "9 - Mirante da Serrinha",
        description:
          "Oferece uma vista panorâmica da porção mais baixa da serra e da planície que a circunda, ideal para entender a compartimentação do relevo.",
        coordinates: { lat: -3.601, lng: -39.5888 },
      },
      {
        name: "10 - Pedra Lascada",
        description:
          "Formação rochosa que exibe fraturas e feições geológicas de grande interesse didático, contando parte da história tectônica da região.",
        coordinates: { lat: -3.482, lng: -39.851 },
      },
    ],
  },
];
