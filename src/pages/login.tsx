import { useLocation, useNavigate } from "react-router"
import login from "../utils/login"
import { useRef, useState } from "react"
import signin from "../utils/signin"
import saveToken from "../utils/saveToken"
import "../styles/login.css"

export default function Login(){
    const navigate = useNavigate()
    const logorSign = useLocation()
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const [inputEmpty,setInputEmpty] = useState(false)
    const [notPasswordMatch,setPasswordMatch] = useState(false)
    const [Error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    return (
    <main id="login">
      <form>
        <input type="text" placeholder="username" ref={username} required/>
        <input type="password" placeholder="password" ref={password} required/>
        {logorSign.state.logorsign === 'signin'&&<input type="email" placeholder="email" ref={email}/>}
        <button onClick={async(e) => {
            e.preventDefault()
            if(!username.current?.value || !password.current?.value){
                setInputEmpty(true)
                return
            }
            else{
                setInputEmpty(false)
            }
            const user = {username:username.current?.value,password:password.current?.value,email:email.current?.value}
            let res
            if(logorSign.state.logorsign === 'login'){
                setLoading(true)
                res = await login(user)
            }
            else if(logorSign.state.logorsign === 'signin'){
                setLoading(true)
                res = await signin(user)
            }
                if(res?.status === 403){
                    setLoading(false)
                    setPasswordMatch(true)
                }
                else if(res?.status === 500){
                    setLoading(false)
                    setError(true)
                }
                else{
                    setLoading(false)
                    setPasswordMatch(false)
                    setError(false)
                    const token = await res?.json()
                    saveToken(token)
                    navigate('/spotify',{state:{}})
                }
        }}>submit</button>
        {loading && <p className="hint">Loading...</p>}
        {inputEmpty && <p className="error">This is a required fields</p>}
        {Error && <p className="error">error in server</p>}
        {notPasswordMatch && <p className="error">password or user name not match</p>}
      </form>
    </main>
    )
}
