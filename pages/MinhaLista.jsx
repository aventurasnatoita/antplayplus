import { getPerfilAtivo, getMinhaLista, setMinhaLista } from "../helpers/storage";
import { contents } from "../data/contents";
import { useNavigate } from "react-router-dom";

function MinhaLista() {
  const perfil = getPerfilAtivo();
  const minhaLista = getMinhaLista();
  const navigate = useNavigate();
  if (!perfil) return <div>Seleciona um perfil antes de acederes à lista!</div>;

  const ids = minhaLista[perfil.name] || [];
  const listaConteudos = contents.filter(c=>ids.includes(c.id));

  function remover(id) {
    const novaLista = {...minhaLista};
    novaLista[perfil.name] = novaLista[perfil.name].filter(cid=>cid !== id);
    setMinhaLista(novaLista);
    window.location.reload();
  }

  return (
    <div className="minha-lista">
      <h2>Lista de {perfil.name}</h2>
      {listaConteudos.length === 0 && <p>A lista está vazia.</p>}
      <div className="catalog-grid">
        {listaConteudos.map(content =>
          <div className="catalog-card" key={content.id}>
            <img src={content.poster} alt={content.title}/>
            <h4>{content.title}</h4>
            <button onClick={()=>navigate(`/content/${content.id}`)}>Ver detalhes</button>
            <button onClick={()=>remover(content.id)}>Remover</button>
          </div>
        )}
      </div>
    </div>
  )
}
export default MinhaLista;
