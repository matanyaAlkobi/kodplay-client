import { useState } from "react"
import { useNavigate } from "react-router"

export default function Entry(){
    const navigate = useNavigate()
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