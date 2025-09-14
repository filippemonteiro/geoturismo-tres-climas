import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/pre-historico/pedra-da-arara-01.jpg";
import { contentData } from "../../data/contentData";

export function GeotourismPage() {
  const pageData = contentData.find(
    (p) => p.path === "/presentation/geotourism"
  );
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
