import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class CharacterNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
                        <div className="row">
                        <Link className="nav-link col" to="/CharactersCollection/ShowAllCharacters">Show all characters</Link>
                        <Link className="nav-link col" to="/CharactersCollection/GetCharacterById">Search characters by ID</Link>
                        <Link className="nav-link col" to="/CharactersCollection/GetCharacterByName">Search characters by name</Link>
                        <Link className="nav-link col" to="/CharactersCollection/AddNewCharacter">Add new character</Link>
                        <Link className="nav-link col" to="/CharactersCollection/UpdateCharacter">Update character</Link>
                        <Link className="nav-link col" to="/CharactersCollection/DeleteCharacter">Delete character</Link>
                        </div>
                </nav>
                <div>
                    <h4 className="pageidentifier">Character Collection</h4>
                </div>
            </>
        )
    }
}