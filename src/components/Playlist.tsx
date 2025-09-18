import { useEffect, useRef, useState } from "react";

export default function Playlist(props: { mood: any }) {
  const [playlist, setPlay] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef<number>(0);

  const token = localStorage.getItem("spotify_access_token");

  useEffect(() => {
    async function getPlaylist() {
      try {
        const res = await fetch(
          `https://kodplay-server.onrender.com/spotify/search/playlist/${props.mood}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        const valid = Array.isArray(data) ? data.find((p: any) => p && p.id) : null;
        if (valid) setPlay(`https://open.spotify.com/embed/playlist/${valid.id}`);
        else setPlay(null);
      } catch (e) {
        console.error("Playlist fetch error", e);
        setPlay(null);
      }
    }
    if (!dismissed && props.mood) getPlaylist();
  }, [props.mood, token, dismissed]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastScrollY.current;
      // hide on scroll down, show on scroll up
      if (diff > 10) setHidden(true);
      else if (diff < -10) setHidden(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!playlist || dismissed) return null;

  return (
    <div className={`playlist-panel${hidden ? " is-hidden" : ""}`}
         onMouseEnter={() => setHidden(false)}>
      <button
        className="playlist-close"
        aria-label="סגור פלייליסט"
        onClick={() => setDismissed(true)}
        title="סגור"
        type="button"
      >
        ×
      </button>
      <iframe
        className="playlist"
        style={{ borderRadius: "12px" }}
        src={playlist}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
