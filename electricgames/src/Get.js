import axios from "axios";
import {useEffect, useState} from "react";

function GetGames({getAllGames}){
    
    function GetAllGames() {
        axios.get(`https://localhost:7088/games/Games`)
        .then ((response)=>{
            console.log(response.data)
        })
        .catch(error => {console.log(error);
        });
    }
    return(
        <div>
            <h3>Get all games</h3>
            <input type="button" id="getAllGamesBtn" value="Get all" onClick={getAllGames}></input>
        </div>
    )
}
export default Get;
