import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const register = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(response)
        if (response.status === 200) {
            alert("Registration successfull")
            navigate('/login/')
        } else {
            alert("Registration failed")
        }

    }
    return (
        <>
            <form action="" className="register" onSubmit={e => register(e)}>
                <h1>Register</h1>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Register</button>
            </form>
        </>
    );
}
