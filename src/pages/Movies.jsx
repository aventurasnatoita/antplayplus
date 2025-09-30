import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieBox from "../components/MovieBox";

const dummyMovies = [
  { id: 1, title: "Ozi: A Voz da Floresta", poster: "/assets/poster1.jpg", info: "2025 | 120min | Aventura" },
  { id: 2, title: "Caminhos Cruzados", poster: "/assets/poster2.jpg", info: "2024 | 104min | Drama" },
  { id: 3, title: "Luzes na Escuridão", poster: "/assets/poster3.jpg", info: "2025 | 98min | Suspense" }
];

export default function Movies() {
  return (
    <div style={{ minHeight: "100vh", background: "#181818", color: "white", position: "relative" }}>
      <Navbar />
      <div className="container" style={{ padding: "3rem 0" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>AnTPlay+</h2>
        <p style={{ marginBottom: "2rem" }}>X disponíveis. X brevemente.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {dummyMovies.map(movie => <MovieBox key={movie.id} {...movie} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
