import hypsometryMap from "../assets/highlights/mapa-hipsometrico-de-itapipoca-ce.png";
import topoProfile from "../assets/highlights/perfil-topografico-e-vegetacional-de-itapipoca.jpg";

export const contentData = [
  {
    path: "/",
    title: "Apresentação do Projeto",
    content:
      "Este website foi criado com o intuito de apresentar os roteiros geoturísticos estabelecidos a partir da Rota Turística dos Três Climas de Itapipoca (Ceará), a qual é decorrente da lei orgânica 062/2023. Com ênfase nas formas de relevo e como produto da Tese de Doutorado de Ricardo Matos Machado, desenvolvida no âmbito do Programa de Pós-Graduação em Geografia da Universidade Federal do Ceará (UFC).\n\nO objetivo é proporcionar aos geoturistas, à comunidade científica e à população local um material digital interativo e de fácil acesso sobre as potencialidades geomorfológicas e geoturísticas do território itapipoquense, o qual é contemplado com paisagens litorâneas, serranas e sertanejas.",
  },
  {
    path: "/contact",
    title: "Fale Conosco",
    content:
      "Para dúvidas, sugestões, ou para reportar um erro, por favor, entre em contato através do e-mail abaixo.\nr.matosmachado@gmail.com",
  },
  {
    path: "/presentation/geotourism",
    title: "Geoturismo",
    content:
      "O Geoturismo consiste em uma nova tendência em termos de turismo...",
  },
  {
    path: "/presentation/geodiversity",
    title: "O que é Geodiversidade",
    content:
      "A Geodiversidade engloba o conjunto de todos os elementos da natureza abiótica...",
  },
  {
    path: "/presentation/geomorphological-heritage",
    title: "Patrimônio Geomorfológico",
    content:
      "Patrimônio Geomorfológico pode ser entendido como um conjunto de formas de relevo...",
  },
  {
    path: "/presentation/three-climates",
    title: "Terra dos Três Climas",
    content:
      "O município de Itapipoca, conhecido como a 'terra dos três climas'...",
  },
  {
    path: "/highlights/geology",
    title: "Geologia e Geomorfologia",
    content:
      "Nesta seção, será apresentado o contexto geológico e geomorfológico de Itapipoca...",
  },
  {
    path: "/highlights/paleontology",
    title: "Paleontologia",
    content:
      "Itapipoca é um dos mais importantes depósitos fossilíferos do Ceará...",
  },
  {
    path: "/highlights/biodiversity",
    title: "Biodiversidade",
    content:
      "A diversidade de ambientes (praia, serra e sertão) resulta em uma rica biodiversidade. Serão destacados aqui os principais ecossistemas e espécies da fauna e flora local, relacionando-os com a geodiversidade da Rota dos Três Climas.",
    contentImages: [
      {
        url: topoProfile,
        caption:
          "Perfil Esquemático da Cobertura Vegetal Original das Unidades Fitoecológicas de Itapipoca.",
        source: "Ricardo Matos Machado",
      },
    ],
  },
  {
    path: "/highlights/hypsometry",
    title: "Hipsometria (Altitude)",
    content:
      "A hipsometria, ou o estudo das altitudes, é fundamental para compreender a configuração do relevo de Itapipoca. A variação altimétrica é o fator que define os 'três climas', indo do nível do mar na planície litorânea até as altitudes mais elevadas do Maciço de Uruburetama. Nesta seção, analisamos como a altitude influencia diretamente o clima, a biodiversidade e as atividades humanas em cada um dos roteiros geoturísticos.",
    contentImages: [
      {
        url: hypsometryMap,
        caption: "Mapa Hipsométrico do Município de Itapipoca (CE).",
        source:
          "Elaboração: Jailson Pereira de Sousa (2023) | Organização: Ricardo Matos Machado",
      },
    ],
  },
] as const;
