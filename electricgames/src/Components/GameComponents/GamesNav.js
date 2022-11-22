import react from "react";
import React, {Component} from 'react';
import reactDOM from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
 
export default class GamesNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
                    <ul className="navbar-nav">
                        <Link className="nav-link" to="/GamesCollection/ShowAllGames">Show all games</Link>
                        <Link className="nav-link" to="/GamesCollection/SearchGameById">Search game by ID</Link>
                        <Link className="nav-link" to="/GamesCollection/SearchGameByTitle">Search game by title</Link>
                        <Link className="nav-link" to="/GamesCollection/AddNewGame">Add new game</Link>
                        <Link className="nav-link" to="/GamesCollection/UpdateGame">Update game</Link>
                        <Link className="nav-link" to="/GamesCollection/DeleteGame">Delete game</Link>
                    </ul>
                </nav>
                <div>
                <Link className="pagesection" to="/GamesCollection">Game Collection</Link>  
                </div>
            </>
        )
    }
}