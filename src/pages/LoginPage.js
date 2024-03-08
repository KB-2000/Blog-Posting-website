import { useContext, useState } from "react";
import { useNavigate} from 'react-router-dom'
import { UserContext } from "../userContext";

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUserInfo}=useContext(UserContext)
  const login = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login',{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers:{'Content-Type':'application/json'},
        credentials:'include'
    });
    if(response.ok){
        response.json().then(userInfo=>{
              setUserInfo(userInfo)
        })
        navigate('/')
    }else{
        alert("wrong credentials")
    }
  }
  return (
    <>
      <form className="login" onSubmit={e=>login(e)}>
        <h1>Login</h1>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="username"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          name=""
        />
        <button>login</button>
      </form>
    </>
  );
}
