import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const GetGameByIdComponent = () => {
    const [searchId, setSearchId] = useState("");
    const [result, setResult] = useState("");
    
    
    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games/${searchId}`)
        .then(response=>setSearchId(response.data))
        .catch(error=>console.log(error))
    });

 

    const handleSubmit = (event) => { 
        event.preventDefault();
        if(searchId.length != 24){
            setResult(
                <div></div>
            );
           alert("The id has to be 24 letters or numbers long")
            
        }else{
             setResult(  
                <div className="container">
                <article className="col-md-5 col-sm-6">
                        <h4 className="title">Title: {setSearchId.title}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(searchId.image)}`} className="img-thumbnail" alt={searchId.image}></img>
                        <p className="id">Id: {searchId.id}</p>
                        <p className="platform">Platform: {searchId.platform}</p>
                        <p className="release-year">Release year: {searchId.releaseYear}</p>
                    </article></div>
                    );
            
        }
        
         
    };
    return (
        <>
          
           <div className="container">
           <h1 className="pagetitle">Search game by ID</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-background">
                <input type="text" id="search-game-by-id-input" placeholder="Enter Id:" onChange={(e) => setSearchId(e.target.value)}></input>
                <input className="btn btn-success" type="submit" id="search-game-by-id-btn" value="Submit"></input>
                
                </div> </form></div>
            {result}
        </>
    )
}

export default GetGameByIdComponent;