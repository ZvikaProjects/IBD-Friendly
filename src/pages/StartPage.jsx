import React, {useState} from "react";
import image from "../images/background.jpg";
import "./StartPage.css";
import { Link } from "react-router-dom";

function StartPage(){
    const [color1,setColor1] = useState({backgroundColor:"#3498db"});
    const [color2,setColor2] = useState({backgroundColor:"#3498db"});

    return (        
        <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }}>
            <h1>Hello!</h1>
            <Link to="/register" style={{ textDecoration: 'none' }} >
            <button style={color1} onMouseOver={(e) => setColor1({backgroundColor:"#00008B"})}
             onMouseOut={(e)=> setColor1({backgroundColor:"#3498db"})}>Sign Up</button>
             </Link>
             <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={color2} onMouseOver={ e => setColor2({backgroundColor:"#00008B"})} 
            onMouseOut={e => setColor2({backgroundColor:"#3498db"})}>Sign In
            </button>
            </Link>
        </div>
    )


}



export default StartPage;