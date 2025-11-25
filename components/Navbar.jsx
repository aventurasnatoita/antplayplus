function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-logo">AnTPlay+</div>
      <ul className="nav-links">
        <li>Início</li>
        <li>Catálogo</li>
        <li>Minha Lista</li>
        <li>Perfil</li>
        <li>Ajuda</li>
      </ul>
      <button className="login-btn">Entrar</button>
    </nav>
  );
}
export default Navbar;
