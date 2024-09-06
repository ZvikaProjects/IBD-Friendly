import React, { useState } from "react";
import image from "../images/background.jpg";
import axios from "axios";


function Ask(){
    const apiUrl = "http://localhost:3000/api/bard/ask";

    const [responseText, setResponseText] = useState("");
    const [input, setInput] = useState("");
    const [color,setColor] = useState({backgroundColor:"#3498db"});


    async function askPalmAi(event){
        event.preventDefault();
        try {
            const text = input;
            setInput("");
            const response = await axios.post(apiUrl, { text:text });
            setResponseText(response.data);
        }
        catch (error) {
            console.error("Error:", error.message);
        }
    }
    return (
        <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }} >
         <h1>Ask PalmAi page </h1>
        <form onSubmit={askPalmAi}>

            <input value = {input} type="text" id="input" onChange={(e) => setInput(e.target.value)}/>            
            <button value={'recipe'} type="submit" style={color} onMouseOver={(e)=>setColor({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor({backgroundColor:"#3498db"})}>Send
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

export default Ask;