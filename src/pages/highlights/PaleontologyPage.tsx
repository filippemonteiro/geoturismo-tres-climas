import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/pre-historico/sitio-paleontologico-do-jirau-01.jpg";

export function PaleontologyPage() {
  return (
    <PresentationPageLayout
      title="Paleontologia"
      imageUrl={heroImage}
    >
      <p>
        Itapipoca é um dos mais importantes depósitos fossilíferos do Ceará. Esta seção detalhará a megafauna pleistocênica encontrada na região, como preguiças-gigantes e mastodontes, explicando a importância dos tanques fossilíferos para a pesquisa paleontológica no Nordeste do Brasil.
      </p>
    </PresentationPageLayout>
  );
}