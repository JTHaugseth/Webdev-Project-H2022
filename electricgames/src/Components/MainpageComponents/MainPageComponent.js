import react from "react";
import React, {Component} from 'react';
import reactDOM from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default class MainPageComponent extends Component {
    render () {
        return (
        
            <div className="container">
            <div className="header">
            <h1 className="header-title">Electric Games</h1>
            <p>Ahead of the curve with 200+ active projects.<br/>
            Currently employed by Kristiania, Bergen.</p>
           
            <div className="buttons">
            <div className="row justify-content-center">
            <Link to="/GamesCollection"><button id="gm-btn" className="col col-md-12">Game Collection</button></Link>    
            <Link to="/CharactersCollection"><button id="chr-btn" className="col col-md-12 ">Character Collection</button></Link>    
            <Link to="/Quiz"><button id="quiz-btn" className="col col-md-12">Quiz Gamepage</button></Link>  
                    </div>  
                </div>
            </div>
         </div> 
        );

    }

}

