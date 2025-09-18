interface Token {
    token: string;
}

export default function saveToken(token: Token){
   localStorage.setItem('spotify_access_token', token.token)
}