import { PresentationPageLayout } from "../../layouts/PresentationPageLayout";
import heroImage from "../../assets/roteiros/pre-historico/pedra-da-arara-01.jpg";

export function GeotourismPage() {
  return (
    <PresentationPageLayout title="GEOTURISMO" imageUrl={heroImage}>
      <p>
        O Geoturismo consiste em uma nova tendência em termos de turismo. Essa
        atividade vem despertando interesse em vários locais do mundo por se
        configurar como uma prática alicerçada nas características geográficas
        do lugar, o qual utiliza as feições geológicas, geomorfológicas, entre
        outras, como atrativas.
      </p>
      <p>
        Seus objetivos não são meramente contemplativos (recreação e lazer), o
        geoturismo, apresenta-se também com uma finalidade didática
        (aprendizado) e, estimula uma integração entre o turismo, educação,
        ciência e ordenamento do território.
      </p>
    </PresentationPageLayout>
  );
}
