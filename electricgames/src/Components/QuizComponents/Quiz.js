import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

const QuizNav = () => {
    return (
    <> 
    <nav className="navbar navbar-expand-lg">
            <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
    </nav>
    <div className="container">
    <Link to ="/Question1"><input type="button" className="btn btn-info rounded mx-au d-block" id="start-quiz-btn" value="Start quiz"></input></Link>
    </div> 
    </>
    );
};

const Question1 = () => {
return(
<>
<h3>Do you get any bitches?</h3>
<input type="button" value="No"></input>
<input type="button" value="No"></input>
<input type="button" value="No"></input>
<input type="button" value="Yes(actually no)"></input>
</>
)
}


export default function QuizStart(){
    return(
    <Routes>
        <Route exact path="/" element={<QuizNav/>}></Route>
        <Route path="/Question1" element={<Question1/>}></Route>
    </Routes> 
    )
}