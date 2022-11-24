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
    <Link to ="/Quiz/Question1"><input type="button" className="btn btn-info rounded mx-au d-block" id="start-quiz-btn" value="Start quiz"></input></Link>
    </div> 
    </>
    );
};

const Question1 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7e59563794565b7ccec5`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question2"><input type="button" id="question-1-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question2"><input type="button" id="question-1-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question2"><input type="button" id="question-1-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question2"><input type="button" id="question-1-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question2 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7ecc563794565b7ccec6`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question3"><input type="button" id="question-2-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question3"><input type="button" id="question-2-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question3"><input type="button" id="question-2-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question3"><input type="button" id="question-2-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question3 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7f8c563794565b7ccec7`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question4"><input type="button" id="question-3-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question4"><input type="button" id="question-3-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question4"><input type="button" id="question-3-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question4"><input type="button" id="question-3-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question4 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7ffe563794565b7ccec8`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question5"><input type="button" id="question-4-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question5"><input type="button" id="question-4-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question5"><input type="button" id="question-4-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question5"><input type="button" id="question-4-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question5 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e80d9563794565b7ccec9`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question6"><input type="button" id="question-5-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question6"><input type="button" id="question-5-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question6"><input type="button" id="question-5-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question6"><input type="button" id="question-5-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question6 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e8117563794565b7cceca`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question7"><input type="button" id="question-6-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question7"><input type="button" id="question-6-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question7"><input type="button" id="question-6-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question7"><input type="button" id="question-6-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question7 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e8150563794565b7ccecb`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question8"><input type="button" id="question-7-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question8"><input type="button" id="question-7-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question8"><input type="button" id="question-7-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question8"><input type="button" id="question-7-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question8 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e81da563794565b7ccecc`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question9"><input type="button" id="question-8-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question9"><input type="button" id="question-8-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question9"><input type="button" id="question-8-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question9"><input type="button" id="question-8-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question9 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e82d9563794565b7ccecd`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Question10"><input type="button" id="question-9-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Question10"><input type="button" id="question-9-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Question10"><input type="button" id="question-9-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Question10"><input type="button" id="question-9-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const Question10 = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e836e563794565b7ccece`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);
    
    return (
        <> 
        <h1>{question.question}</h1>
        <h3>Score:</h3>
        <Link to ="/Quiz/Result"><input type="button" id="question-10-answer-a" value={question.answerA}></input></Link>
        <Link to ="/Quiz/Result"><input type="button" id="question-10-answer-b" value={question.answerB}></input></Link>
        <Link to ="/Quiz/Result"><input type="button" id="question-10-answer-c" value={question.answerC}></input></Link>
        <Link to ="/Quiz/Result"><input type="button" id="question-10-answer-d" value={question.answerD}></input></Link>
        </>
        );
};

const ResultPage = () => {
    return (
        <h1>Result Page!</h1>
    );
};

export default function QuizStart(){
    return(
    <Routes>
        <Route exact path="/" element={<QuizNav/>}></Route>
        <Route path="/Question1" element={<Question1/>}></Route>
        <Route path="/Question2" element={<Question2/>}></Route>
        <Route path="/Question3" element={<Question3/>}></Route>
        <Route path="/Question4" element={<Question4/>}></Route>
        <Route path="/Question5" element={<Question5/>}></Route>
        <Route path="/Question6" element={<Question6/>}></Route>
        <Route path="/Question7" element={<Question7/>}></Route>
        <Route path="/Question8" element={<Question8/>}></Route>
        <Route path="/Question9" element={<Question9/>}></Route>
        <Route path="/Question10" element={<Question10/>}></Route>
        <Route path="/Result" element={<ResultPage/>}></Route>
    </Routes> 
    );
};