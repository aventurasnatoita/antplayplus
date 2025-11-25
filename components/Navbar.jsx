import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-logo">AnTPlay+</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/ajuda">Ajuda</Link></li>
        <li><Link to="/minha-lista">Lista</Link></li>
      </ul>
      <Link to="/perfil"><button className="login-btn">Iniciar sessão</button></Link>
    </nav>
  );
}
export default Navbar;
