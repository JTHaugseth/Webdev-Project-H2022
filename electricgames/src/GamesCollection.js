import {Routes, Route} from "react-router-dom";
import React from "react";
import GamesMenu from "./Components/GamesMenu";
import ShowAllGamesComponent from "./Components/ShowAllGamesComponent";
import GetGameByIdComponent from "./Components/GetGameByIdComponent";
import GetGameByTitleComponent from "./Components/GetGameByTitleComponent";
import AddNewGameComponent from  "./Components/AddNewGameComponent";
import UpdateGameComponent from "./Components/UpdateGameComponent";
import DeleteGameComponent from "./Components/DeleteGameComponent";

// SHOW ALL GAMES
const ShowAllGames = () => {
   return(
    <>
        <GamesMenu />
        <ShowAllGamesComponent/>
    </>
    );
}

//Get by ID
const GetGameById = () => {
    return (
    <>
        <GamesMenu />
        <GetGameByIdComponent />
    </>
    );
}


// GET BY TITLE
const GetGameByTitle = () => {
  return (
    <>
        <GamesMenu />
        <GetGameByTitleComponent />
    </>
  );
}
// ADD NEW GAME
const AddNewGame = () => {
    return (
    <>
        <GamesMenu />
        <AddNewGameComponent />
    </>
    );
}

// UPDATE GAME
 const UpdateGame = () => {
   return (
    <>
        <GamesMenu />
        <UpdateGameComponent />
    </>
   );
}

// DELETE GAME
 const DeleteGame = () => {
    return (
    <>
        <GamesMenu />
        <DeleteGameComponent />
    </>
    );
}

 //Export

export default function GamesCollection () {

    return (
        <Routes>
            <Route exact path="/" element={<GamesMenu/>}></Route>
            <Route path="/ShowAllGames" element={<ShowAllGames/>}></Route>
            <Route path="/SearchGameById" element={<GetGameById/>}></Route>
            <Route path="/SearchGameByTitle" element={<GetGameByTitle/>}></Route>
            <Route path="/AddNewGame" element={<AddNewGame/>}></Route>
            <Route path="/UpdateGame" element={<UpdateGame/>}></Route>
            <Route path="/DeleteGame" element={<DeleteGame/>}></Route>
        </Routes>
    );
}








