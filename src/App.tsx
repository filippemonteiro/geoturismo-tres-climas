import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { RoutesPage } from "./pages/RoutesPage";
import { ScrollToTop } from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roteiros" element={<RoutesPage />} />
          <Route path="/roteiros/:slug" element={<RoutesPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;