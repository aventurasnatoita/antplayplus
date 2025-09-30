import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieBox from "../components/MovieBox";

const dummyCartaz = [
  { id: 20, title: "Zoopocalipse: Uma Aventura Animal", poster: "/assets/poster7.jpg", info: "2025 | Animação" }
];

export default function Cartaz() {
  return (
    <div style={{ minHeight: "100vh", background: "#181818", color: "white", position: "relative" }}>
      <Navbar />
      <div className="container" style={{ padding: "3rem 0" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Cartaz</h2>
        <p style={{ marginBottom: "2rem" }}>Halloween: 1 filme aconchegante para esta época de medo.</p>
        <p style={{ marginBottom: "2rem" }}>Estreia a 1 de outubro.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {dummyCartaz.map(cartaz => <MovieBox key={cartaz.id} {...cartaz} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
