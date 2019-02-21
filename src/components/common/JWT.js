class JWT {    
    static get_jwt = () => {
        return { 
            'token': localStorage.getItem('auth_token'),
            'username': localStorage.getItem('username')
        }
    };
    static set_jwt = (token, username) => {
        localStorage.setItem('auth_token', token);
		localStorage.setItem('username', username);
    };
    static remove_jwt = () => {
        localStorage.removeItem('auth_token');
		localStorage.removeItem('username');
    };
}

export default JWT;