import { useNavigate } from "react-router"

export default function Entry(){
    const navigate = useNavigate()
    return<>
        <h1>how do you want to entry</h1>
        <button onClick={() => {
            navigate('/login')
        }}>Login</button>
        <button onClick={() => {
            navigate('/login')
        }}>signin</button>
    </>
}