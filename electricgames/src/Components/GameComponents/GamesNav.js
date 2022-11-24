import React, {Component} from 'react';
import {Link} from "react-router-dom";

//Navbar 
export default class GamesNav extends Component {
    render() {
        return (
            <>
                <nav className="navbarbackground">
                <div className="row">
                        <Link to="/"><h1 className="navbrand col-lg-2">Electric Games</h1></Link>

                        <Link className="col-lg-2" to="/GamesCollection/ShowAllGames">Show all games</Link>
                        <Link className="col" to="/GamesCollection/SearchGameById">Search game by ID</Link>
                        <Link className="col" to="/GamesCollection/SearchGameByTitle">Search game by title</Link>
                        <Link className="col" to="/GamesCollection/AddNewGame">Add new game</Link>
                        <Link className="col" to="/GamesCollection/UpdateGame">Update game</Link>
                        <Link className="col" to="/GamesCollection/DeleteGame">Delete game</Link>
                    </div>
                </nav>
                <div>
                    <h4 className="pageidentifier">Game Collecton</h4>
                </div>
            </>
        )
    }
}