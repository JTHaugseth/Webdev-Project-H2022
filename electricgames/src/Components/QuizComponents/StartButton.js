import {Link} from "react-router-dom";
const StartButton = () => {
    return (
                <div className="container">
                    <Link to ="/Quiz/Question1"><input type="button" className="btn btn-info rounded mx-auto d-block" id="start-quiz-btn" value="Start quiz"></input></Link>
                </div> 
    );
}
export default StartButton;