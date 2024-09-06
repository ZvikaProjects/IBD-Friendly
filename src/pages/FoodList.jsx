import image from "../images/background.jpg";
import React, { useState ,useEffect} from "react";
import {useLocation } from "react-router-dom";
import axios from "axios";

function FoodList(){
    const location = useLocation();
    const userId = location.state.userId;
    const apiUrl = "http://localhost:3000/api/info/"+userId;



    const [color,setColor] = useState({backgroundColor:"#3498db"});
    const [blackListItem,setBlackListItem] = useState("");
    const [whiteListItem,setWhiteListItem] = useState("");

    let whiteList = [];
    let blackList = [];


    async function UpdateLists(event){
        event.preventDefault();
        whiteList = whiteListItem.split(" ");
        blackList = blackListItem.split(" ");
        try {
            const response = await axios.put(apiUrl, {userId,blackList,whiteList});
        }
        catch (error) {
            console.error("Error:", error.message);
        }
    }



    return (
        <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh'  }}>
            <h1>Food list page</h1>
            <form onSubmit={UpdateLists}>

            <input value={whiteListItem}  type="text" id="whiteList" 
            placeholder="Add to White List" onChange={(e) => setWhiteListItem(e.target.value)} /> 

            <input value = {blackListItem} type="text" id="blackList" 
            placeholder="Add to Black List" onChange={(e) => setBlackListItem(e.target.value)}/> 


            <button value={'updateLists'} type="submit" style={color} onMouseOver={(e)=>setColor({backgroundColor:"#00008B"} )}
            onMouseOut={e => setColor({backgroundColor:"#3498db"})}>Send
            </button>            
            </form>
        </div>
    )

}


export default FoodList;