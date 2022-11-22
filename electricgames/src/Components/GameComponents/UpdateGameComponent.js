import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const UpdateGameComponent = () => {


const [id, setUpdatedId] = useState("");
const [title, setUpdatedTitle] = useState("");
const [platform, setUpdatedPlatform] = useState("");
const [releaseYear, setUpdatedReleaseYear] = useState("");
const [image, setUpdatedImageName] = useState("");
const [updatedImage, setUpdatedImage] = useState("");
const [updatedGame, setUpdatedGame] = useState([]);

useEffect(() => {
    setUpdatedGame({
        id: updatedGame.id,
        title: title ? title : updatedGame.title,
        platform: platform ? platform : updatedGame.platform,
        releaseYear: releaseYear ? releaseYear : updatedGame.releaseYear,
        image: image ? image : updatedGame.image})
}, [id, title, platform, releaseYear, image]);


const handleFiles = (event) => {
    setUpdatedImageName(event.target.files[0].name);
    setUpdatedImage(event.target.files[0]);
}

const getGame = async () => {
    await axios.get(`https://localhost:7088/games/Games/${id}`)
    .then((response)=>setUpdatedGame(response.data))
    .catch(error=>console.log(error));
    
}

const postUpdatedGame = async () => {
    const fd = new FormData();
    fd.append("file", updatedImage);
    try{
        const response = await axios({
             method: "post",
             url: `https://localhost:7088/games/Games/image`,
             data: fd,
             headers:{
                "Content-type": "multipart/form-data"
             }
        })
    } catch(error) {
        console.log(error)
    }
        await axios.put(`https://localhost:7088/games/Games/${id}`, 
        JSON.stringify(updatedGame), 
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then((response)=>{
            setUpdatedGame({...updatedGame})
        })
        .catch(error=>console.log(error));
}

return(
    <>

    <div className="container">
        <h1 className="pagetitle">Update game</h1>
        <div className="row">
            <article id="form" className="col-md-11 col-sm-6">
            
                <p>What game would you like to update? * Requires game ID</p>
                <input type="text" id="update-game-id" placeholder="Game ID" onChange={(e)=>setUpdatedId(e.target.value)}></input>
                <button id="get-game-btn" onClick={getGame}>Get Game</button>
                <br></br>
                <p>Fill in the fields you want to update</p>
                <p>Game ID has to be 24 digits</p>
                <input type="text" id="update-game-id" value={updatedGame.id} onChange={(e)=>setUpdatedId(e.target.value)}></input>
                <input type="text" id="update-game-title" value={updatedGame.title}  onChange={(e)=>setUpdatedTitle(e.target.value)}></input>
                <input type="text" id="update-game-platform" value={updatedGame.platform} onChange={(e)=>setUpdatedPlatform(e.target.value)}></input>
                <input type="text" id="update-game-release-year" value={updatedGame.releaseYear} onChange={(e)=>setUpdatedReleaseYear(e.target.value)}></input>           
                <input type="file" id="update-game-image" onChange={handleFiles}></input>
                <input type="button" className="btn btn-success" id="update-game-btn" value="Update" onClick={postUpdatedGame}></input>
            </article>
            </div>          
        </div>
    </>
);
}

export default UpdateGameComponent;