import axios from "axios";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const Menu = () => {
    return (
    <> 
    <div className="container">
        <h3 className="my-2">Get all games</h3>
            <Link to="/AllGames">
                <input className="my-2" type="button" value="Get"></input>
            </Link>
        <h3 className="my-2">Get a game by id or title</h3>
            <Link to="/SearchGame">
                <input className="my-2" type="button" value="Search"></input>
            </Link>
        <h3 className="my-2">Get a game by Name</h3>
            <input clasName="my-2" type="button" value="Search"></input>
            
        </div>
    </>
    )
};

const GetAllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games`)
        .then(response=>setGames(response.data))
        .catch(error=>console.log(error))
    });
    return (
    <>
        {games.map(game=>{
            return(
                <>
                    <p>Id:{game.id}</p>
                    <p>Title:{game.title}</p>
                    <p>platform:{game.platform}</p>
                    <img src={`https://localhost:7088/images/${encodeURIComponent(game.image)}`} className="fluid-image" alt={game.image} ></img>
                </>
            )
        })}
    </>
    )
};


const SearchGame = () => {
    const [searchId, setSearchId] = useState("");
    const [searchTitle, setSearchTitle] = useState("");

    function searchGameById () {
        axios.get(`https://localhost:7088/games/Games/${searchId}`)
        .then(response=>setSearchId(response.data))
        .catch(error=>console.log(error))

        return (
            <>
                <p>Id:{searchId.id}</p>
                <p>Title:{searchId.title}</p>
                <p>platform:{searchId.platform}</p>
                <img src={`https://localhost:7088/images/${encodeURIComponent(searchId.image)}`} className="fluid-image" alt={searchId.image} ></img>
            </>
        )
    };

    function searchGameByTitle () {
        axios.get(`https://localhost:7088/games/Games/${searchTitle}`)
        .then(response=>setSearchTitle(response.data))
        .catch(error=>console.log(error))

        return (
            <>
                <p>Id:{searchTitle.id}</p>
                <p>Title:{searchTitle.title}</p>
                <p>platform:{searchTitle.platform}</p>
                <img src={`https://localhost:7088/images/${encodeURIComponent(searchTitle.image)}`} className="fluid-image" alt={searchTitle.image} ></img>
            </>
        )
    }

    return (
        <div>
            <div>
                <h3>Search Game by Id</h3>
                <div>
                    <input type="text" id="search-game-Id" placeholder="Enter the Game Id" onChange={(e)=>setSearchId(e.target.value)}></input>
                </div>                
                <button id="search-game-id-btn" onClick={searchGameById}>Search By Id</button>
            </div>

            <div>
                <h3>Search Game By Title</h3>
                <div>
                    <input type="text" id="search-game-title" placeholder="Enter the Game Title" onChange={(e)=>setSearchTitle(e.target.value)}></input>
                </div>                
                <button id="search-game-title-btn" onClick={searchGameByTitle}>Search By Title</button>
            </div>
        </div>
    );
}

/*const SearchByName =()=>{
    const [searchName, setSearchName] = useState("");

    useEffect(()=>{
        axios.get(`https://localhost:7088/games/Games/${searchName}`)
        .then((response)=>setSearchName(response.data))
        .catch(error=>console.log(error))
    });
}*/


export default function GamesCollection(){

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Menu/>}></Route>
                <Route path="/AllGames" element={<GetAllGames/>}></Route>
                <Route path="/SearchGame" element={<SearchGame/>}></Route>
            </Routes>
        </BrowserRouter>
        )
}

