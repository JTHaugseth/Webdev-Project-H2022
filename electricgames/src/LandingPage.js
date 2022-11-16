import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import GamesCollection from "./GamesCollection";
import CharactersMenu from "./CharactersCollection";
import QuizMenu from "./Quiz";

const Menu = () => {
    return (
    <> 
    <nav>
        <ul>
            <Link to ="/"><h1>Electric Games</h1></Link>
            <Link to="/GamesCollection"><input type="button" value="Games Collection"></input></Link>    
            <Link to="/CharactersCollection"><input type="button" value="Characters Collection"></input></Link> 
            <Link to="/Quiz"><input type="button" value="Quiz"></input></Link> 
        </ul>
    </nav>
    </>
    )
};

export default function LandingPage(){

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Menu/>}></Route>
                <Route path="/GamesCollection/*" element={<GamesCollection/>}></Route>
                <Route path="/CharactersCollection" element={<CharactersMenu/>}></Route>
                <Route path="/Quiz" element={<QuizMenu/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}