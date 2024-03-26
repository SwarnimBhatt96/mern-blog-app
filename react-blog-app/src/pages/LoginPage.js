import { useState } from "react";
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function login(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (response.status === 200) {
            alert("login successfull!");
            setRedirect(true);
        }
        else {
            alert("login failed");
        }
    }

    return (
        <>
            {redirect ? (<Navigate to={'/'} />)
                :
                (
                    <form className="login" onSubmit={login}>
                        <h1>Login</h1>
                        <input
                            type="email"
                            placeholder="email"
                            value={username}
                            onChange={event => setUsername(event.target.value)} />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)} />
                        <button>Login</button>
                    </form>
                )}
        </>

    )
}