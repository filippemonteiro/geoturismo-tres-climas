import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-aguas/lagoa-do-mato.jpg";

export function BiodiversityPage() {
  return (
    <PresentationPageLayout title="Biodiversidade" imageUrl={heroImage}>
      <p>
        A diversidade de ambientes (praia, serra e sertão) resulta em uma rica
        biodiversidade. Serão destacados aqui os principais ecossistemas e
        espécies da fauna e flora local, relacionando-os com a geodiversidade da
        Rota dos Três Climas.
      </p>
    </PresentationPageLayout>
  );
}
