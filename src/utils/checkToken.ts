export default async function checkIfTokenValid(){
    const token = localStorage.getItem('token_kodePlay')
    console.log(`token: ${token}`)
    const res = await fetch('http://localhost:4545/users/checkToken',{
         method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
        }
    })
    return res
}