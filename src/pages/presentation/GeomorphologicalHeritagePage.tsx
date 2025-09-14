import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/mirante-de-santarem.jpg";
import { contentData } from "../../data/contentData";

export function GeomorphologicalHeritagePage() {
  const pageData = contentData.find(
    (p) => p.path === "/presentation/geomorphological-heritage"
  );
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
