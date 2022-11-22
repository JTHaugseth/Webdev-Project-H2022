import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
 
export default class CharacterNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
                    <ul className="navbar-nav">
                        <Link className="nav-link" to="/">Show all characters</Link>
                        <Link className="nav-link" to="/">Search characters by ID</Link>
                        <Link className="nav-link" to="/">Search characters by name</Link>
                        <Link className="nav-link" to="/">Add new character</Link>
                        <Link className="nav-link" to="/">Update character</Link>
                        <Link className="nav-link" to="/">Delete character</Link>
                    </ul>
                </nav>
                <div>
                    <h4 className="pagesection">Character Collection</h4>
                </div>
            </>
        )
    }
}