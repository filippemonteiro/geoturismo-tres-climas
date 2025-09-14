import { RoutePageLayout } from "../../layouts/RoutePageLayout";
import { routesDetails } from "../../data/routes";

export function RouteAguasPage() {
  const routeData = routesDetails.find(r => r.slug === 'roteiro-das-aguas');
  if (!routeData) return null;
  return <RoutePageLayout route={routeData} />;
}