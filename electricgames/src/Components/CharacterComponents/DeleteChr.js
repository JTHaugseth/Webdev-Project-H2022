import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"


const DeleteChr = () => {

const [deleteId, setDeleteId] = useState("");
const [result, setResult] = useState("");
const [resultName, setResultName] = useState("");

useEffect(() => {
    axios.get(`${LHUrl}/gamecharacters/GameCharacters/${deleteId}`)
    .then(response=>setResultName(response.data.title))
    .catch(error=>console.log(error));

    axios.delete(`${LHUrl}/gamecharacters/GameCharacters/${deleteId}`)
    .catch(error => {console.log(error)});
});

const handleSubmit = (event) => {
    event.preventDefault();
    setResult(
        
        <div className="delete-display">
            <h4>{`${resultName}`} has been deleted</h4>
        </div>
    );
}

return(
    <>
    <div className="container">
        <h1 className="pagetitle">Delete Character</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-background">
                <input type="text" id="delete-character" placeholder="Id" onChange={(e)=>setDeleteId(e.target.value)}></input>
                <input type="submit" className="btn btn-danger" id="delete-character-btn" value="Delete"></input>
            </div>
        </form>
        {result}
    </div>
    </>
);
}

export default DeleteChr;