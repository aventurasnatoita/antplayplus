import { getPerfilAtivo, getMinhaLista, setMinhaLista } from "../helpers/storage";
// ...
const perfil = getPerfilAtivo();
const minhaLista = getMinhaLista();
const listaDoPerfil = perfil ? (minhaLista[perfil.name] || []) : [];
const jaAdicionado = listaDoPerfil.includes(item.id);

function adicionarRemoverLista() {
  if (!perfil) {
    alert("Selecione um perfil antes!");
    return;
  }
  const novaLista = {...minhaLista};
  if (!novaLista[perfil.name]) novaLista[perfil.name] = [];
  if (jaAdicionado) {
    novaLista[perfil.name] = novaLista[perfil.name].filter(id => id !== item.id);
  } else {
    novaLista[perfil.name].push(item.id);
  }
  setMinhaLista(novaLista);
  window.location.reload(); // Força refresh simples!
}
// ...

<div className="content-actions">
  <button>Play</button>
  <button onClick={adicionarRemoverLista}>
    {jaAdicionado ? "Remover da lista" : "Adicionar à lista"}
  </button>
  <button onClick={()=>alert("Função de trailer não implementada!")}>Trailer</button>
  <button>Mais informações</button>
  <button onClick={()=>alert("Download simulado! (visual)")} style={{background:"#ffaf2d"}}>Download</button>
</div>
