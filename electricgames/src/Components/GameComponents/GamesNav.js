import react from "react";
import React, {Component} from 'react';
import reactDOM from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
 
export default class GamesNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
                    <ul className="navbar-nav">
                        <Link to="/GamesCollection/ShowAllGames"><a className="nav-link">Show all games</a></Link>
                        <Link to="/GamesCollection/SearchGameById"><a className="nav-link">Search game by ID</a></Link>
                        <Link to="/GamesCollection/SearchGameByTitle"><a className="nav-link">Search game by title</a></Link>
                        <Link to="/GamesCollection/AddNewGame"><a className="nav-link">Add new game</a></Link>
                        <Link to="/GamesCollection/UpdateGame"><a className="nav-link">Update game</a></Link>
                        <Link to="/GamesCollection/DeleteGame"><a className="nav-link">Delete game</a></Link>
                    </ul>
                </nav>
                <div>
                    <h4 className="pagesection">Game Collection</h4>
                    <FontAwesomeIcon icon="fa-solid fa-gamepad" />
                </div>
            </>
        )
    }
}