import React, { useState } from "react";
import image from "../images/background.jpg";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function Login()
{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color,setColor] = useState({backgroundColor:"#3498db"});
    const navigate = useNavigate();
    async function handleSubmit(event){

        event.preventDefault();
        const apiUrl = "http://localhost:3000/api/auth";

        try {
            const response = await axios.post(apiUrl, { email,password });
            navigate("/home", { state: { userData: response.data } });
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
    return(
    <div  style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }}>
        <form onSubmit={handleSubmit}>
        <h1>Login </h1><br/>   
        <input value={email} type="text" id="Email" name="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input value={password} type="password" id="Password" name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <div className="test"></div>
        <button   className="button-display" type="submit" style={color} onMouseOver={e => setColor({backgroundColor:"#00008B"})}
        onMouseOut={e => setColor({backgroundColor:"#3498db"})}>Send
        </button>
        
        </form>
    </div>
       
    )
}

export default Login;