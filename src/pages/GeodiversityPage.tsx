import { PresentationPageLayout } from "../layouts/PresentationPageLayout";
import heroImage from "../assets/img-GeodiversityPage.jpg";

export function GeodiversityPage() {
  return (
    <PresentationPageLayout
      title="O QUE É GEODIVERSIDADE?"
      imageUrl={heroImage}
    >
      <p className="text-sm text-gray-500">
        LIGeom CÂNION CURRAL DE PEDRA - CRATEÚS, ESTADO DO CEARÁ/BRASIL
        <br />
        FOTO: HELENA VANESSA
      </p>
      <p>
        A Geodiversidade engloba o conjunto de todos os elementos da natureza abiótica. Integra: rochas, minerais, fósseis, formas de relevo, água, solos, além dos processos que lhes originaram e lhes modelam de forma dinâmica.
      </p>
      <p>
        Além de constituir-se em uma ferramenta educacional e científica, a geodiversidade apresenta valor cultural, econômico, cênico, presta-se como atrativo para o (geo)turismo, recreação, esportes de aventura, etc.
      </p>
    </PresentationPageLayout>
  );
}