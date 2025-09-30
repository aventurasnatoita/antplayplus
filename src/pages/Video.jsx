import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MoreInfo from "../components/MoreInfo";
import VideoPlayer from "../components/VideoPlayer";

// Dummy data finder (merge all arrays from other pages)
const allVideos = [
  {
    id: 1,
    title: "O Mistério das Estrelas",
    poster: "/assets/poster1.jpg",
    info: "2025 | 120min | Aventura",
    description: "Um grupo embarca em uma jornada épica para desvendar os mistérios do universo.",
    src: "/assets/trailer.mp4",
    subtitles: [
      { src: "/assets/subs-pt.vtt", label: "pt", default: true },
      { src: "/assets/subs-en.vtt", label: "en" }
    ],
    audios: []
  },
  {
    id: 10,
    title: "Aventuras no Espaço",
    poster: "/assets/poster4.jpg",
    info: "Temporada 1 | 2025 | Sci-Fi",
    description: "Uma equipe explora planetas desconhecidos em busca de vida.",
    src: "/assets/trailer.mp4",
    subtitles: [
      { src: "/assets/subs-pt.vtt", label: "pt", default: true },
      { src: "/assets/subs-en.vtt", label: "en" }
    ],
    audios: []
  },
  {
    id: 20,
    title: "Especial Verão",
    poster: "/assets/poster7.jpg",
    info: "2025 | Temporada Especial",
    description: "Coleção de episódios especiais para o verão.",
    src: "/assets/trailer.mp4",
    subtitles: [
      { src: "/assets/subs-pt.vtt", label: "pt", default: true },
      { src: "/assets/subs-en.vtt", label: "en" }
    ],
    audios: []
  }
  // Add more as needed
];

export default function Video() {
  const { id } = useParams();
  const video = allVideos.find(v => String(v.id) === String(id));
  if (!video) return <div style={{ color: "white", padding: "2rem" }}>Vídeo não encontrado</div>;

  return (
    <div style={{ background: "#181818", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", padding: "3rem 4vw 1.5rem" }}>
        <img src={video.poster} alt={video.title} style={{
          width: "280px", height: "420px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.5)"
        }}/>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{video.title}</h1>
          <p style={{ marginBottom: "1rem" }}>{video.info}</p>
          <MoreInfo description={video.description} />
        </div>
      </div>
      <div className="container" style={{ paddingBottom: "3rem" }}>
        <VideoPlayer video={video} />
      </div>
    </div>
  );
}
