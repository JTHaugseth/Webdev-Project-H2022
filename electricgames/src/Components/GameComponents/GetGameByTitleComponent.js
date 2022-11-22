import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const GetGameByTitleComponent = () => {

    const [searchTitle, setSearchTitle] = useState("");
    const [result, setResult] = useState("")

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games/title/${searchTitle}`)
        .then(response=>setSearchTitle(response.data))
        .catch(error=>console.log(error))
    });

    const handleSubmit = (event) => { 
        event.preventDefault();
        if(searchTitle){
            setResult(
                <div></div>
            );
           alert("The title cannot be empty")
            
        }else{
          setResult( 
         
            <div className="container">
                <article className="col-md-5 col-sm-6">
                        <h4 className="title">Title: {setSearchTitle.title}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(searchTitle.image)}`} className="img-thumbnail" alt={searchTitle.image}></img>
                        <p className="id">Id: {searchTitle.id}</p>
                        <p className="platform">Platform: {searchTitle.platform}</p>
                        <p className="release-year">Release year: {searchTitle.releaseYear}</p>
                </article></div>
        );   
        }
         
    };

    return (
        <>
            <div className="container">
            <h1 className="pagetitle">Search game by Title</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-background">
                    <input type="text" id="search-game-by-title-input" placeholder="Enter Title:" onChange={(e) => setSearchTitle(e.target.value)}></input>
                    <input className="btn btn-success" type="submit" id="search-game-by-title-btn" value="Submit"></input>
                    </div></form> 
            </div>
            {result}
        </>
    )
};

export default GetGameByTitleComponent;