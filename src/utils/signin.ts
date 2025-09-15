export default async function signin(user:object){
    const res = fetch('http://localhost:4545/users/signin',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    return res
}