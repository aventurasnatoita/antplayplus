import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Cartaz from "./pages/Cartaz";
import Video from "./pages/Video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/cartaz" element={<Cartaz />} />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
  );
}

export default App;
