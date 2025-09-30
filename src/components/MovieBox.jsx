import { Link } from "react-router-dom";
export default function MovieBox({ id, poster, title, info }) {
  return (
    <Link to={`/video/${id}`} style={{
      borderRadius: "12px",
      overflow: "hidden",
      background: "#222",
      boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      transition: "transform 0.2s",
      textDecoration: "none",
      color: "white"
    }}>
      <img src={poster} alt={title} style={{ width: "100%", height: "220px", objectFit: "cover" }}/>
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "0.9rem" }}>{info}</p>
      </div>
    </Link>
  );
}
