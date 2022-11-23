import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

const AddnewChr = () => {

const [id, setId] = useState("");
const [name, setGameName] = useState("");
const [game, setGame] = useState("");
const [selectedImage, setSelectedImage] = useState("");
const [image, setImage] = useState("");
const [newCharacter, setNewCharacter] = useState([]);
const [result, setResult] = useState("");

useEffect(() =>{
    setNewCharacter({id, name, game, image})
},[id, name, game, image])

async function handleSubmit (event) {
    event.preventDefault()
    if(id.length == 24 || id.length == 0) {
    await postNewCharacter(newCharacter, selectedImage);
    } else {
        alert("ID has to be 24 characters or numbers long");
    }
}
const handleFiles = (event) => {
    setSelectedImage(event.target.files[0]);
    setImage(event.target.files[0].name);
}

const postNewCharacter = async(newCharacter, selectedImage) => {
    await axios.post(`${LHUrl}/gamecharacters/GameCharacters`, JSON.stringify(newCharacter),
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
                url: `${LHUrl}/gamecharacters/GameCharacters/image`,
                data: fd,
                headers: {"Content-Type": "multipart/form-data"}
            });
        } catch (error) {
            console.log(error);
        }}
        setResult(
            <div className="pagetitle">
                <p>{`${newCharacter.name}`} has been added!</p>
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
                    <input type="text" id="add-game-title" placeholder="Enter a game title" onChange={(e)=>setGameName(e.target.value)}></input>
                    <input type="text" id="add-game-platform" placeholder="Enter a platform" onChange={(e)=>setGame(e.target.value)}></input>
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