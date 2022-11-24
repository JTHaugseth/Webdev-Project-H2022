import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import GamesCollection from "./GamesCollection";
import QuizStart from "./Components/QuizComponents/Quiz";
import CharactersCollection from "./CharactersCollection";
import MainPageContent from "./Components/MainpageComponents/MainPageComponent";

const Menu = () => {
    return (
        <>
    <nav className="navbarbackground">
        <div className="row">
            <Link to ="/"><h1 className="navbrand col-lg-auto">Electric Games</h1></Link>
            <Link id="nav-item-main" className="nav-link col-lg-2 col-md-10" to="/GamesCollection">Game Collection</Link>    
            <Link id="nav-item-main" className="nav-link col-lg-2 col-md-10" to="/CharactersCollection">Character Collection</Link> 
            <Link id="nav-item-main" className="nav-link col-lg-2 col-md-10" to="/Quiz">Quiz</Link> 
        </div>
    </nav>

        <MainPageContent />
    </>
    );
};

export default function LandingPage(){

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Menu/>}></Route>
                <Route path="/GamesCollection/*" element={<GamesCollection/>}></Route>
                <Route path="/CharactersCollection/*" element={<CharactersCollection/>}></Route>
                <Route path="/Quiz/*" element={<QuizStart/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}