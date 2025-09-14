import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-aguas/lagoa-da-mangabeira.jpg";
import { contentData } from "../../data/contentData";

export function BiodiversityPage() {
  const pageData = contentData.find(
    (p) => p.path === "/highlights/biodiversity"
  );
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
