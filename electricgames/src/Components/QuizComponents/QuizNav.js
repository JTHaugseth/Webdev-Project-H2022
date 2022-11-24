import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class QuizNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                        <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
                    <ul className="navbar-nav">
                    </ul>
                </nav>
                <div>
                    <h4 className="pagesection">Quiz</h4>
                </div>
            </>
        )
    }
}