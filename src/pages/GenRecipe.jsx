
import image from "../images/background.jpg";
import React, { useState } from "react";
import {useLocation } from "react-router-dom";
import axios from "axios";


function GenRecipe(){
    const location = useLocation();
    const userId = location.state.userId;
    const apiUrl = "http://localhost:3000/api/bard/recipe/"+userId;


    const [responseText, setResponseText] = useState("");
    const [color,setColor] = useState({backgroundColor:"#3498db"});

    async function genarateRecipe(event){
        event.preventDefault();
        try {
            const response = await axios.post(apiUrl, { text:"text" });
            setResponseText(response.data);
        }
        catch (error) {
            console.error("Error:", error.message);
        }
    }

    return (
        <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }} >
        <h1>This is the GenRecipe page </h1>
        <form onSubmit={genarateRecipe}>
            
            <button value={'recipe'} type="submit" style={color} onMouseOver={(e)=>setColor({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor({backgroundColor:"#3498db"})}>Genarate recipe
            </button>            
        </form>
        {responseText && (
                <div>
                    <h2>Recipe Generated:</h2>
                    <p>{responseText}</p>
                </div>
            )}
    </div>


        
    )
}

export default GenRecipe;