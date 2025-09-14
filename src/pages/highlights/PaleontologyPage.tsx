import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/pre-historico/sitio-paleontologico-lajinhas-04.jpg";
import { contentData } from "../../data/contentData";

export function PaleontologyPage() {
  const pageData = contentData.find(
    (p) => p.path === "/highlights/paleontology"
  );
  if (!pageData) return <div>Conteúdo não encontrado.</div>;
  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
    </PresentationPageLayout>
  );
}
