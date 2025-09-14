import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/mirante-de-santarem.jpg";

export function GeomorphologicalHeritagePage() {
  return (
    <PresentationPageLayout
      title="PATRIMÔNIO GEOMORFOLÓGICO"
      imageUrl={heroImage}
    >
      <p>
        Patrimônio Geomorfológico pode ser entendido como um conjunto de formas
        de relevo, que pela sua raridade e/ou originalidade, merecem ser
        preservadas.
      </p>
    </PresentationPageLayout>
  );
}
