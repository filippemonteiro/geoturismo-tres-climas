import { RoutePageLayout } from "../../layouts/RoutePageLayout";
import { routesDetails } from "../../data/routes";

export function RoutePreHistoricoPage() {
  const routeData = routesDetails.find(r => r.slug === 'roteiro-pre-historico');
  if (!routeData) return null;
  return <RoutePageLayout route={routeData} />;
}