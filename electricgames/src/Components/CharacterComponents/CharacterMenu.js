import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
 
export default class CharacterNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/"><h1 className="navbar-brand">Ha en fin dag!</h1></Link>
                    <ul className="navbar-nav">
                        <Link to="/"><a className="nav-link">Show all characters</a></Link>
                        <Link to="/"><a className="nav-link">Search characters by ID</a></Link>
                        <Link to="/"><a className="nav-link">Search characters by name</a></Link>
                        <Link to="/"><a className="nav-link">Add new character</a></Link>
                        <Link to="/"><a className="nav-link">Update character</a></Link>
                        <Link to="/"><a className="nav-link">Delete character</a></Link>
                    </ul>
                </nav>
                <div>
                    <h4 className="pagesection">Character Collection</h4>
                    <FontAwesomeIcon icon="fa-solid fa-gamepad" />
                </div>
            </>
        )
    }
}