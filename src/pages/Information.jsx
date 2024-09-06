
import image from "../images/background.jpg";
import React, { useState ,useEffect} from "react";
import {useLocation } from "react-router-dom";
import axios from "axios";


function Information(){

    const location = useLocation();
    const userId = location.state.userId;
    const apiUrl = "http://localhost:3000/api/info/"+userId;

    const [blackList,setBlackList] = useState([]);
    const [whiteList,setWhiteList] = useState([]);


    // load the  user information when the component loads.
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(apiUrl);
                setBlackList(response.data.blackList);
                setWhiteList(response.data.whiteList);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
        fetchUserInfo();
    }, []);

    return (
        <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', minHeight: '100vh',textAlign: 'center', padding: '20px', borderRadius: '10px'  }}>
                <h2>User Information:</h2>
                <div>
                    <h2>Black List:</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {blackList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>White List:</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {whiteList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
        </div>

    )
}

export default Information;