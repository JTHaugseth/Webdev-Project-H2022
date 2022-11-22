import {Link} from "react-router-dom";

export default function QuizMenu () {
    return (
    <> 
    <nav className="navbar navbar-expand-lg">
            <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
            <input type="button" id="start-quiz-btn" value="Start quiz"></input>
    </nav>
    </>
    )
};
