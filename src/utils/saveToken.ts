export default function saveToken(token:{ [key: string]: any }){
   localStorage.setItem('token_kodePlay',token.token)
}