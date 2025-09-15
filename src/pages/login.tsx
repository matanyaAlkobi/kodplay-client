import { useLocation } from "react-router"
import login from "../utils/login"
import { useRef, useState } from "react"

export default function Login(){
    const logorSign = useLocation()
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [passwordMatch,setPasswordMatch] = useState(true)
    const [notError,setNotError] = useState(true)
    return<form>
        <input type="text" placeholder="username" ref={username}/>
        <input type="password" placeholder="password" ref={password}/>
        {logorSign.state.logorsign === 'signin'?<input type="email" placeholder="email"/>:<p></p>}
        <button onClick={async(e) => {
            e.preventDefault()
            const user = {username:username.current?.value,password:password.current?.value}
            if(logorSign.state.logorsign === 'login'){
                const res = await login(user)
                if(res.status === 403){
                    setPasswordMatch(false)
                }
                else if(res.status === 500){
                    setNotError(false)
                }
                else{
                    setPasswordMatch(true)
                    setNotError(true)
                }
            }
        }}>submit</button>
    </form>
}