import React, {Component} from 'react';
import {Link} from "react-router-dom";

//Navbar 
export default class GamesNav extends Component {
    render() {
        return (
            <>
                <nav className="navbarbackground">
                <div className="row">
                        <Link to="/"><h1 className="navbrand-main col">Electric Games</h1></Link>

                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/GamesCollection/ShowAllGames">Show all games</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/GamesCollection/SearchGameById">Search game by ID</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/GamesCollection/SearchGameByTitle">Search game by title</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/GamesCollection/AddNewGame">Add new game</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/GamesCollection/UpdateGame">Update game</Link>
                        <Link id="nav-item" className="col-lg-1 col-md-10 col-sm-10" to="/GamesCollection/DeleteGame">Delete game</Link>
                    </div>
                </nav>
                <div>
                    <h4 className="pageidentifier">Game Collecton</h4>
                </div>
            </>
        )
    }
}