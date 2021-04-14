import React, {useState, useEffect} from 'react';
import API from '../api-service';
import {useCookies} from 'react-cookie';

function Auth()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['mr-token']);

    useEffect(() => {
        if(token['mr-token']) window.location.href = '/movie';
    }, [token])

    const loginClick = () =>{
        API.loginUser({username, password})
            .then(resp=> setToken('mr-token', resp.token))
            .catch(error => console.log(error));
    }

    const registerClick = () => {
        API.registerUser({username, password})
        .then(()=> loginClick())
        .catch(error => console.log(error));
    }



    return(
        <div>
            {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
            <labe htmlFor="username">Username</labe><br/>
            <input id="username" 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={evt=> setUsername(evt.target.value)}
            /><br/>
            <label htmlFor="password">Passoword</label><br/>
            <input id="password" 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
            /><br/>
            {isLoginView? 
                <button onClick={loginClick}>Login</button> :
                <button onClick={registerClick}>Register</button> 
            }
            
            {isLoginView ?
                <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here !</p>:
                <p onClick={() => setIsLoginView(true)}>You don't have an account? Login here !</p>
           
            }
            
        </div>
    )
}

export default Auth;