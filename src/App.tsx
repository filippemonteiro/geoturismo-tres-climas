import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";

import { RouteSolPraiaPage } from "./pages/routes/RouteSolPraiaPage";
import { RouteAguasPage } from "./pages/routes/RouteAguasPage";
import { RoutePreHistoricoPage } from "./pages/routes/RoutePreHistoricoPage";
import { RoutePedrasPage } from "./pages/routes/RoutePedrasPage";

import { GeologyPage } from "./pages/highlights/GeologyPage";
import { PaleontologyPage } from "./pages/highlights/PaleontologyPage";
import { BiodiversityPage } from "./pages/highlights/BiodiversityPage";

import { HypsometryPage } from "./pages/highlights/HypsometryPage";
import { ThreeClimatesPage } from "./pages/presentation/ThreeClimatesPage";
import { GeotourismPage } from "./pages/presentation/GeotourismPage";
import { GeodiversityPage } from "./pages/presentation/GeodiversityPage";
import { GeomorphologicalHeritagePage } from "./pages/presentation/GeomorphologicalHeritagePage";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/presentation/geotourism"
          element={
            <MainLayout>
              <GeotourismPage />
            </MainLayout>
          }
        />
        <Route
          path="/presentation/geodiversity"
          element={
            <MainLayout>
              <GeodiversityPage />
            </MainLayout>
          }
        />
        <Route
          path="/presentation/geomorphological-heritage"
          element={
            <MainLayout>
              <GeomorphologicalHeritagePage />
            </MainLayout>
          }
        />
        <Route
          path="/presentation/three-climates"
          element={
            <MainLayout>
              <ThreeClimatesPage />
            </MainLayout>
          }
        />

        <Route
          path="/routes/sol-e-praia"
          element={
            <MainLayout>
              <RouteSolPraiaPage />
            </MainLayout>
          }
        />
        <Route
          path="/routes/das-aguas"
          element={
            <MainLayout>
              <RouteAguasPage />
            </MainLayout>
          }
        />
        <Route
          path="/routes/pre-historico"
          element={
            <MainLayout>
              <RoutePreHistoricoPage />
            </MainLayout>
          }
        />
        <Route
          path="/routes/das-pedras"
          element={
            <MainLayout>
              <RoutePedrasPage />
            </MainLayout>
          }
        />

        <Route
          path="/highlights/geology"
          element={
            <MainLayout>
              <GeologyPage />
            </MainLayout>
          }
        />
        <Route
          path="/highlights/paleontology"
          element={
            <MainLayout>
              <PaleontologyPage />
            </MainLayout>
          }
        />
        <Route
          path="/highlights/biodiversity"
          element={
            <MainLayout>
              <BiodiversityPage />
            </MainLayout>
          }
        />
        <Route
          path="/highlights/hypsometry"
          element={
            <MainLayout>
              <HypsometryPage />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
