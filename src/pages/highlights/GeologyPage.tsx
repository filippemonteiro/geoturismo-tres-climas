import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/pedra-lascada-01.jpg";
import { contentData } from "../../data/contentData";

export function GeologyPage() {
  const pageData = contentData.find((p) => p.path === "/highlights/geology");
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
