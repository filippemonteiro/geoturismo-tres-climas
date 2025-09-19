import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/mirante-dos-picos-02.jpg";
import { contentData } from "../../data/contentData";

export function HypsometryPage() {
  const pageData = contentData.find(p => p.path === "/highlights/hypsometry");

  if (!pageData) return <div>Conteúdo não encontrado.</div>;

  return (
    <PresentationPageLayout title={pageData.title} imageUrl={heroImage}>
      <p>{pageData.content}</p>
      
      {pageData.contentImages && pageData.contentImages.length > 0 && (
        <div className="mt-12 space-y-8">
          {pageData.contentImages.map((image, index) => (
            <figure key={index}>
              <img src={image.url} alt={image.caption} className="rounded-lg shadow-md mx-auto" />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {image.caption}
                {image.source && <span className="block font-medium">Fonte: {image.source}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </PresentationPageLayout>
  );
}