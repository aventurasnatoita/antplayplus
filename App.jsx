import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Content from "./pages/Content";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import MinhaLista from "./pages/MinhaLista";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Início />} />
          <Route path="/catalogo" element={<Catálogo />} />
          <Route path="/content/:id" element={<Conteúdo />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/minha-lista" element={<Lista />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
