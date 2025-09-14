import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-aguas/lagoa-do-mato.jpg";
import { contentData } from "../../data/contentData";

export function GeodiversityPage() {
  const pageData = contentData.find(
    (p) => p.path === "/presentation/geodiversity"
  );
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
