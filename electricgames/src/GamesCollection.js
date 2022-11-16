import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const GamesMenu = () => {
    return (
        <> 
            <nav>
                <ul>
                    <Link to="/"><h1>Electric Games</h1></Link>
                    <Link to="/GamesCollection/ShowAllGames"><input type="button" id="show-all-games-btn" value="Show all games"></input></Link>
                    <Link to="/GamesCollection/GetGameById"><input type="button" id="search-game-by-id-btn" value="Search game by id"></input></Link>
                    <input type="button" id="search-game-by-title-btn" value="Search game by title"></input>
                    <input type="button" id="add-new-game-btn" value="Add new game"></input>
                    <input type="button" id="update-game-btn" value="Update game"></input>
                    <input type="button" id="delete-game-btn" value="Delete game"></input>
                </ul>
            </nav>
            </>
    )
};

const ShowAllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games`)
        .then(response=>setGames(response.data))
        .catch(error=>console.log(error))
    });
    return (
    <>
        <nav>
                <ul>
                    <Link to="/"><h1>Electric Games</h1></Link>
                    <Link to="/GamesCollection/ShowAllGames"><input type="button" id="show-all-games-btn" value="Show all games"></input></Link>
                    <Link to="/GamesCollection/GetGameById"><input type="button" id="search-game-by-id-btn" value="Search game by id"></input></Link>
                    <input type="button" id="search-game-by-title-btn" value="Search game by title"></input>
                    <input type="button" id="add-new-game-btn" value="Add new game"></input>
                    <input type="button" id="update-game-btn" value="Update game"></input>
                    <input type="button" id="delete-game-btn" value="Delete game"></input>
                </ul>
        </nav>
            {games.map(game=>{
                return(
                    <article>
                        <p>Id:{game.id}</p>
                        <p>Title:{game.title}</p>
                        <p>platform:{game.platform}</p>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(game.image)}`} className="fluid-image" alt={game.image} ></img>
                    </article>
                )
            })}
    </>
    )
};

const GetGameById = () => {
    const [searchId, setSearchId] = useState("");

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games/${searchId}`)
        .then(response=>setSearchId(response.data))
        .catch(error=>console.log(error))
    });

    function handleSubmit (event) { 
        event.preventDefault();
    };

    return (
        <>
            <nav>
                <ul>
                    <Link to="/"><h1>Electric Games</h1></Link>
                    <Link to="/GamesCollection/ShowAllGames"><input type="button" id="show-all-games-btn" value="Show all games"></input></Link>
                    <Link to="/GamesCollection/GetGameById"><input type="button" id="search-game-by-id-btn" value="Search game by id"></input></Link>
                    <input type="button" id="search-game-by-title-btn" value="Search game by title"></input>
                    <input type="button" id="add-new-game-btn" value="Add new game"></input>
                    <input type="button" id="update-game-btn" value="Update game"></input>
                    <input type="button" id="delete-game-btn" value="Delete game"></input>
                </ul>
            </nav>
            <form onSubmit={handleSubmit}>
                <input type="text" id="game-by-id-input" placeholder="Enter Id:" onChange={(e) => setSearchId(e.target.value)}></input>
                <input type="submit" value="Submit"></input>
            </form>
            <article>
                    <p>Id:{searchId.id}</p>
                    <p>Title:{searchId.title}</p>
                    <p>platform:{searchId.platform}</p>
                    <img src={`https://localhost:7088/images/${encodeURIComponent(searchId.image)}`} className="fluid-image" alt={searchId.image} ></img>
            </article>
        </>
    )
}

export default function GamesCollection () {
    return (
        <Routes>
            <Route exact path="/" element={<GamesMenu/>}></Route>
            <Route path="/ShowAllGames" element={<ShowAllGames/>}></Route>
            <Route path="/GetGameById" element={<GetGameById/>}></Route>
        </Routes>
    )
}








