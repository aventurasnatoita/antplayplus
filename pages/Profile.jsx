import { setPerfilAtivo, getPerfilAtivo } from "../helpers/storage";

const initialProfiles = [
  { name: "Adulto", avatar: "https://randomuser.me/api/portraits/men/32.jpg", type: "adulto" },
  { name: "Criança", avatar: "https://randomuser.me/api/portraits/lego/2.jpg", type: "crianca" },
];

function selecionarPerfil(profile) {
  setPerfilAtivo(profile);
  alert(`Perfil "${profile.name}" selecionado!`);
}
return (
  <div className="profiles-list">
    {profiles.map((profile, idx) => (
      <div className="profile-card" key={idx} onClick={()=>selecionarPerfil(profile)}>
        <img src={profile.avatar} alt={profile.name} />
        <span>{profile.name}</span>
        <small>{profile.type === "crianca" ? "Infantil" : "Adulto"}</small>
      </div>
    ))}
  </div>
)
      </div>
      <div className="profile-create">
        <input
          type="text"
          placeholder="Nome do perfil"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <select value={newType} onChange={e => setNewType(e.target.value)}>
          <option value="adulto">Adulto</option>
          <option value="crianca">Criança</option>
        </select>
        <button onClick={addProfile}>Criar perfil</button>
      </div>
    </div>
  );
}
export default Profile;
