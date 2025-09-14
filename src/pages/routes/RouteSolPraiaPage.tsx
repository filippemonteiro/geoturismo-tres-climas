import { RoutePageLayout } from "../../layouts/RoutePageLayout";
import { routesDetails } from "../../data/routes";

export function RouteSolPraiaPage() {
  const routeData = routesDetails.find(r => r.slug === 'roteiro-sol-e-praia');
  if (!routeData) return null;
  return <RoutePageLayout route={routeData} />;
}