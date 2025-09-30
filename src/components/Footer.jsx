export default function Footer() {
  return (
    <footer style={{
      position: "absolute",
      bottom: 16,
      right: 32,
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: "white"
    }}>
      <span>© 2025 AventurasnaToita</span>
      <a href="mailto:contacto@aventurasnatoita.pt" style={{ textDecoration: "underline", color: "white" }}>
        contacto@aventurasnatoita.pt
      </a>
    </footer>
  );
}
