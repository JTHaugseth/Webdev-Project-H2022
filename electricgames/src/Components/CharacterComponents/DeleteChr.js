import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

//Detete character component
const DeleteChr = () => {

const [deleteId, setDeleteId] = useState("");
const [result, setResult] = useState("");
const [resultName, setResultName] = useState("");

//Gets the character by id and deletes by id
useEffect(() => {
    axios.get(`${LHUrl}/gamecharacters/GameCharacters/${deleteId}`)
    .then(response=>setResultName(response.data.title))
    .catch(error=>console.log(error));

    axios.delete(`${LHUrl}/gamecharacters/GameCharacters/${deleteId}`)
    .catch(error => {console.log(error)});
});

//Prints what game has been deleted
const handleSubmit = (event) => {
    event.preventDefault();
    setResult(
        
        <div className="display-deleted">
            <h4>{`${resultName}`} has been deleted</h4>
        </div>
    );
}

return(
    <>
    <div className="container">
        <h1 className="pagetitle">Delete Character</h1>
        <form onSubmit={handleSubmit}>
            <div className="deleteBackground">
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