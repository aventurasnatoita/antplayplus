import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <video
        style={{
          position: "absolute", left: 0, top: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: 1
        }}
        autoPlay loop muted
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: "absolute", left: 0, top: 0, width: "100vw", height: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        zIndex: 2, color: "white", textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Bem-vindo ao Universo AnTPlay+</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "520px" }}>
          O teu cinema em casa.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link to="/movies" className="btn-primary">AnTPlay+</Link>
          <Link to="/series" className="btn-primary">Séries by AnTPlay+</Link>
          <Link to="/cartaz" className="btn-primary">Cartaz</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
