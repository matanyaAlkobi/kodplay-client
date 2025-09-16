
const API_BASE = import.meta.env.VITE_API_URL;

export default async function signin(user:object){
    const res = fetch(`${API_BASE}/users/signin`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    return res
}