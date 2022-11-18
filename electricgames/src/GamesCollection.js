import {Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";


// NAVBAR
const GamesMenu = () => {
        return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><h1 className="navbar-brand">Electric Games</h1></Link>
            <Link to="/GamesCollection/ShowAllGames"><a className="dropdown-item">Show all games</a></Link>
            <Link to="/GamesCollection/SearchGameById"><a className="dropdown-item">Search game by ID</a></Link>
            <Link to="/GamesCollection/SearchGameByTitle"><a className="dropdown-item">Search game by title</a></Link>
            <Link to="/GamesCollection/AddNewGame"><a className="dropdown-item">Add new game</a></Link>
            <Link to="/GamesCollection/ShowAllGames"><a className="dropdown-item">Update game</a></Link>
            <Link to="/GamesCollection/ShowAllGames"><a className="dropdown-item">Delete game</a></Link>
         </nav>
           
        )
};
//-----------------------------------------------------------------------------------------------
// SHOW ALL GAMES
const ShowAllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games`)
        .then(response=>setGames(response.data))
        .catch(error=>console.log(error))
    });


    return (
    <>
        <GamesMenu/>
        
        <div className="container">
        <h1 className="pagetitle">Showing all games</h1>
        <div className="row">
        
        {games.map(game=>{
                return(
                    
                    <article className="col-md-5 col-sm-6">
                        <h4 className="title">Title: {game.title}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(game.image)}`} className="img-thumbnail" alt={game.image}></img>
                        <p className="id">Id: {game.id}</p>
                        <p className="platform">Platform: {game.platform}</p>
                    </article>
                );
            })}
   </div></div> </>
    );
};

//-----------------------------------------------------------------------------------------------
//BY ID
const GetGameById = () => {
    const [searchId, setSearchId] = useState("");
    const [result, setResult] = useState("");
    
    
    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games/${searchId}`)
        .then(response=>setSearchId(response.data))
        .catch(error=>console.log(error))
    });

 

    const handleSubmit = (event) => { 
        
        event.preventDefault();
        setResult( 
                <div className="container">
               <article className="col-md-5 col-sm-6">
                        <h4 className="title">Title: {setSearchId.title}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(searchId.image)}`} className="img-thumbnail" alt={searchId.image}></img>
                        <p className="id">Id: {searchId.id}</p>
                        <p className="platform">Platform: {searchId.platform}</p>
                    </article></div>
        ); 
    };
    return (
        <>
           <GamesMenu/>
          
           <div className="container">
           <h1 className="pagetitle">Search game by ID</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="search-game-by-id-input" placeholder="Enter Id:" onChange={(e) => setSearchId(e.target.value)}></input>
                <input className="btn btn-primary" type="submit" id="search-game-by-id-btn" value="Submit"></input>
                
            </form> </div>
            {result}
        </>
    )
}

//-------------------------------------------------------------------------------------------------------------------------------------------
// BY TITLE
const GetGameByTitle = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [result, setResult] = useState("")

    useEffect(() => {
        axios.get(`https://localhost:7088/games/Games/title/${searchTitle}`)
        .then(response=>setSearchTitle(response.data))
        .catch(error=>console.log(error))
    });

    const handleSubmit = (event) => { 
        event.preventDefault();
        setResult( 
          
            <div className="container">
               <article className="col-md-5 col-sm-6">
                        <h4 className="title">Title: {setSearchTitle.title}</h4>
                        <img src={`https://localhost:7088/images/${encodeURIComponent(searchTitle.image)}`} className="img-thumbnail" alt={searchTitle.image}></img>
                        <p className="id">Id: {searchTitle.id}</p>
                        <p className="platform">Platform: {searchTitle.platform}</p>
                    </article></div>
        ); 
    };

    return (
        <>
            <GamesMenu/>
           <div className="container">
            <h1 className="pagetitle">Search game by Title</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="search-game-by-title-input" placeholder="Enter Title:" onChange={(e) => setSearchTitle(e.target.value)}></input>
                    <input className="btn btn-primary" type="submit" id="search-game-by-title-btn" value="Submit"></input>
                </form> 
            </div>
            {result}
        </>
    )

}

//-----------------------------------------------------------------------------------------------
// ADD NEW GAME
const AddNewGame = () => {
    const [id, setId] = useState("");
    const [title, setGameTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [image, setImage] = useState("");
    const [newGame, setNewGame] = useState([]);

    useEffect(() =>{
        setNewGame({id, title, platform, releaseYear, image})
    },[id, title, platform, releaseYear, image])

    async function handleSubmit (event) {
        event.preventDefault()
        await postNewGame(newGame, selectedImage);
    }
    const handleFiles = (event) => {
        setSelectedImage(event.target.files[0]);
        setImage(event.target.files[0].name);
    }

    const postNewGame = async(newGame, selectedImage) => {
        await axios.post(`https://localhost:7088/games/Games`, JSON.stringify(newGame),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{console.log(response)})
        .catch(error => {console.log(error)});

        const fd = new FormData();
        fd.append("file", selectedImage);
        try {
            const response = await axios({
                method: "post",
                url: `https://localhost:7088/games/Games/image`,
                data: fd,
                headers: {"Content-Type": "multipart/form-data"}
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <GamesMenu/>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <h1>Add new game</h1>
            <div className="row">
                <article id="form" className="col-md-11 col-sm-6">
                    <input type="text" id="add-game-id" placeholder="Enter a game id" onChange={(e)=>setId(e.target.value)}></input>
                    <input type="text" id="add-game-title" placeholder="Enter a game title" onChange={(e)=>setGameTitle(e.target.value)}></input>
                    <input type="text" id="add-game-platform" placeholder="Enter a platform" onChange={(e)=>setPlatform(e.target.value)}></input>
                    <input type="text" id="add-game-release-year" placeholder="Enter a release year" onChange={(e)=>setReleaseYear(e.target.value)}></input>
                    <input type="submit" className="btn btn-success" id="add-game-btn" value="Submit"></input>           
                    <input type="file" id="add-game-image"  onChange={handleFiles}></input>
                    
                </article>
               
                </div>
                           
            </form>
            </div>
        </>
    )

 }

 //-----------------------------------------------------------------------------------------------
 //Export

export default function GamesCollection () {

    return (
        <Routes>
            <Route exact path="/" element={<GamesMenu/>}></Route>
            <Route path="/ShowAllGames" element={<ShowAllGames/>}></Route>
            <Route path="/SearchGameById" element={<GetGameById/>}></Route>
            <Route path="/SearchGameByTitle" element={<GetGameByTitle/>}></Route>
            <Route path="/AddNewGame" element={<AddNewGame/>}></Route>
        </Routes>
    )
}








