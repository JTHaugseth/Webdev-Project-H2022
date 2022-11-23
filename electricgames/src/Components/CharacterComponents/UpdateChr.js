import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

const UpdateChr = () => {

const [id, setUpdatedId] = useState("");
const [name, setUpdatedName] = useState("");
const [game, setUpdatedGame] = useState("");
const [image, setUpdatedImageName] = useState("");
const [updatedImage, setUpdatedImage] = useState("");
const [updatedCharacter, setUpdatedCharacter] = useState([]);
const [result, setResult] = useState("");

useEffect(() => {
    setUpdatedGame({
        id: updatedCharacter.id,
        name: name ? name : updatedCharacter.name,
        game: game ? game : updatedCharacter.game,
        image: image ? image : updatedGame.image})
}, [id, name, game, image]);


const handleFiles = (event) => {
    setUpdatedImageName(event.target.files[0].name);
    setUpdatedImage(event.target.files[0]);
}

const getCharacter = async () => {
    await axios.get(`${LHUrl}/gamecharacters/GameCharacters/${id}`)
    .then((response)=>setUpdatedGame(response.data))
    .catch(error=>console.log(error));
}

const postUpdatedCharacter  = async () => {
    if (updatedImage.length == 0) {} else {
        const fd = new FormData();
        fd.append("file", updatedImage);
        try{
            await axios({
                method: "post",
                url: `${LHUrl}/gamecharacters/GameCharacters/image`,
                data: fd,
                headers: {"Content-Type": "multipart/form-data"}
            });
        } catch(error) {
            console.log(error)
        }
    }
        
    await axios.put(`${LHUrl}/gamecharacters/GameCharacters/${id}`, 
    JSON.stringify(updatedGame), 
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then((response)=>{
        setUpdatedCharacter({...updatedCharacter})
    })
    .catch(error=>console.log(error));

    setResult(
        <div className="pagetitle">
            <p>{`${updatedCharacter.name}`} has been updated!</p>
        </div>
    )
}

return(
    <>

    <div className="container">
        <h1 className="pagetitle">Update character</h1>
        <div className="row">
            <article id="form">
                <div className="col-lg-12 col-md-12">
                <p>Which character would you like to update?  * Requires game ID</p>
                <input type="text" id="update-character-id" placeholder="Character ID" onChange={(e)=>setUpdatedId(e.target.value)}></input>
               
                <button className="btn btn-info" id="get-character-btn" onClick={getCharacter}>Get character</button>
                <p>Fill in the fields you want to update</p>
                </div>
                <div className="col-lg-4 col-md-4">
                <p>Name:<input type="text" id="update-character-name" placeholder={updatedCharacter.name}  onChange={(e)=>setUpdatedName(e.target.value)}></input></p>      
                <p>Game:<input type="text" id="update-character-game" placeholder={updatedGame.platform} onChange={(e)=>setUpdatedPlatform(e.target.value)}></input></p> 
                
              
            
                          
                
                <input type="file" id="update-game-image" onChange={handleFiles}></input>
                <input type="button" className="btn btn-success" id="update-game-btn" value="Update" onClick={postUpdatedGame}></input>
                </div>
            </article>
            </div>   
            {result}       
        </div>
    </>
);
}

export default UpdateChr;