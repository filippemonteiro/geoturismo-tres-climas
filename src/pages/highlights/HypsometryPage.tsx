import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/das-pedras/mirante-dos-picos-03.jpg";

export function HypsometryPage() {
  return (
    <PresentationPageLayout title="Hipsometria (Altitude)" imageUrl={heroImage}>
      <p>
        A hipsometria, ou o estudo das altitudes, é fundamental para compreender
        a configuração do relevo de Itapipoca. A variação altimétrica é o fator
        que define os "três climas", indo do nível do mar na planície litorânea
        até as altitudes mais elevadas do Maciço de Uruburetama.
      </p>
      <p>
        Nesta seção, analisamos como a altitude influencia diretamente o clima,
        a biodiversidade e as atividades humanas em cada um dos roteiros
        geoturísticos, apresentando dados e mapas que ilustram essa fascinante
        dinâmica vertical.
      </p>
    </PresentationPageLayout>
  );
}
