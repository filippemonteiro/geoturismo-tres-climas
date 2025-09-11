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
    description:
      "O Roteiro Sol e Praia integra a Rota Turística dos Três Climas e destaca ambientes costeiros dinâmicos, como praias arenosas, campos de dunas (fixas, móveis e paleodunas), lagoas interdunares, mirantes costeiros naturais e barras fluviais. Tais pontos sintetizam alta diversidade de geoformas e são fundamentais do ponto de vista científico, ecológico, paisagístico e sociocultural, reunindo potencial expressivo para o desenvolvimento do geoturismo local.",
    theme: "litoral",
    points: [
      {
        name: "1 - Praia dos Apliques",
        description:
          "Praia com faixa arenosa extensa, com presença de barras e beach rocks. Evidencia também práticas de pesca artesanal e turismo sazonal. No local, ocorrem desafios ambientais devido à exploração turística, ocupação e erosão.",
        coordinates: { lat: -3.3745, lng: -39.3021 },
      },
      {
        name: "2 - Barrinha do Maceió",
        description:
          "Barra arenosa com dinâmica influenciada por processos eólicos, fluviais e marinhos, que promovem seus deslocamentos sazonais. Períodos chuvosos e períodos de estiagem promovem dinâmicas diferentes na potência da descarga hídrica, o que permite a movimentação da barra em direções perpendiculares, e, por vezes, paralela à linha de costa no sentido Leste-Oeste. Esse comportamento também tem influência da direção em que os ventos alísios de leste se deslocam.",
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
          "Elevação com afloramentos típicos de eolianitos, estrutura singular formada por areias cimentadas por carbonatos ao longo das oscilações do nível do mar, apresentando camadas estratigráficas bem definidas. Proporciona vistas amplas da planície costeira e dos sistemas dunares, sendo um ótimo local para a interpretação da geodiversidade local.",
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
          "Enseada arenosa de cerca de 4 km, ladeada por extensos campos de dunas móveis e fixas, e por lagoas interdunares. O substrato sedimentar se articula com depósitos holocênicos e da Formação Barreiras, associados à presença de beach rocks. O local é tradicionalmente associado à pesca artesanal e se destaca pela atividade turística, demandando atenção com a pressão urbana e a erosão costeira.",
        coordinates: { lat: -3.4475, lng: -39.5283 },
      },
      {
        name: "7 - Praia das Pedrinhas",
        description:
          "Localizada na planície litorânea, é caracterizada pela presença de beach rocks (arenitos de praia), que são rochas oriundas das alterações de linha de costa, ou seja, resultantes dos processos de subida e descida do nível do mar. Apresenta intensa dinâmica sedimentar e importante valor ecossistêmico, sendo ambiente turístico consolidado no município. A pressão urbanística e a erosão marinha demandam atenção para que haja sua sempre conservação.",
        coordinates: { lat: -3.4589, lng: -39.5532 },
      },
      {
        name: "8 - Mirante do Maritacaca",
        description:
          "Ponto panorâmico costeiro sobre afloramento de eolianitos, relevante para a observação do acamamento das estruturas sedimentares e da dinâmica da zona costeira regional. Apresenta ampla vista para o campo de dunas e faixa litorânea. Demanda atenção, pois seu uso intenso pode acelerar muito seus processos de intemperismo e erosão.",
        coordinates: { lat: -3.4735, lng: -39.5781 },
      },
      {
        name: "9 - Lençóis Baleienses",
        description:
          "Conjunto de lagoas interdunares em meio ao campo de dunas móveis, o qual é composto por areias quartzosas, que formam, com menor expressão, um ambiente análogo aos famigerados Lençóis Maranhenses. O regime de chuva e estiagem regional proporcionam a alternância entre períodos úmidos, com a ocorrência de lagoas cheias, e secos, com lagoas intermitentes, as quais são alimentadas pelos lençóis freáticos aflorantes do aquífero Dunas. A dinâmica eólica também imprime forte influência, proporcionando o deslocamento das dunas e a formação de depressões erodidas, chamadas de planícies de deflação, onde se encaixam as lagoas. Somando a isso, a paisagem apresenta valor cênico raro, importante para a geodiversidade e para o geoturismo.",
        coordinates: { lat: -3.452, lng: -39.5415 },
      },
    ],
  },
  {
    name: "Roteiro das Águas",
    slug: createSlug("Roteiro das Águas"),
    description:
      "O Roteiro das Águas integra a Rota Turística dos Três Climas de Itapipoca, destacando ambientes lacustres, fluviais e aquíferos associados a diferentes compartimentos geomorfológicos, especialmente nas planícies litorâneas, tabuleiros costeiros e vertentes do Maciço de Uruburetama. Os geossítios selecionados apresentam significativos valores ecológicos, científicos, educativos e socioculturais, além de configurarem importantes pontos para o geoturismo e a conservação ambiental.",
    theme: "serra",
    points: [
      {
        name: "1 - Lagoa da Mangabeira",
        description:
          "Lagoa costeira situada em planície fluvial-lacustre, ladeada por dunas móveis, paleodunas vegetadas e tabuleiros costeiros. Associada ao Aquífero Dunas, funciona como indicador do lençol freático local e reservatório hídrico natural.",
        coordinates: { lat: -3.4965, lng: -39.5857 },
      },
      {
        name: "2 - Lagoa do Mato",
        description:
          "Lagoa formada em planície fluviolacustre costeira, margeada por dunas móveis e tabuleiros com vegetação típica. Representa o afloramento do Aquífero Dunas.",
        coordinates: { lat: -3.4912, lng: -39.6105 },
      },
      {
        name: "3 - Lagoa do Humaitá",
        description:
          "Localizada sobre os tabuleiros costeiros da Formação Barreiras, com depósitos sedimentares pós-Barreiras quaternários e proximidade do campo de dunas. A dinâmica hídrica resulta do contraste entre a baixa permeabilidade da Formação Barreiras e a alta permeabilidade das areias quartzosas do Aquífero Dunas.",
        coordinates: { lat: -3.4998, lng: -39.6373 },
      },
      {
        name: "4 - Lagoa das Mercês",
        description:
          "Inserida nos tabuleiros costeiros sobre a geologia do Grupo Barreiras, apresenta solos areno-argilosos e grande influência da sazonalidade climática. Sofre pressões de urbanização, mas mantém usos tradicionais como pesca, agricultura de várzea e balneário.",
        coordinates: { lat: -3.5135, lng: -39.6019 },
      },
      {
        name: "5 - Açude do Poço Verde",
        description:
          "Localizado na superfície sertaneja, foi constituído como fonte de abastecimento e irrigação, consolidando-se também como ponto turístico e cultural. Planícies alveolares como essa geram ambientes aquáticos e ecológicos distintos da paisagem semiárida circundante.",
        coordinates: { lat: -3.4079, lng: -39.7356 },
      },
      {
        name: "6 - Açude da Ipu Mazagão",
        description:
          "Situado na vertente úmida do maciço de Uruburetama, o açude é originado pelo barramento do riacho Deserto. Está associado ao abastecimento hídrico humano, mas também é utilizado como espaço de lazer e pesca.",
        coordinates: { lat: -3.5531, lng: -39.68 },
      },
      {
        name: "7 - Cachoeira de São Daniel",
        description:
          "Localizada na vertente úmida do maciço de Uruburetama, possui cerca de 5 m de altura e é controlada por lineamentos geológicos dispostos nas direções NE–SW e NW–SE. O seu entorno está cercado por uso agrícola e fragmentos de mata nativa. ",
        coordinates: { lat: -3.5801, lng: -39.6582 },
      },
      {
        name: "8 - Bica da Canoa",
        description:
          "Nascente de água perene situada na vertente subúmida do maciço de Uruburetama, condicionada por lineamentos estruturais. Relevante para a comunidade local como fonte de abastecimento hídrico e espaço de lazer.",
        coordinates: { lat: -3.6145, lng: -39.6201 },
      },
      {
        name: "9 - Açude do Quandu",
        description:
          "Localizado na vertente subúmida do maciço de Uruburetama,  configura-se como um reservatório hídrico artificial sobre planície alveolar controlada por lineamentos estruturais. Destaca-se pelo uso comunitário, tanto pela balneabilidade, como pelo o abastecimento hídrico.",
        coordinates: { lat: -3.4682, lng: -39.8164 },
      },
    ],
  },
  {
    name: "Roteiro Pré-Histórico",
    slug: createSlug("Roteiro Pré-Histórico"),
    description:
      "O Roteiro Pré-Histórico destaca sítios paleontológicos e arqueológicos profundamente associados à geomorfologia da superfície sertaneja e do Maciço de Uruburetama. São áreas de alto valor científico por registrarem a presença de megafauna extinta, tanques fossilíferos, arte rupestre e estruturas naturais ligadas à ocupação humana pré-colonial, compondo um patrimônio integrado de natureza geológica, arqueológica e cultural. A seguir, a síntese qualificada dos principais pontos.",
    theme: "sertao",
    points: [
      {
        name: "1 - Sítio Paleontológico Lajinhas",
        description:
          "Lajedo com cerca de 2 km² presente na superfície sertaneja, situado no Assentamento Rural Taboca-Lajinhas. Apresenta grande concentração de tanques fossilíferos do Quaternário, com centenas de depósitos de megafauna e registro paleoambiental detalhado. Importante para pesquisas de evolução climática e paleobiológica do Sertão Nordestino.",
        coordinates: { lat: -3.4633, lng: -39.6865 },
      },
      {
        name: "2 - Sítio Paleontológico do Jirau",
        description:
          "O local está situado sobre a superfície sertaneja a oeste da sede de Itapipoca. Reúne tanques naturais fossilíferos que afloram em lajedos graníticos devido aos processos de intemperismo e controle geológico estrutural. No sítio, já foram descobertos mais de 3.000 fósseis de megafauna pleistocênica, como mastodontes, preguiças-gigantes, tatus e tigres-dentes-de-sabre. O material encontra-se salvaguardado no Museu de Pré-história de Itapipoca (MUPHI).",
        coordinates: { lat: -3.4111, lng: -39.612 },
      },
      {
        name: "3 - Pedra da Sino",
        description:
          "Localizada às margens da Lagoa do Juá, apresenta arte rupestre e potenciais artefatos líticos submersos. Estrutura granítica de grande relevância para o patrimônio geoarqueológico local, associado à tradição oral, pesquisas arqueológicas e relatos históricos da região.",
        coordinates: { lat: -3.3905, lng: -39.6591 },
      },
      {
        name: "4 - Sítio Paleontológico João Cativo",
        description:
          "Primeiro sítio paleontológico escavado em Itapipoca, está localizado próximo à comunidade Carrapato. O sítio está situado na superfície sertaneja e é possuidor de tanques naturais fossilíferos. Conta com registros de fósseis de preguiça-gigante, mastodonte, dentre outros. Com destacável importância para a paleontologia do Quaternário nacional, serviu como base para o acervo do Museu de Pré-História de Itapipoca e do Museu Nacional no Rio de Janeiro, antes do trágico incêndio ocorrido em 2018.",
        coordinates: { lat: -3.4289, lng: -39.7123 },
      },
      {
        name: "5 - Pedra Ferrada",
        description:
          "Localizada na comunidade do Mucambo, distrito de Assunção, possui acesso por meio de trilha. Trata-se de um boulder com ocorrência de tafone na base, apresentando honeycombs e arte rupestre associada. Notável pela expressividade das formas e registros arqueológicos, seu valor cultural é reforçado pela literatura artística e arqueológica regional.",
        coordinates: { lat: -3.3758, lng: -39.7001 },
      },
      {
        name: "6 - Sítio Paleontológico Pedra D'água",
        description:
          "Inselberg granítico situado no distrito Deserto, com tanques naturais fossilíferos associados e com cerca de 50m de altura. Exibe depósitos de sedimentos areno-argilosos, registros fósseis e contextos associados à megafauna. Serve como reservatório hídrico pela comunidade local, tendo também seu valor ambiental e científico reconhecidos.",
        coordinates: { lat: -3.3521, lng: -39.7284 },
      },
      {
        name: "7 - Pedra da Arara",
        description:
          "Sítio arqueológico localizado na comunidade Arara, distrito de Assunção, que configura-se com um bloco de rocha com tafone bem desenvolvido na base. Com a presença de inscrições rupestres associadas, sobretudo da tradição geométrica, também mostra-se relevante pela ocorrência de honeycombs (alvéolos de dissolução).",
        coordinates: { lat: -3.344, lng: -39.7599 },
      },
    ],
  },
  {
    name: "Roteiro das Pedras",
    slug: createSlug("Roteiro das Pedras"),
    description:
      "O Roteiro das Pedras faz parte da Rota Turística dos Três Climas de Itapipoca e destaca, sobretudo, mirantes e blocos graníticos do Maciço de Uruburetama, sendo pontos de interesse científico, educativo, paisagístico e cultural consolidados no território. Situada na vertente subúmida do maciço de Uruburetama, configura-se com uma bolder. O local apresenta morfologias graníticas, como tafoni e honeycombs (alvéolos) na base do bolder, além de arte rupestre associada.",
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
          "Esse mirante natural está situado na comunidade de Santarém, distrito de Assunção. Com vistas para vales, açude do Quandú e encostas do maciço. O local está situado sobre um afloramento granítico da vertente subúmida do maciço de Uruburetama.",
        coordinates: { lat: -3.5892, lng: -39.6015 },
      },
      {
        name: "3 - Pico de Assunção",
        description:
          "Com acesso desde o Sítio Humaitá, no distrito de Assunção, configura-se com um Bornhardt de aproximadamente 822 metros, possuindo característica de mirante na vertente subúmida do maciço de Uruburetama. Possui microformas de relevo gratítico no topo, como canais de conexão e gnammas. Apresenta vegetação relativamente preservada em seu entorno.",
        coordinates: { lat: -3.6191, lng: -39.6234 },
      },
      {
        name: "4 - Pedra do Itapicu",
        description:
          "Situado no distrito de Arapari, configura-se como um Bornhardt granítico de aproximadamente 830 metros. Possui acesso através de trilha e escalada que desafiam os aventureiros, recebendo grupos de trilheiros frequentemente. Apresenta morfologias de relevo granítico, como gnammas e presença de caos de blocos na base.",
        coordinates: { lat: -3.5976, lng: -39.6821 },
      },
      {
        name: "5 - Pedra do Cágado",
        description:
          "Situado no distrito de Arapari, configura-se como um Bornhardt granítico imponente (aproximadamente 900 metros), com encostas convexas, topo arredondado com microformas de dissolução e fraturamento ortogonal. Possui caos de blocos na base e vegetação relativamente preservada no entorno. É um verdadeiro mirante natural da Serra de Uruburetama.",
        coordinates: { lat: -3.5204, lng: -39.7145 },
      },
      {
        name: "6 - Pedra da Itacoatiara",
        description:
          "Situado no distrito de Arapari, configura-se como um Bornhardt granítico imponente (cerca de 870 metros), com caneluras e topo com morfologias de relevo granítico, como gnammas e nubbins. Inserido na vertente subúmida do maciço de Uruburetama, possui uso comunitário em eventos religiosos, além de receber trilheiros frequentemente.",
        coordinates: { lat: -3.5283, lng: -39.7402 },
      },
      {
        name: "7 - Mirante da Santa Rita",
        description:
          "Situado no distrito de Arapari, o mirante é de fácil acesso, estando próximo à sede do município de Itapipoca. O local já foi utilizado inclusive para voos livres de parapente. Formado por afloramentos graníticos do maciço de Uruburetama, evidencia o contato entre unidades geomorfológicas (Serra de Uruburetama e superfície sertaneja adjacente).",
        coordinates: { lat: -3.6333, lng: -39.6385 },
      },
      {
        name: "8 - Mirante dos Picos",
        description:
          "Situado no distrito sede do município de Itapipoca (com aproximadamente 500 metros), tem acesso através de uma trilha íngreme. Está disposto sobre granitóides do maciço de Uruburetama, com vistas para a sede do município de Itapipoca e para a superfície sertaneja que bordeja o maciço. No horizonte é possível ver a Serra da Meruoca.",
        coordinates: { lat: -3.625, lng: -39.659 },
      },
      {
        name: "9 - Mirante da Serrinha",
        description:
          "Ponto panorâmico localizado na porção norte do maciço de Uruburetama. Proporciona amplas vistas da sede do município de Itapipoca, assim como para inselbergs e para a superfície sertaneja bordejante. Está situado sobre granitóides do maciço de Uruburetama e em seu horizonte é possível ver a Serra da Meruoca.",
        coordinates: { lat: -3.601, lng: -39.5888 },
      },
      {
        name: "10 - Pedra Lascada",
        description:
          "Situada no distrito sede, é considerada o marco originário do nome do município de Itapipoca. Esse bolder tem seu acesso relativamente fácil desde a sede e está composta por granitóides do Complexo Tamboril-Santa Quitéria. Apresenta feições de esfoliação esferoidal e honeycombs na sua porção reversa.",
        coordinates: { lat: -3.482, lng: -39.851 },
      },
    ],
  },
];
