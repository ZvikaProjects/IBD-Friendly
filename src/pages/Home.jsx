import React, { useState } from "react";
import image from "../images/background.jpg";
import { useNavigate,useLocation } from "react-router-dom";


function Home(){
    const location = useLocation();
    const userData = location.state.userData;
    const [heading,setHeading] = useState("Home page");
    const [color1,setColor1] = useState({backgroundColor:"#3498db"});
    const [color2,setColor2] = useState({backgroundColor:"#3498db"});
    const [color3,setColor3] = useState({backgroundColor:"#3498db"});
    const [color4,setColor4] = useState({backgroundColor:"#3498db"});
    const [color5,setColor5] = useState({backgroundColor:"#3498db"});
    const navigate = useNavigate();


    
    async function handleSubmit(event){
        event.preventDefault();
        const route = event.nativeEvent.submitter.value;
        try {

            if (route == "recipe"){
                navigate(`/${route}`,{ state: { userId: userData._id } });
                return;
            }
            if (route == "lists"){
                navigate(`/${route}`,{ state: { userId: userData._id } });
                return;
            }
            if (route == "information"){
                navigate(`/${route}`,{ state: { userId: userData._id } });
                return;
            }
            navigate(`/${route}`);
            
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    return (
    <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }} >
        <h1  >{heading}</h1>
        <form onSubmit={handleSubmit}>

            <button value={'about'} type="submit" style={color1} onMouseOver={(e)=>setColor1({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor1({backgroundColor:"#3498db"})}>About Us
            </button>
            
            <button value={'recipe'} type="submit" style={color2} onMouseOver={(e)=>setColor2({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor2({backgroundColor:"#3498db"})}>Genarate recipe
            </button>

            <button value={'askai'} type="submit" style={color3} onMouseOver={(e)=>setColor3({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor3({backgroundColor:"#3498db"})}>Chat with Palm Ai
            </button>

            <button value={'lists'} type="submit" style={color4} onMouseOver={(e)=>setColor4({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor4({backgroundColor:"#3498db"})}>Add foods
            </button>

            <button value={'information'} type="submit" style={color5} onMouseOver={(e)=>setColor5({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor5({backgroundColor:"#3498db"})}>User Information
            </button>
            
        </form>
    </div>
    )
}


export default Home;