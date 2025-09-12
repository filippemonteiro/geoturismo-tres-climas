import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { RoutesPage } from "./pages/RoutesPage";
import { HighlightsPage } from "./pages/HighlightsPage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/locais-de-estudo" element={<MainLayout><RoutesPage /></MainLayout>} />
        <Route path="/locais-de-estudo/:slug" element={<MainLayout><RoutesPage /></MainLayout>} />
        <Route path="/destaques" element={<MainLayout><HighlightsPage /></MainLayout>} />
        <Route path="/contato" element={<MainLayout><ContactPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}