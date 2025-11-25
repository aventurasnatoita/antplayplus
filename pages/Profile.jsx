import { useState } from "react";

const initialProfiles = [
  { name: "Adulto", avatar: "https://randomuser.me/api/portraits/men/32.jpg", type: "adulto" },
  { name: "Criança", avatar: "https://randomuser.me/api/portraits/lego/2.jpg", type: "crianca" },
];

function Profile() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("adulto");

  function addProfile() {
    if (!newName) return;
    setProfiles([...profiles, {
      name: newName,
      avatar: newType === "adulto" ?
        "https://randomuser.me/api/portraits/men/34.jpg" :
        "https://randomuser.me/api/portraits/lego/1.jpg",
      type: newType
    }]);
    setNewName("");
    setNewType("adulto");
  }

  return (
    <div className="profile-page">
      <h2>Seleção de perfil</h2>
      <div className="profiles-list">
        {profiles.map((profile, idx) => (
          <div className="profile-card" key={idx}>
            <img src={profile.avatar} alt={profile.name} />
            <span>{profile.name}</span>
            <small>{profile.type === "crianca" ? "Infantil" : "Adulto"}</small>
          </div>
        ))}
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
