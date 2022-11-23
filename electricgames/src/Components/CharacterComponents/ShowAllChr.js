import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

const ShowAllChr = () => {
    const [character, setcharacter] = useState([]);

    useEffect(() => {
        axios.get(`${LHUrl}/gamecharacters/GameCharacters`)
        .then(response=>setGames(response.data))
        .catch(error=>console.log(error))
    }, []);


    return (
    <>
        <div className="container">
        <h1 className="pagetitle">Showing all characters</h1>
        <div className="row">
        {games.map(game=>{
                return(
                    
                    <article key={character.id} className="col-md-5 col-sm-6">
                        <h4 className="name">Name: {character.name}</h4>
                        <img src={`${LHUrl}/images/${encodeURIComponent(character.image)}`} className="img-fluid" alt={character.image}></img>
                        <p className="id">Id: {character.id}</p>
                        <p className="game">Game: {character.game}</p>
                    </article>
                );
            })}
   </div></div> </>
    );
};

export default ShowAllChr;