import {Routes, Route} from "react-router-dom";
import React from "react";
import GamesNav from "./Components/GameComponents/GamesNav";
import ShowAllGm from "./Components/GameComponents/ShowAllGm";
import GetGmById from "./Components/GameComponents/GetGmById";
import GetGmByTitle from "./Components/GameComponents/GetGmByTitle";
import AddNewGm from  "./Components/GameComponents/AddNewGm";
import UpdateGm from "./Components/GameComponents/UpdateGm";
import DeleteGm from "./Components/GameComponents/DeleteGm";
import SharedMenu from "./Components/MainpageComponents/SharedMenu";

// Games Menu
const GamesMenu = () => {
    return (
    <>
        <GamesNav />
       <SharedMenu /> 
    </>
    )
}


// SHOW ALL GAMES
const ShowAllGames = () => {
   return(
    <>
        <GamesNav />
        <ShowAllGm/>
    </>
    );
}

//Get by ID
const GetGameById = () => {
    return (
    <>
        <GamesNav />
        <GetGmById />
    </>
    );
}


// GET BY TITLE
const GetGameByTitle = () => {
  return (
    <>
        <GamesNav />
        <GetGmByTitle />
    </>
  );
}
// ADD NEW GAME
const AddNewGame = () => {
    return (
    <>
        <GamesNav />
        <AddNewGm />
    </>
    );
}

// UPDATE GAME
 const UpdateGame = () => {
   return (
    <>
        <GamesNav />
        <UpdateGm />
    </>
   );
}

// DELETE GAME
 const DeleteGame = () => {
    return (
    <>
        <GamesNav />
        <DeleteGm />
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








