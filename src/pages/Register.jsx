import React, { useState } from "react";
import "./Register.css";
import image from "../images/background.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [heading,setHeading] = useState("Register");
    const [color,setColor] = useState({backgroundColor:"#3498db"});
    const navigate = useNavigate();



    
    async function handleSubmit(event){
        event.preventDefault();
        const apiUrl = "http://localhost:3000/api/users";

        try {
            const response = await axios.post(apiUrl, { name, email,password });
            navigate("/home", { state: { userData: response.data } });
        } catch (error) {
            // Handle errors
            console.error("Error:", error.message);
        }
    }
    
    return (
    <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }} >
        <h1>{heading}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="what is your name?" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button  type="submit" style={color} onMouseOver={(e)=>setColor({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor({backgroundColor:"#3498db"})}>Send
            </button>
        </form>
    </div>

    )
}


export default Register;


