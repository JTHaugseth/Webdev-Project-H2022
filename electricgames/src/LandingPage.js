import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import GamesCollection from "./GamesCollection";
import CharactersMenu from "./CharactersCollection";
import MainPageContent from "./Components/MainpageComponents/MainPageComponent";
import QuizMenu from "./Quiz";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Menu = () => {
    return (
        <>
    <nav className="navbar navbar-expand-lg">
            <Link to ="/"><h1 className="navbar-brand">Electric Games</h1></Link>
            <Link className="nav-link" to="/GamesCollection">Game Collection</Link>    
            <Link className="nav-link" to="/CharactersCollection">Character Collection</Link> 
            <Link className="nav-link" to="/Quiz">Quiz</Link> 
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
                <Route path="/CharactersCollection/*" element={<CharactersMenu/>}></Route>
                <Route path="/Quiz" element={<QuizMenu/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}