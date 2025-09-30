import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieBox from "../components/MovieBox";

const dummySeries = [
  { id: 10, title: "Ruído", poster: "/assets/poster4.jpg", info: "1 Temporada | 2025 | Comédia" }
];

export default function Series() {
  return (
    <div style={{ minHeight: "100vh", background: "#181818", color: "white", position: "relative" }}>
      <Navbar />
      <div className="container" style={{ padding: "3rem 0" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Séries by AnTPlay+</h2>
        <p style={{ marginBottom: "2rem" }}>Séries icónicas portuguesas.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {dummySeries.map(series => <MovieBox key={series.id} {...series} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
