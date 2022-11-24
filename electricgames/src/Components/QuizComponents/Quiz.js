import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LHUrl from "../LHUrl"

 const QuizMenu = () => {
    const [scoreboard, setScoreboard] = useState([]);
    const [deleteName, setDeleteName] = useState("");

    //Gets all the games in an array
    useEffect(() => {
        axios.get(`${LHUrl}/scoreboard/Scoreboard`)
        .then(response=>setScoreboard(response.data))
        .catch(error=>console.log(error))
    }, []);

    const deletePlayer = async() => {
        await axios.delete(`${LHUrl}/scoreboard/Scoreboard/${deleteName}`)
        .catch(error => {console.log(error)});

        await axios.get(`${LHUrl}/scoreboard/Scoreboard`)
        .then(response=>setScoreboard(response.data))
        .catch(error=>console.log(error))
    }

     return (
        <>   
        <nav className="navbar navbar-expand-lg">
        <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
        <Link className="nav-link" to="/GamesCollection">Game Collection</Link>    
        <Link className="nav-link" to="/CharactersCollection">Character Collection</Link> 
        <Link className="nav-link" to="/Quiz">Quiz</Link> 
        </nav>
         <div>
            <h4 className="pageidentifier">Quiz</h4>
          </div>
        <div className="container">
            <Link to ="/Quiz/Question1"><input type="button" className="btn btn-info rounded mx-auto d-block" id="start-quiz-btn" value="Start quiz"></input></Link>
        </div> 
        <h1>Scoreboard</h1>
        <input type="text" id="delete-game" placeholder="Player name" onChange={(e)=>setDeleteName(e.target.value)}></input>
        <input type="button" id="delete-score-btn" value="Delete" onClick={deletePlayer}></input>
        {scoreboard.map(score=>{
                return(
                    <article key={score.id} className="col-md-5 col-sm-6">
                        <h4 className="Name">Name: {score.name}</h4>
                        <p className="Score">Score: {score.score}</p>
                    </article>
                );
            })}
        </>
     );
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 1
const Question1 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7e59563794565b7ccec5`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))

        Score.score = 0;
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-1-answer-a").disabled = true;
        document.getElementById("question-1-answer-b").disabled = true;
        document.getElementById("question-1-answer-c").disabled = true;
        document.getElementById("question-1-answer-d").disabled = true;
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question2"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-1-answer-a").disabled = true;
        document.getElementById("question-1-answer-b").disabled = true;
        document.getElementById("question-1-answer-c").disabled = true;
        document.getElementById("question-1-answer-d").disabled = true;
        
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question2"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
            <h3 className="score">Score: {Score.score}</h3>
            <div className="container">
                <div className="quizbox">
                    <h1 className="question">{question.question}Hei på deg</h1>
                    <div className="row" id="alternatives"> 
                        <input type="button" className="btn btn-secondary col-5" id="question-1-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                        <input type="button" className="btn btn-secondary col-5" id="question-1-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                        <input type="button" className="btn btn-secondary col-5" id="question-1-answer-c" value={`${question.answerC}`} onClick={handleCorrect}></input>
                        <input type="button" className="btn btn-secondary col-5" id="question-1-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>
                    </div>
                {result}
                </div>
            </div>
      
        </>
        );
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 2
const Question2 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7ecc563794565b7ccec6`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-2-answer-a").disabled = true;
        document.getElementById("question-2-answer-b").disabled = true;
        document.getElementById("question-2-answer-c").disabled = true;
        document.getElementById("question-2-answer-d").disabled = true;

        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question3"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-2-answer-a").disabled = true;
        document.getElementById("question-2-answer-b").disabled = true;
        document.getElementById("question-2-answer-c").disabled = true;
        document.getElementById("question-2-answer-d").disabled = true;
        
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question3"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    return (
        <> 
            <h3 className="score">Score: {Score.score}</h3>
            <div className="container">
                <div className="quizbox">
                    <h1 className="question">{question.question}</h1>
                    <div className="row" id="alternatives"> 
                        <input type="button" className="btn btn-secondary col-5" id="question-2-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                        <input type="button" className="btn btn-secondary col-5" id="question-2-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                        <input type="button" className="btn btn-secondary col-5" id="question-2-answer-c" value={`${question.answerC}`} onClick={handleCorrect}></input>
                        <input type="button" className="btn btn-secondary col-5" id="question-2-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>

            </div>
                        {result}
                </div>
                    </div>
      
        </>
        );
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 3
const Question3 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7f8c563794565b7ccec7`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-3-answer-a").disabled = true;
        document.getElementById("question-3-answer-b").disabled = true;
        document.getElementById("question-3-answer-c").disabled = true;
        document.getElementById("question-3-answer-d").disabled = true;
        
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question4"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-3-answer-a").disabled = true;
        document.getElementById("question-3-answer-b").disabled = true;
        document.getElementById("question-3-answer-c").disabled = true;
        document.getElementById("question-3-answer-d").disabled = true;
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question4"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-3-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-3-answer-b" value={`${question.answerB}`} onClick={handleCorrect}></input>
                <input type="button" id="question-3-answer-c" className="btn btn-secondary col-5" value={`${question.answerC}`} onClick={handleWrong}></input>
                <input type="button" id="question-3-answer-d" className="btn btn-secondary col-5" value={`${question.answerD}`} onClick={handleWrong}></input>

        </div>
                    {result}
            </div>
                </div>
  
        </>
        
       
        );
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 4
const Question4 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e7ffe563794565b7ccec8`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-4-answer-a").disabled = true;
        document.getElementById("question-4-answer-b").disabled = true;
        document.getElementById("question-4-answer-c").disabled = true;
        document.getElementById("question-4-answer-d").disabled = true;
        
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnwer">Correct answer!</h3>
             <Link to="/Quiz/Question5"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-4-answer-a").disabled = true;
        document.getElementById("question-4-answer-b").disabled = true;
        document.getElementById("question-4-answer-c").disabled = true;
        document.getElementById("question-4-answer-d").disabled = true;
        
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question5"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-4-answer-a" value={`${question.answerA}`} onClick={handleCorrect}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-4-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-4-answer-c" value={`${question.answerC}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-4-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>

        </div>
                    {result}
            </div>
                </div>
  
        </>
        );
};


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 5
const Question5 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e80d9563794565b7ccec9`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-5-answer-a").disabled = true;
        document.getElementById("question-5-answer-b").disabled = true;
        document.getElementById("question-5-answer-c").disabled = true;
        document.getElementById("question-5-answer-d").disabled = true;
        
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question6"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-5-answer-a").disabled = true;
        document.getElementById("question-5-answer-b").disabled = true;
        document.getElementById("question-5-answer-c").disabled = true;
        document.getElementById("question-5-answer-d").disabled = true;
        
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question6"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-5-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-5-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-5-answer-c" value={`${question.answerC}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-5-answer-d" value={`${question.answerD}`} onClick={handleCorrect}></input>

        </div>
                    {result}
            </div>
                </div>
        </>
    
        );
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 6
const Question6 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e8117563794565b7cceca`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-6-answer-a").disabled = true;
        document.getElementById("question-6-answer-b").disabled = true;
        document.getElementById("question-6-answer-c").disabled = true;
        document.getElementById("question-6-answer-d").disabled = true;
        
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question7"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-6-answer-a").disabled = true;
        document.getElementById("question-6-answer-b").disabled = true;
        document.getElementById("question-6-answer-c").disabled = true;
        document.getElementById("question-6-answer-d").disabled = true;
        
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question7"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-6-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-6-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-6-answer-c" value={`${question.answerC}`} onClick={handleCorrect}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-6-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>

        </div>
                    {result}
            </div>
                </div>
        </>
        );
};


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 7
const Question7 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e8150563794565b7ccecb`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-7-answer-a").disabled = true;
        document.getElementById("question-7-answer-b").disabled = true;
        document.getElementById("question-7-answer-c").disabled = true;
        document.getElementById("question-7-answer-d").disabled = true;
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question8"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-7-answer-a").disabled = true;
        document.getElementById("question-7-answer-b").disabled = true;
        document.getElementById("question-7-answer-c").disabled = true;
        document.getElementById("question-7-answer-d").disabled = true;
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question8"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-7-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-7-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-7-answer-c" value={`${question.answerC}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-7-answer-d" value={`${question.answerD}`} onClick={handleCorrect}></input>

        </div>
                    {result}
            </div>
                </div>
        </>
        );
};


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 8
const Question8 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e81da563794565b7ccecc`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-8-answer-a").disabled = true;
        document.getElementById("question-8-answer-b").disabled = true;
        document.getElementById("question-8-answer-c").disabled = true;
        document.getElementById("question-8-answer-d").disabled = true;
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question9"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-8-answer-a").disabled = true;
        document.getElementById("question-8-answer-b").disabled = true;
        document.getElementById("question-8-answer-c").disabled = true;
        document.getElementById("question-8-answer-d").disabled = true;
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question9"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-8-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-8-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-8-answer-c" value={`${question.answerC}`} onClick={handleCorrect}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-8-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>

        </div>
                    {result}
            </div>
                </div>
        </>
      
        );
};


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 9
const Question9 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e82d9563794565b7ccecd`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-9-answer-a").disabled = true;
        document.getElementById("question-9-answer-b").disabled = true;
        document.getElementById("question-9-answer-c").disabled = true;
        document.getElementById("question-9-answer-d").disabled = true;
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Question10"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-9-answer-a").disabled = true;
        document.getElementById("question-9-answer-b").disabled = true;
        document.getElementById("question-9-answer-c").disabled = true;
        document.getElementById("question-9-answer-d").disabled = true;
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Question10"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-9-answer-a" value={`${question.answerA}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-9-answer-b" value={`${question.answerB}`} onClick={handleCorrect}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-9-answer-c" value={`${question.answerC}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-9-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>

        </div>
                    {result}
            </div>
                </div>
        </>
     );
};


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 10
const Question10 = ({Score}) => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get(`${LHUrl}/quiz/Quiz/637e836e563794565b7ccece`)
        .then(response=>setQuestion(response.data))
        .catch(error=>console.log(error))
    }, []);

    const handleCorrect = (event) => {
        document.getElementById("question-10-answer-a").disabled = true;
        document.getElementById("question-10-answer-b").disabled = true;
        document.getElementById("question-10-answer-c").disabled = true;
        document.getElementById("question-10-answer-d").disabled = true;
        Score.score ++;
        setResult(
            <>           
             <h3 className="correctAnswer">Correct answer!</h3>
             <Link to="/Quiz/Result"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };

    const handleWrong = (event) => {
        document.getElementById("question-10-answer-a").disabled = true;
        document.getElementById("question-10-answer-b").disabled = true;
        document.getElementById("question-10-answer-c").disabled = true;
        document.getElementById("question-10-answer-d").disabled = true;
        setResult(
            <>           
             <h3 className="wrongAnswer">Wrong answer!</h3>
             <Link to="/Quiz/Result"><input type="button" className="btn btn-light" id="next-question-btn" value="Next Question"></input></Link>
            </>
        )
    };
    
    return (
        <> 
        <h3 className="score">Score: {Score.score}</h3>
        <div className="container">
            <div className="quizbox">
                <h1 className="question">{question.question}</h1>
                <div className="row" id="alternatives"> 
                <input type="button" className="btn btn-secondary col-5" id="question-10-answer-a" value={`${question.answerA}`} onClick={handleCorrect}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-10-answer-b" value={`${question.answerB}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-10-answer-c" value={`${question.answerC}`} onClick={handleWrong}></input>
                <input type="button" className="btn btn-secondary col-5" id="question-10-answer-d" value={`${question.answerD}`} onClick={handleWrong}></input>

        </div>
                    {result}
            </div>
                </div>
        </>
     
    );
};

const ResultPage = ({Score}) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [newScore, setNewScore] = useState([]);
    const [result, setResult] = useState("");

    useEffect(() =>{
        setScore(`${Score.score}`);
        setNewScore({name, score})
    },[name, score])
    
    const SaveScore = async() => {
        document.getElementById("save-score-btn").disabled = true;
        await axios.post(`${LHUrl}/scoreboard/Scoreboard`, JSON.stringify(newScore),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{console.log(response)})
    .catch(error => {console.log(error)});
    setResult(
        <>
        <h3>Score has been saved!</h3>
        <Link to ="/Quiz"><input type="button" className="btn btn-info rounded mx-auto d-block" id="start-quiz-btn" value="To Scoreboard"></input></Link>
        </>
    )
    }

    
    return (
        <>
        <nav className="navbar navbar-expand-lg">
        <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
        <Link className="nav-link" to="/GamesCollection">Game Collection</Link>    
        <Link className="nav-link" to="/CharactersCollection">Character Collection</Link> 
        <Link className="nav-link" to="/Quiz">Quiz</Link> 
        </nav>
        <h1>You got {Score.score}/10 points</h1>
        <article><h3>Do you want to save this score?</h3>
        <input type="text" id="input-name-score-save" placeholder="Type your name" onChange={(e)=>setName(e.target.value)}></input>
        <input type="button" id="save-score-btn" value="Save" onClick={SaveScore}></input>
        </article>
        {result}
        </>
    );
};

export default function QuizStart(){
    const Score = () => {
        const score = 0;
    }
    
    return(
    <Routes>
        <Route exact path="/" element={<QuizMenu/>}></Route>
        <Route path="/Question1" element={<Question1 Score={Score}/>}></Route>
        <Route path="/Question2" element={<Question2 Score={Score}/>}></Route>
        <Route path="/Question3" element={<Question3 Score={Score}/>}></Route>
        <Route path="/Question4" element={<Question4 Score={Score}/>}></Route>
        <Route path="/Question5" element={<Question5 Score={Score}/>}></Route>
        <Route path="/Question6" element={<Question6 Score={Score}/>}></Route>
        <Route path="/Question7" element={<Question7 Score={Score}/>}></Route>
        <Route path="/Question8" element={<Question8 Score={Score}/>}></Route>
        <Route path="/Question9" element={<Question9 Score={Score}/>}></Route>
        <Route path="/Question10" element={<Question10 Score={Score}/>}></Route>
        <Route path="/Result" element={<ResultPage Score={Score}/>}></Route>
    </Routes> 
    );
};