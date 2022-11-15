/*import axios from "axios";
import { useEffect, useState } from "react";


function ReactAxiosController(){
    const[getAllGames, setGetAllGames] = useState([]);
    const[games, setGames]  = useState([]);
    const [newGame, setNewGame] = useState("");
    const [deletedGame, setDeletedGame] = useState("");
    const [updatedGame, setUpdatedGame] = useState("");

    useEffect(()=>{
        axios
        .get("https://localhost:7220/games/Games")
        .then(response)=>setGames(response.data)
        .catch(error=>console.log(error))
    },[newGame]);
    
    function onAddGame(newGame){
        axios.post(`https://localhost:7088/games/Games`, newGame, {
           
                headers: {
                'Content-Type': 'application/json'
                }
        })
        .then((response)=>{setNewGame(undefined)})
        .catch(error => {console.log(error);
        });
    }

    return(
        <div>
            <Get setGetAllGames={setGetAllGames}/>
            {games.map(games=>{
                return <div>
                    <p>Game ID: {game.id}</p>
                        <p>game Name: {game.title}</p>
                        <p>game Price:{game.platform}</p>
                        <p>game Category: {game.image}</p>
                </div>
            })}
        </div>
    )

}*/