import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/pedra-lascada-01.jpg";

export function GeologyPage() {
  return (
    <PresentationPageLayout
      title="Geologia e Geomorfologia"
      imageUrl={heroImage}
    >
      <p>
        Nesta seção, será apresentado o contexto geológico e geomorfológico de
        Itapipoca. Serão abordadas as principais formações rochosas, como os
        inselbergs graníticos do Maciço de Uruburetama e os sedimentos da
        Formação Barreiras, explicando como esses elementos esculpiram a
        paisagem dos Três Climas.
      </p>
    </PresentationPageLayout>
  );
}
