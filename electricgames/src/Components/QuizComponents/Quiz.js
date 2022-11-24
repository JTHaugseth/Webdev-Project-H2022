import {Routes, Route, Link} from "react-router-dom";


const QuizNav = () => {
    return (
    <> 
    <nav className="navbar navbar-expand-lg">
            <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
    </nav>
    <div className="container">
    <Link to ="/QuizCollection/Question1"><input type="button" className="btn btn-info rounded mx-au d-block" id="start-quiz-btn" value="Start quiz"></input></Link>
    </div> 
    </>
    );
};

const Question1 = () => {

    return (
        <> 
        <nav className="navbar navbar-expand-lg">
                <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
        </nav>
        <div className="container">
        <Link to ="/QuizCollection/Question1"><input type="button" className="btn btn-info rounded mx-au d-block" id="start-quiz-btn" value="Start quiz"></input></Link>
        </div> 
        </>
        );
};


export default function QuizStart(){
    return(
    <Routes>
        <Route exact path="/" element={<QuizNav/>}></Route>
        <Route path="/QuizCollection/Question1" element={<Question1/>}></Route>
    </Routes> 
    )
}