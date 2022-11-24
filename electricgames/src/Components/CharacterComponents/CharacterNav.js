import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class CharacterNav extends Component {
    render() {
        return (
            <>
                <nav className="navbarbackground">
                <div className="row">
                        <Link to="/"><h1 className="navbrand col col-md-12">Electric Games</h1></Link>
                        
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/CharactersCollection/ShowAllCharacters">Show all characters</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/CharactersCollection/GetCharacterById">Search characters by ID</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/CharactersCollection/GetCharacterByName">Search characters by name</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/CharactersCollection/AddNewCharacter">Add new character</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/CharactersCollection/UpdateCharacter">Update character</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/CharactersCollection/DeleteCharacter">Delete character</Link>
                        </div>
                </nav>
                <div>
                    <h4 className="pageidentifier">Character Collection</h4>
                </div>
            </>
        )
    }
}