import { PresentationPageLayout } from "../layouts/PresentationPageLayout";
import heroImage from "../assets/img-GeomorphologicalHeritagePage.jpg";

export function GeomorphologicalHeritagePage() {
  return (
    <PresentationPageLayout
      title="PATRIMÔNIO GEOMORFOLÓGICO"
      imageUrl={heroImage}
    >
      <p className="text-sm text-gray-500">
        LIGeom CACHOEIRA DA LEMBRADA - BURITI DOS MONTES, ESTADO DO PIAUÍ/BRASIL
        <br />
        FOTO: HELENA VANESSA
      </p>
      <p>
        Patrimônio Geomorfológico pode ser entendido como um conjunto de formas
        de relevo, que pela sua raridade e/ou originalidade, merecem ser
        preservadas.
      </p>
    </PresentationPageLayout>
  );
}
