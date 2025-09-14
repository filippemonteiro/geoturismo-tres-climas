import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/mirante-dos-picos-03.jpg";
import { contentData } from "../../data/contentData";

export function HypsometryPage() {
  const pageData = contentData.find((p) => p.path === "/highlights/hypsometry");
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
