import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const AddnewChr = () => {

const [id, setId] = useState("");
const [title, setGameTitle] = useState("");
const [platform, setPlatform] = useState("");
const [releaseYear, setReleaseYear] = useState("");
const [selectedImage, setSelectedImage] = useState("");
const [image, setImage] = useState("");
const [newGame, setNewGame] = useState([]);
const [result, setResult] = useState("");

useEffect(() =>{
    setNewGame({id, title, platform, releaseYear, image})
},[id, title, platform, releaseYear, image])

async function handleSubmit (event) {
    event.preventDefault()
    if(id.length == 24 || id.length == 0) {
    await postNewGame(newGame, selectedImage);
    } else {
        alert("ID has to be 24 characters or numbers long");
    }
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
        setResult(
            <div className="pagetitle">
                <p>{`${newGame.title}`} has been added!</p>
            </div>
        )
}

return(
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h1 className="pagetitle">Add new Character</h1>
        <div className="row">
            <article id="form" className="col-md-11 col-sm-6">
                <p>Character ID can be auto-generated if you leave it empty</p>
                <input type="text" id="add-game-id" placeholder="Enter a game id" onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" id="add-game-title" placeholder="Enter a game title" onChange={(e)=>setGameTitle(e.target.value)}></input>
                <input type="text" id="add-game-platform" placeholder="Enter a platform" onChange={(e)=>setPlatform(e.target.value)}></input>
                <input type="text" id="add-game-release-year" placeholder="Enter a release year" onChange={(e)=>setReleaseYear(e.target.value)}></input>
                <input type="submit" className="btn btn-success" id="add-game-btn" value="Submit"></input>           
                <input type="file" id="add-game-image"  onChange={handleFiles}></input>
            </article>
            </div>              
        </form>
        {result}
        </div>
        
    </>
);
}

export default AddnewChr;