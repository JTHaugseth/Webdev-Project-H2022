import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class QuizNav extends Component {
    render() {
        return (
            <>
                 <nav className="navbar navbar-expand-lg">
                    <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
                    <Link className="nav-link" to="/GamesCollection">Game Collection</Link>    
                    <Link className="nav-link" to="/CharactersCollection">Character Collection</Link> 
                    <Link className="nav-link" to="/Quiz">Quiz</Link> 
                </nav>
                <div>
                    <h4 className="pageidentifier">Quiz</h4>
                </div>
            </>
        )
    }
}