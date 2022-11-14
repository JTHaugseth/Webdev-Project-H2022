import axios from "axios";
import { useEffect, useState } from "react";


function ReactAxiosController(){
    const[games, setGames]  = useState([]);

    useEffect(()=>{
        axios
        .get("https://localhost:7220/games/Games")
        .then(response)=>setGames(response.data)
        .catch(error=>console.log(error))
    },[]);

}