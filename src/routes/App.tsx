import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-white">
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
