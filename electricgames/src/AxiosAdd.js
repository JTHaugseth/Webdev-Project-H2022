import axios from "axios";
import {useEffect, useState} from "react";

function axiosAdd({onAddGame, setNewGame, newGame}){
    const [id, setId]= useState("");
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [image, setImage] = useState("");

    useEffect(() =>{
        setNewGame({id,title,platform,releaseYear,image});
    },[id,title, platform, releaseYear, image]);

    function addGame(){
        onAddGame(newGame);
    }
    return(
        //html element
    )
}
export default axiosAdd;
