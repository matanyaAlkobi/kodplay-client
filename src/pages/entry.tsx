import { useNavigate } from "react-router"
import checkIfTokenValid from "../utils/checkToken"
import { useEffect } from "react"


export default function Entry(){
    const navigate = useNavigate()
    useEffect(() => {
        const checkToken = async() => {
            const token = await checkIfTokenValid()
            if(token.ok){
                navigate('/home')
            }
        }
        checkToken()
    },[])
    return<>
        <h1>how do you want to entry</h1>
        <button onClick={() => {
            const logorsign = 'login'
            navigate('/login',{state:{logorsign:logorsign}})
        }}>Login</button>
        <button onClick={() => {
            const logorSign = 'signin'
            navigate('/login',{state:{logorsign:logorSign}})
        }}>signin</button>
    </>
}