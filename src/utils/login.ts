const API_BASE = import.meta.env.VITE_API_URL;

export default async function login(user:object){
    const res = fetch(`${API_BASE}/users/login`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    return res
}