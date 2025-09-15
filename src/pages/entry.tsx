import { useNavigate } from "react-router"
import checkIfTokenValid from "../utils/checkToken"
import { useEffect, useRef, useState } from "react"
import login from "../utils/login"
import signin from "../utils/signin"
import saveToken from "../utils/saveToken"
import "../styles/entry.css"

type Mode = 'login' | 'signin'

export default function Entry(){
    const navigate = useNavigate()
    const [mode, setMode] = useState<Mode>('login')
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const [inputEmpty,setInputEmpty] = useState(false)
    const [notPasswordMatch,setPasswordMatch] = useState(false)
    const [serverError,setServerError] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const checkToken = async() => {
            const token = await checkIfTokenValid()
            if(token.ok){
                navigate('/home')
            }
        }
        checkToken()
    },[navigate])

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!username.current?.value || !password.current?.value){
            setInputEmpty(true)
            return
        } else {
            setInputEmpty(false)
        }
        const user = {username:username.current?.value, password:password.current?.value, email:email.current?.value}
        setLoading(true)
        try{
            const res = mode === 'login' ? await login(user) : await signin(user)
            if(res?.status === 403){
                setLoading(false)
                setPasswordMatch(true)
                return
            }
            if(res?.status === 500){
                setLoading(false)
                setServerError(true)
                return
            }
            setPasswordMatch(false)
            setServerError(false)
            const token = await res?.json()
            saveToken(token)
            navigate('/home')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main id="entry">
            <h1>בחר/י מצב: התחברות או הרשמה</h1>
            <div className="body">
              <div className="panel">
                <div className="tabs" role="tablist" aria-label="Login or Sign up">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={mode==='login'}
                      className={mode==='login' ? 'active' : ''}
                      onClick={() => setMode('login')}
                    >Login</button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={mode==='signin'}
                      className={mode==='signin' ? 'active' : ''}
                      onClick={() => setMode('signin')}
                    >Sign up</button>
                </div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="username" ref={username} required />
                    <input type="password" placeholder="password" ref={password} required />
                    {mode === 'signin' && (
                      <input type="email" placeholder="email" ref={email} />
                    )}
                    <button type="submit">Submit</button>
                    {loading && <p className="hint">Loading...</p>}
                    {inputEmpty && <p className="error">This is a required fields</p>}
                    {serverError && <p className="error">error in server</p>}
                    {notPasswordMatch && <p className="error">password or user name not match</p>}
                </form>
              </div>
            </div>
        </main>
    )
}
