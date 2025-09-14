import { RoutePageLayout } from "../../layouts/RoutePageLayout";
import { routesDetails } from "../../data/routes";

export function RoutePedrasPage() {
  const routeData = routesDetails.find(r => r.slug === 'roteiro-das-pedras');
  if (!routeData) return null;
  return <RoutePageLayout route={routeData} />;
}