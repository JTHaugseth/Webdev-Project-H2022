import {Link} from "react-router-dom";

export default function CharactersMenu () {
    return (
    <> 
    <nav>
        <ul>
            <Link to ="/"><h1>Electric Games</h1></Link>
            <input type="button" id="show-all-characters-btn" value="Show all characters"></input>
            <input type="button" id="search-character-by-id-btn" value="Search character by id"></input>
            <input type="button" id="search-character-by-name-btn" value="Search character by name"></input>
            <input type="button" id="add-new-character-btn" value="Add new character"></input>
            <input type="button" id="update-character-btn" value="Update character"></input>
            <input type="button" id="delete-character-btn" value="Delete character"></input>
        </ul>
    </nav>
    </>
    )
};
