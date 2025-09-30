import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{
      width: "100%", padding: "1rem 2rem",
      background: "rgba(0,0,0,0.7)", position: "relative",
      zIndex: 10
    }}>
      <Link to="/" style={{ color: "white", fontWeight: "bold", fontSize: "1.25rem", textDecoration: "none" }}>
        AnTPlay+
      </Link>
    </nav>
  );
}
