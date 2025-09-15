export default async function login(user:object){
    const res = fetch('http://localhost:4545/users/login',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    return res
}