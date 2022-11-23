import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

//Get all characters component
const ShowAllChr = () => {
    const [character, setCharacter] = useState([]);

    //Gets all characters
    useEffect(() => {
        axios.get(`${LHUrl}/gamecharacters/GameCharacters`)
        .then(response=>setCharacter(response.data))
        .catch(error=>console.log(error))
    }, []);


    return (
    <>
        <div className="container">
        <h1 className="pagetitle">Showing all characters</h1>
        <div className="row">
        {character.map(character=>{
                return(
                    
                    <article key={character.id} className="col-md-5 col-sm-6">
                        <h4 className="title">Name: {character.name}</h4>
                        <img src={`${LHUrl}/images/${encodeURIComponent(character.image)}`} className="rounded mx-auto d-block" alt={character.image}></img>
                        <p className="id">Id: {character.id}</p>
                        <p className="game">Game: {character.game}</p>
                    </article>
                );
            })}
   </div></div> </>
    );
};

export default ShowAllChr;