import {Link} from "react-router-dom";

export default function QuizMenu () {
    return (
    <> 
    <nav>
        <ul>
            <Link to ="/"><h1>Electric Games</h1></Link>
            <input type="button" id="start-quiz-btn" value="Start quiz"></input>
        </ul>
    </nav>
    </>
    )
};
