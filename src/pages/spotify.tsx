import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function Connect() {
  const [isToken, setToken] = useState(
    localStorage.getItem("spotify_access_token")
  );
  const navigate=useNavigate()
  console.log("token spo",isToken);

  useEffect(() => {
    function handleMessage(event: any) {
      console.log("Message event:", event);

      if (event.data?.access_token) {
        localStorage.setItem("spotify_access_token", event.data.access_token);
        localStorage.setItem("spotify_refresh_token", event.data.refresh_token);
        localStorage.setItem("spotify_expires_in", event.data.expires_in);
        console.log("Token saved:", event.data.access_token);
        setToken(localStorage.getItem("spotify_access_token"));
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isToken]);

  useEffect(()=>{
          if (!isToken) {
            window.open(
              "https://kodplay-server.onrender.com//spotify/link",
              "SpotifyLogin",
              "width=600,height=800"
            );
          }
          else{
          navigate('/home',{state:{}})
          }
  },[isToken])

  return (
    <>
    <h1>hi from spotify</h1>
    </>
  );

 
}