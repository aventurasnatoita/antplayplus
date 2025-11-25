import { useParams, useNavigate } from "react-router-dom";
import { contents } from "../data/contents";

function Content() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = contents.find(c => c.id === id);

  if (!item) return <div>Conteúdo não encontrado.</div>;

  const recommended = contents.filter(c => item.recommendations?.includes(c.id));

  return (
    <div className="content-individual">
      <img src={item.banner} alt={item.title} className="content-banner" />
      <h2>{item.title}</h2>
      <p>{item.synopsis}</p>
      <p><strong>Tipo:</strong> {item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
      <p><strong>Género:</strong> {item.genre}</p>
      <p><strong>Duração:</strong> {item.duration}</p>
      <p><strong>Elenco:</strong> {item.cast.join(", ")}</p>

      {item.episodes && (
        <div>
          <h3>Temporadas/Episódios</h3>
          <ul>
            {item.episodes.map((e, i) => (
              <li key={i}>Temporada {e.season}: {e.name} ({e.duration})</li>
            ))}
          </ul>
        </div>
      )}

      <div className="content-actions">
        <button>Play</button>
        <button>Adicionar à lista</button>
        <button>Trailer</button>
        <button>Mais informações</button>
      </div>

      <div className="recommendations">
        <h4>Recomendações</h4>
        <div className="recommendations-row">
          {recommended.map(rec => (
            <div className="catalog-card" key={rec.id} onClick={() => navigate(`/content/${rec.id}`)}>
              <img src={rec.poster} alt={rec.title} />
              <h5>{rec.title}</h5>
            </div>
          ))}
        </div>
        {recommended.length === 0 && <p>Sem recomendações para este título.</p>}
      </div>
      <button style={{marginTop:"2rem"}} onClick={()=>navigate(-1)}>Voltar</button>
    </div>
  );
}
export default Content;
