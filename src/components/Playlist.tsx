import { useEffect, useState } from "react";

export default function Playlist(props: { mood: any }) {
  console.log("mood", props.mood);

  const [playlist, setPlay] = useState<string | null>(null);
  const token = localStorage.getItem("spotify_access_token");
  console.log("token", token);

  useEffect(() => {
    async function getPlaylist() {
      const data: any = await fetch(
        `https://kodplay-server.onrender.com/spotify/search/playlist/${props.mood}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.json());

      console.log("data:", data);

      const valid = Array.isArray(data)
        ? data.find((p: any) => p && p.id)
        : null;

      if (valid) {
        setPlay(`https://open.spotify.com/embed/playlist/${valid.id}`);
      } else {
        console.error("No valid playlist found", data);
        setPlay(null);
      }
    }
    getPlaylist();
  }, [props.mood, token]);

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
