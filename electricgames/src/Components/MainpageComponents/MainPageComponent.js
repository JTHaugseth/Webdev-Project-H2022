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
           
            
            <div id="mainbuttons" className="row justify-content-center g-2">
            <Link to="/GamesCollection"><button id="mainbtn" className="col-xl-8 col-lg-12 col-sm-12">Game Collection</button></Link>    
            <Link to="/CharactersCollection"><button id="mainbtn" className="col-xl-8 col-lg-12 col-sm-12">Character Collection</button></Link>    
            <Link to="/Quiz"><button id="mainbtn" className="col-xl-8 col-lg-12 col-sm-12">Quiz Gamepage</button></Link>  
                    </div>  
            </div>
         </div> 
        );

    }

}

