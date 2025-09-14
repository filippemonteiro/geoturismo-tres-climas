import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/background-home.png"; 

export function ThreeClimatesPage() {
  return (
    <PresentationPageLayout
      title="Terra dos Três Climas"
      imageUrl={heroImage}
    >
      <p>
        O município de Itapipoca, conhecido como a "terra dos três climas", possui uma notável diversidade de paisagens. Esta seção explora as características únicas que definem os ambientes de praia, serra e sertão, e como essa variedade geomorfológica influencia a cultura e a vida na região.
      </p>
      <p>
        Desde as dunas e falésias do litoral até os maciços residuais da serra e a depressão sertaneja, cada "clima" apresenta um conjunto distinto de feições geológicas e ecossistemas.
      </p>
    </PresentationPageLayout>
  );
}