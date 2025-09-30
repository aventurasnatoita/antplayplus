import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function VideoPlayer({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      preload: "auto",
      fluid: true,
      sources: [{ src: video.src, type: "video/mp4" }],
    });

    // Save video progress on timeupdate
    player.on('timeupdate', () => {
      localStorage.setItem(`progress-${video.id}`, player.currentTime());
    });
    // Resume from last progress
    const savedTime = localStorage.getItem(`progress-${video.id}`);
    if (savedTime) {
      player.currentTime(Number(savedTime));
    }

    // Subtitle tracks
    video.subtitles.forEach(track => {
      player.addRemoteTextTrack({
        kind: 'subtitles',
        src: track.src,
        srclang: track.label,
        label: track.label,
        default: track.default || false
      }, false);
    });

    // Audio tracks (video.js plugin required for UI switching; basic demo here)
    // Chromecast/AirPlay require extra plugins and setup (see docs)

    return () => { player.dispose(); };
  }, [video]);

  return (
    <video ref={videoRef} className="video-js vjs-big-play-centered" style={{ width: "100%", height: "450px" }} />
  );
}
