import {Routes, Route} from "react-router-dom";
import React from "react";
import GamesNav from "./Components/GameComponents/GamesNav";
import ShowAllGamesComponent from "./Components/GameComponents/ShowAllGamesComponent";
import GetGameByIdComponent from "./Components/GameComponents/GetGameByIdComponent";
import GetGameByTitleComponent from "./Components/GameComponents/GetGameByTitleComponent";
import AddNewGameComponent from  "./Components/GameComponents/AddNewGameComponent";
import UpdateGameComponent from "./Components/GameComponents/UpdateGameComponent";
import DeleteGameComponent from "./Components/GameComponents/DeleteGameComponent";
import GamesMenuComponent from "./Components/GameComponents/GamesMenuComponent";

// Games Menu
const GamesMenu = () => {
    return (
    <>
        <GamesNav />
       <GamesMenuComponent /> 
    </>
    )
}


// SHOW ALL GAMES
const ShowAllGames = () => {
   return(
    <>
        <GamesNav />
        <ShowAllGamesComponent/>
    </>
    );
}

//Get by ID
const GetGameById = () => {
    return (
    <>
        <GamesNav />
        <GetGameByIdComponent />
    </>
    );
}


// GET BY TITLE
const GetGameByTitle = () => {
  return (
    <>
        <GamesNav />
        <GetGameByTitleComponent />
    </>
  );
}
// ADD NEW GAME
const AddNewGame = () => {
    return (
    <>
        <GamesNav />
        <AddNewGameComponent />
    </>
    );
}

// UPDATE GAME
 const UpdateGame = () => {
   return (
    <>
        <GamesNav />
        <UpdateGameComponent />
    </>
   );
}

// DELETE GAME
 const DeleteGame = () => {
    return (
    <>
        <GamesNav />
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








