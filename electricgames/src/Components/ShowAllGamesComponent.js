import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ShowAllGamesComponent = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games`)
        .then(response=>setGames(response.data))
        .catch(error=>console.log(error))
    });


    return (
    <>
        <div className="container">
        <h1 className="pagetitle">Showing all games</h1>
        <div className="row">
        {games.map(game=>{
                return(
                    
                    <article className="col-md-5 col-sm-6">
                        <h4 className="title">Title: {game.title}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(game.image)}`} className="img-fluid" alt={game.image}></img>
                        <p className="id">Id: {game.id}</p>
                        <p className="platform">Platform: {game.platform}</p>
                        <p className="release-year">Release year: {game.releaseYear}</p>
                    </article>
                );
            })}
   </div></div> </>
    );
};

export default ShowAllGamesComponent;