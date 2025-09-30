import { useState } from "react";
export default function MoreInfo({ description }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        background: "none",
        border: "none",
        color: "#E50914",
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "1rem"
      }}>
        {open ? "Esconder informações" : "Mais informações"}
      </button>
      {open && <div style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>{description}</div>}
    </div>
  );
}
