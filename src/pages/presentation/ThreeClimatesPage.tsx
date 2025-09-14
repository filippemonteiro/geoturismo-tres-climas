import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/background-home.png";
import { contentData } from "../../data/contentData";

export function ThreeClimatesPage() {
  const pageData = contentData.find(
    (p) => p.path === "/presentation/three-climates"
  );
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
