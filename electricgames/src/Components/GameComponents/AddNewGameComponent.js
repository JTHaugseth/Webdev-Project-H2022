import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const AddNewGameComponent = () => {

const [id, setId] = useState("");
const [title, setGameTitle] = useState("");
const [platform, setPlatform] = useState("");
const [releaseYear, setReleaseYear] = useState("");
const [selectedImage, setSelectedImage] = useState("");
const [image, setImage] = useState("");
const [newGame, setNewGame] = useState([]);

useEffect(() =>{
    setNewGame({id, title, platform, releaseYear, image})
},[id, title, platform, releaseYear, image])

async function handleSubmit (event) {
    event.preventDefault()
    await postNewGame(newGame, selectedImage);
}
const handleFiles = (event) => {
    setSelectedImage(event.target.files[0]);
    setImage(event.target.files[0].name);
}

const postNewGame = async(newGame, selectedImage) => {
    await axios.post(`https://localhost:7088/games/Games`, JSON.stringify(newGame),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{console.log(response)})
    .catch(error => {console.log(error)});

    if(selectedImage.length == 0) {} else { 
        const fd = new FormData();
        fd.append("file", selectedImage);
        try {
            await axios({
                method: "post",
                url: `https://localhost:7088/games/Games/image`,
                data: fd,
                headers: {"Content-Type": "multipart/form-data"}
            });
        } catch (error) {
            console.log(error);
        }}
}

return(
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h1 className="pagetitle">Add new game</h1>
        <div className="row">
            <article id="form" className="col-md-11 col-sm-6">
                <p>Game ID can be auto-generated if you leave it empty</p>
                <input type="text" id="add-game-id" placeholder="Enter a game id" onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" id="add-game-title" placeholder="Enter a game title" onChange={(e)=>setGameTitle(e.target.value)}></input>
                <input type="text" id="add-game-platform" placeholder="Enter a platform" onChange={(e)=>setPlatform(e.target.value)}></input>
                <input type="text" id="add-game-release-year" placeholder="Enter a release year" onChange={(e)=>setReleaseYear(e.target.value)}></input>
                <input type="submit" className="btn btn-success" id="add-game-btn" value="Submit"></input>           
                <input type="file" id="add-game-image"  onChange={handleFiles}></input>
                
            </article>
           
            </div>
                       
        </form>
        </div>
    </>
);
}

export default AddNewGameComponent;