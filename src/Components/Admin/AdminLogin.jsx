import { useState } from "react";

import { useNavigate } from "react-router-dom";



export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'admin123') {
        // If the username and password are correct, navigate to the /admin route
        navigate("/admin")
      } else {
        
  
        console.log('Incorrect username or password');
      }
    };
  
    return (
      <div>
        <h1>Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  