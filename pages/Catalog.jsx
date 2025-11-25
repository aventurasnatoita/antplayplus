import { useState } from "react";
import { contents } from "../data/contents";
import { useNavigate } from "react-router-dom";

// Obter géneros e tipos únicos
const genres = Array.from(new Set(contents.map(c => c.genre)));
const types = Array.from(new Set(contents.map(c => c.type)));

function Catalog() {
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  // Filtro
  const filtered = contents.filter(item =>
    (genre ? item.genre === genre : true) &&
    (type ? item.type === type : true) &&
    (year ? String(item.year) === year : true)
  );

  return (
    <div className="catalog">
      <h2>Catálogo</h2>
      <div className="filters">
        <select value={genre} onChange={e => setGenre(e.target.value)}>
          <option value="">Todos os géneros</option>
          {genres.map(g => <option value={g} key={g}>{g}</option>)}
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">Filmes e séries</option>
          {types.map(t => <option value={t} key={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
        </select>
        <input
          type="number"
          min="2000"
          max="2100"
          placeholder="Ano"
          value={year}
          onChange={e => setYear(e.target.value)}
          style={{ width: "90px" }}
        />
      </div>
      <div className="catalog-grid">
        {filtered.map(content => (
          <div className="catalog-card" key={content.id} onClick={() => navigate(`/content/${content.id}`)}>
            <img src={content.poster} alt={content.title} />
            <h4>{content.title}</h4>
            <p>{content.year} • {content.genre}</p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p>Nenhum conteúdo encontrado.</p>}
    </div>
  );
}
export default Catalog;
