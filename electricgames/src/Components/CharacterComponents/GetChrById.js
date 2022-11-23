import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"
//Get character by id component
const GetChrById = () => {
    const [searchId, setSearchId] = useState("");
    const [result, setResult] = useState("");
    
    //Gets the character by id
    useEffect(() => {
        axios.get(`${LHUrl}/gamecharacters/GameCharacters/${searchId}`)
        .then(response=>setSearchId(response.data))
        .catch(error=>console.log(error))
    });

    //Validates if id exists and prints character
    const handleSubmit = (event) => { 
        event.preventDefault();
        
        if(searchId.id == undefined) {
            setResult(
                <div></div>
            );
           alert("The id doesnt exist") 
        } else {
             setResult(  
                <div className="container">
                    <article className="col-md-5 col-sm-6">
                        <h4 className="title">Name: {searchId.name}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(searchId.image)}`} className="img-thumbnail" alt={searchId.image}></img>
                        <p className="id">Id: {searchId.id}</p>
                        <p className="platform">Game: {searchId.game}</p>
                    </article>
                </div>
                );
        }
    };
    return (
        <>
           <div className="container">
                <h1 className="pagetitle">Search character by ID</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-background">
                        <input type="text" id="search-character-by-id-input" placeholder="Enter Id:" onChange={(e) => setSearchId(e.target.value)}></input>
                        <input className="btn btn-success" type="submit" id="search-character-by-id-btn" value="Submit"></input>
                    </div> 
                </form>
            </div>
            {result}
        </>
    )
}

export default GetChrById;