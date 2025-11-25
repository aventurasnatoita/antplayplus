import BannerCarousel from "../components/BannerCarousel";
import ContentRow from "../components/ContentRow";

// Exemplos de conteúdos fake
const novidades = [
  { id: 1, title: "O Mistério Lunar", poster: "https://via.placeholder.com/150x220?text=Mistério", year: 2024 },
  { id: 2, title: "Fuga Impossível", poster: "https://via.placeholder.com/150x220?text=Fuga", year: 2025 },
];

const originals = [
  { id: 3, title: "Aventura AnT", poster: "https://via.placeholder.com/150x220?text=AnT+Original", year: 2025 },
  { id: 4, title: "CodeHunter", poster: "https://via.placeholder.com/150x220?text=CodeHunter", year: 2025 },
];

const maisVistos = [
  { id: 5, title: "Super Kids", poster: "https://via.placeholder.com/150x220?text=Kids", year: 2025 },
  { id: 6, title: "Drama Tech", poster: "https://via.placeholder.com/150x220?text=Drama", year: 2022 },
];

function Home() {
  return (
    <div className="home">
      <BannerCarousel />
      <section>
        <ContentRow title="Novidades" contents={novidades} />
        <ContentRow title="Originais AnTPlay+" contents={originals} />
        <ContentRow title="Mais Vistos" contents={maisVistos} />
      </section>
      <section className="profile-section">
        <h2>Perfis</h2>
        <div className="profiles">
          <div className="profile-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adulto" />
            <span>Adulto</span>
          </div>
          <div className="profile-card">
            <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Criança" />
            <span>Criança</span>
          </div>
        </div>
        <button className="profile-btn">Iniciar sessão / Criar conta</button>
      </section>
    </div>
  );
}
export default Home;
