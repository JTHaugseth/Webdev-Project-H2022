import react from "react";
import React, {Component} from 'react';
import reactDOM from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default class GamesMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
            <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
            <Link to="/GamesCollection/ShowAllGames"><a className="dropdown-item">Show all games</a></Link>
            <Link to="/GamesCollection/SearchGameById"><a className="dropdown-item">Search game by ID</a></Link>
            <Link to="/GamesCollection/SearchGameByTitle"><a className="dropdown-item">Search game by title</a></Link>
            <Link to="/GamesCollection/AddNewGame"><a className="dropdown-item">Add new game</a></Link>
            <Link to="/GamesCollection/UpdateGame"><a className="dropdown-item">Update game</a></Link>
            <Link to="/GamesCollection/DeleteGame"><a className="dropdown-item">Delete game</a></Link>
         </nav>
        )
    }
}