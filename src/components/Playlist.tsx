import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PlaylistProps {
  mood: string;
}

interface PlaylistItem {
  id: string;
}

export default function Playlist({ mood }: PlaylistProps) {
  console.log("mood", mood);

  const [playlist, setPlay] = useState<string | null>(null);
  const token = localStorage.getItem("spotify_access_token");
  const navigate = useNavigate();
  console.log("token", token);

  useEffect(() => {
    async function getPlaylist() {
      if (!token) {
        navigate("/spotify");
        return;
      }

      const data: PlaylistItem[] = await fetch(
        `https://kodplay-server.onrender.com/spotify/search/playlist/${mood}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.json());

      console.log("data:", data);

      const valid = Array.isArray(data)
        ? data.find((p: PlaylistItem) => p && p.id)
        : null;

      if (valid) {
        setPlay(`https://open.spotify.com/embed/playlist/${valid.id}`);
      } else {
        console.error("No valid playlist found", data);
        setPlay(null);
      }
    }
    getPlaylist();
  }, [mood, token, navigate]);

  return (
    <>
      {playlist && (
        <iframe className="playlist"
          style={{ borderRadius: "12px" }}
          src={playlist}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
      
    </>
  );
}
