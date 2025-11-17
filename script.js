function toggleSubtitles(videoId) {
  const video = document.getElementById(videoId);
  if (video.textTracks.length > 0) {
    const track = video.textTracks[0];
    track.mode = (track.mode === "showing") ? "hidden" : "showing";
  }
}
