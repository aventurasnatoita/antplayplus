export const setPerfilAtivo = perfil => localStorage.setItem("perfilAtivo", JSON.stringify(perfil));
export const getPerfilAtivo = () => JSON.parse(localStorage.getItem("perfilAtivo"));
export const getMinhaLista = () => JSON.parse(localStorage.getItem("minhaLista") || "{}");
export const setMinhaLista = lista => localStorage.setItem("minhaLista", JSON.stringify(lista));
