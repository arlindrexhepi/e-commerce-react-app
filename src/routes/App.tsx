import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "../store/cartContext/CartProvider";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="bg-white">
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/:id" element={<ProductPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
