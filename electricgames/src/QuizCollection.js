import {Routes, Route} from "react-router-dom";
import QuizStart from "./Components/QuizComponents/Quiz";

export default function QuizCollection(){

    return (
            <Routes>
                <Route exact path="/" element={<QuizStart/>}></Route>
            </Routes>
    )
}
