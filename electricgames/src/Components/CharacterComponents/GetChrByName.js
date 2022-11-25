import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl";

//Get character by name component
const GetChrByName = () => {

    const [searchName, setSearchName] = useState("");
    const [result, setResult] = useState("");

    //Gets character by name
    useEffect(() => {
        axios.get(`${LHUrl}/gamecharacters/GameCharacters/name/${searchName}`)
        .then(response=>setSearchName(response.data))
        .catch(error=>console.log(error))
    });

    //Validates that the character exist and prints it
    const handleSubmit = (event) => { 
        event.preventDefault();
        if(searchName == undefined){
            setResult(
                <div></div>
            );
            alert("The title does not exist");
        }else{
            setResult( 
                <div className="container">
                    <article className="col-md-5 col-sm-6">
                        <h4 className="name">Name: {searchName.name}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(searchName.image)}`} className="img-thumbnail" alt={searchName.image}></img>
                        <p className="id">Id: {searchName.id}</p>
                        <p className="platform">Game: {searchName.game}</p>
                    </article>
                </div>
            );   
        };
    };

    return (
        <>
            <div className="container">
            <h1 className="pagetitle">Search character by name</h1>
                <form onSubmit={handleSubmit}>
                    <div className="divBackground">
                    <input type="text" id="search-character-by-name-input" placeholder="Enter Name:" onChange={(e) => setSearchName(e.target.value)}></input>
                    <input className="btn btn-success" type="submit" id="search-character-by-name-btn" value="Submit"></input>
                    </div>
                </form> 
            </div>
            {result}
        </>
    )
};

export default GetChrByName;