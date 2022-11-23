import {Routes, Route} from "react-router-dom";
import CharacterNav from "./Components/CharacterComponents/CharacterNav";
import SharedMenu from "./Components/MainpageComponents/SharedMenu"
import AddnewChr from "./Components/CharacterComponents/AddnewChr";
import DeleteChr from "./Components/CharacterComponents/DeleteChr";
import GetChrById from "./Components/CharacterComponents/GetChrById";
import GetChrByName from "./Components/CharacterComponents/GetChrByName";
import ShowAllChr from "./Components/CharacterComponents/ShowAllChr";
import UpdateChr from "./Components/CharacterComponents/UpdateChr";


const CharacterMenu = () => {
    return (
    <>
        <CharacterNav />
        <SharedMenu />
    </>
    );
};

const ShowAllCharacters = () => {
    return (
        <>
            <CharacterNav />
            <ShowAllChr />
        </>
    )
}
const GetCharacterById = () => {
    return (
        <>
            <CharacterNav />
            <GetChrById />
        </>
    )
}
const GetCharacterByName = () => {
    return (
        <>
            <CharacterNav />
            <GetChrByName />
        </>
    )
}
const AddNewCharacter = () => {
    return (
        <>
            <CharacterNav />
            <AddnewChr />
        </>
    )
}
const UpdateCharacter = () => {
    return (
        <>
            <CharacterNav />
            <UpdateCharacter />
        </>
    )
}
const DeleteCharacter = () => {
    return (
        <>
            <CharacterNav />
            <DeleteChr />
        </>
    )
}


export default function CharactersCollection () {
    return (
        <Routes>
            <Route exact path="/" element={<CharacterMenu/>}></Route>
            <Route path="/ShowAllCharacters" element={<ShowAllCharacters/>}></Route>
            <Route path="/GetCharacterById" element={<GetCharacterById/>}></Route>
            <Route path="/GetCharacterByTitle" element={<GetCharacterByTitle/>}></Route>
            <Route path="/AddNewCharacter" element={<AddNewCharacter/>}></Route>
            <Route path="/UpdateCharacter" element={<UpdateCharacter/>}></Route>
            <Route path="/DeleteCharacter" element={<DeleteCharacter/>}></Route>
        </Routes>
    );

};
