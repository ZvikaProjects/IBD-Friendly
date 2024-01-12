import React, { useState } from "react";
import image from "../images/background.jpg";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";



function Login()
{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color,setColor] = useState({backgroundColor:"#3498db"});
    async function handleSubmit(event){

        event.preventDefault();
        const apiUrl = "http://localhost:3000/api/auth";

        try {
            const response = await axios.post(apiUrl, { email,password });
            console.log(response);

            // Handle the response from the backend
            console.log("Success:", response.data);
        } catch (error) {
            // Handle errors
            console.error("Error:", error.message);
        }
    }
    return(
    <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }}>
        <form onSubmit={handleSubmit}>
        <h1>Login </h1><br/>   
        <input value={email} type="text" id="Email" name="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input value={password} type="password" id="Password" name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <Link   to="/home" style={{ textDecoration: 'none' }}>
        <button className="button-display" type="submit" style={color} onMouseOver={e => setColor({backgroundColor:"#00008B"})}
        onMouseOut={e => setColor({backgroundColor:"#3498db"})}>Send
        </button>
        </Link>
        </form>
    </div>
    )
}

export default Login;