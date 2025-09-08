import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { RoutesPage } from "./pages/RoutesPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ItapipocaPage } from "./pages/ItapipocaPage";
import { GlossaryPage } from "./pages/GlossaryPage";
import { GeossitiosPage } from "./pages/GeossitiosPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roteiros" element={<RoutesPage />} />
          <Route path="/roteiros/:slug" element={<RoutesPage />} />
          <Route path="/geossitios" element={<GeossitiosPage />} />
          <Route path="/glossario" element={<GlossaryPage />} />
          <Route path="/itapipoca" element={<ItapipocaPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
