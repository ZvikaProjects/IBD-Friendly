import React, {useState} from "react";
import image from "../images/background.jpg";
import "./StartPage.css";
import {useNavigate } from "react-router-dom";

function StartPage(){
    const [color1,setColor1] = useState({backgroundColor:"#3498db"});
    const [color2,setColor2] = useState({backgroundColor:"#3498db"});
    const navigate = useNavigate();
    function handleClick(event) {
        event.preventDefault();
        const route = event.target.value;
        // Check if the route is defined before navigating
        navigate(`/${route}`);
      }

    return (        
        <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }}>
            <h1>Hello!</h1>
            <button value={'register'} style={color1} onMouseOver={(e) => setColor1({backgroundColor:"#00008B"})}
             onMouseOut={(e)=> setColor1({backgroundColor:"#3498db"})} onClick={handleClick}>Sign Up
             </button>
             
            <button value={'login'} style={color2} onMouseOver={ e => setColor2({backgroundColor:"#00008B"})} 
            onMouseOut={e => setColor2({backgroundColor:"#3498db"})} onClick={handleClick}>Sign In
            </button>
            
        </div>
    )


}



export default StartPage;