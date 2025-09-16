const API_BASE = import.meta.env.VITE_API_URL;

export default async function checkIfTokenValid(){
    const token = localStorage.getItem('token_kodePlay')
    const res = await fetch(`${API_BASE}/users/checkToken`,{
         method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
        }
    })
    return res
}