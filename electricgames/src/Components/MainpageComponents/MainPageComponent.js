import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class MainPageComponent extends Component {
    render () {
        return (
            <div className="container">
                <div className="header">
                    <h1 className="header-title">Electric Games</h1>
                    <p>Ahead of the curve with 200+ active projects.<br/>
                    Currently employed by Kristiania, Bergen.</p>
                    <div id="mainbuttons" className="row justify-content-center gy-2">
                        <div className="col-md-auto">
                            <Link to="/GamesCollection"><button id="mainbtn" className="btn btn-info">Game Collection</button></Link>    
                        </div>
                        <div className="col-md-auto">            
                            <Link to="/CharactersCollection"><button id="mainbtn" className="btn btn-secondary mb-6">Character Collection</button></Link>    
                        </div>
                        <div className="col-md-auto">             
                            <Link to="/Quiz"><button id="mainbtn" className="btn btn-light">Quiz Gamepage</button></Link>  
                        </div>
                    </div>  
                </div>
            </div> 
        );
    }
}

