import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const UpdateChr = () => {

const [id, setUpdatedId] = useState("");
const [title, setUpdatedTitle] = useState("");
const [platform, setUpdatedPlatform] = useState("");
const [releaseYear, setUpdatedReleaseYear] = useState("");
const [image, setUpdatedImageName] = useState("");
const [updatedImage, setUpdatedImage] = useState("");
const [updatedGame, setUpdatedGame] = useState([]);
const [result, setResult] = useState("");

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
    if (updatedImage.length == 0) {} else {
        const fd = new FormData();
        fd.append("file", updatedImage);
        try{
            await axios({
                method: "post",
                url: `https://localhost:7088/games/Games/image`,
                data: fd,
                headers: {"Content-Type": "multipart/form-data"}
            });
        } catch(error) {
            console.log(error)
        }
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

    setResult(
        <div className="pagetitle">
            <p>{`${updatedGame.title}`} has been updated!</p>
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
                <input type="text" id="update-game-id" placeholder="Game ID" onChange={(e)=>setUpdatedId(e.target.value)}></input>
               
                <button className="btn btn-info" id="get-game-btn" onClick={getGame}>Get character</button>
                <p>Fill in the fields you want to update</p>
                </div>
                <div className="col-lg-4 col-md-4">
                <p>Title:<input type="text" id="update-game-title" placeholder={updatedGame.title}  onChange={(e)=>setUpdatedTitle(e.target.value)}></input></p>      
                <p>Platform:<input type="text" id="update-game-platform" placeholder={updatedGame.platform} onChange={(e)=>setUpdatedPlatform(e.target.value)}></input></p> 
                <p>Release Year:<input type="text" id="update-game-release-year" placeholder={updatedGame.releaseYear} onChange={(e)=>setUpdatedReleaseYear(e.target.value)}></input></p>
              
            
                          
                
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