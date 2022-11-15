// GAMES

const gamesGetAllBtn = document.getElementById("getAllGamesBtn").onclick = async() => {
    try {
        const response = await axios.get(`https://localhost:7088/games/Games`);
        const allGames = response.data;

        console.log(allGames);
    } catch(error) {
        console.error(error);
    }
}
const getGameByIdBtn = document.getElementById("getGameByIdBtn").onclick = async() => {
    const input = document.getElementById("getGameById").value;
    try {
        const response = await axios.get(`https://localhost:7088/games/Games/${input}`);
        const game = response.data;
       
        console.log(game);
    } catch (error) {
        console.error(error);
    }
}
const getGameByNameBtn = document.getElementById("getGameByNameBtn").onclick = async() => {
    const input = document.getElementById("getGameByName").value;
    try {
        const response = await axios.get(`https://localhost:7088/games/Games/title/${input}`);
        const game = response.data;
        
        console.log(game);
    } catch (error) {
        console.error(error);
    }
}

const newGameBtn = document.getElementById("newGameBtn").onclick = async() => {
    const newGameId = document.getElementById("newGameId").value;
    const newGameName = document.getElementById("newGameName").value;
    const newGamePlatform = document.getElementById("newGamePlatform").value;
    const newGameYear = document.getElementById("newGameYear").value;
    const newGameImage = document.getElementById("newGameImage");

    try {
        let fd = new FormData();       
        fd.append("file", newGameImage.files[0]);
        axios.post(`https://localhost:7088/games/Games/image`, fd);

        const newGame = {id: `${newGameId}`, title: `${newGameName}`, platform: `${newGamePlatform}`, releaseYear: `${newGameYear}`, image: `${newGameImage.files[0].name}`};
        
        const addGame = await axios.post(`https://localhost:7088/games/Games`, newGame);
        const response = await axios.get(`https://localhost:7088/games/Games/${newGameId}`)
        const game = response.data;

        console.log(game);
    } catch (error) {
        console.error(error);
    }
}
const updateGameBtn = document.getElementById("updateGameBtn").onclick = async() => {
    const updateGameId = document.getElementById("updateGameId").value;
    let updateGameName = document.getElementById("updateGameName").value;
    let updateGamePlatform = document.getElementById("updateGamePlatform").value;
    let updateGameYear = document.getElementById("updateGameYear").value;

    let oldGameName;
    let oldGamePlatform;
    let oldGameYear;

    try {
        const oldGame = await axios.get(`https://localhost:7088/games/Games/${updateGameId}`);
        const oldGameData = oldGame.data;

        oldGameName = oldGameData.title;
        oldGamePlatform = oldGameData.platform;
        oldGameYear = oldGameData.releaseYear;

        if (updateGameName != "") {}else{updateGameName = oldGameName;}
        if (updateGamePlatform != "") {}else{updateGamePlatform = oldGamePlatform;}
        if (updateGameYear != "") {}else{updateGameYear = oldGameYear;}

        const updatedGame = {id: `${updateGameId}`, title: `${updateGameName}`, platform: `${updateGamePlatform}`, releaseYear: `${updateGameYear}`}

        const updateGame = await axios.put(`https://localhost:7088/games/Games/${updateGameId}`, updatedGame);
        const response = await axios.get(`https://localhost:7088/games/Games/${updateGameId}`);
        const updatedGameData = response.data;
        console.log(updatedGameData);

    } catch (error) {
        console.error(error);
    }
}
const deleteBtn = document.getElementById("removeGameBtn").onclick = async() => {
        const input = document.getElementById("removeGame").value;
        try {
            const response = await axios.delete(`https://localhost:7088/games/Games/${input}`);
        
            console.log("Game removed successfully");
        } catch(error) {
        console.error(error);
    }
}

// GAMECHARACTERS

const getAllGameCharacters = document.getElementById("getAllGameCharacters").onclick = async() => {
    try {
        const response = await axios.get(`https://localhost:7088/gamecharacters/GameCharacters`);
        const allGameCharacters = response.data;

        console.log(allGameCharacters);
    } catch(error) {
        console.error(error);
    }
}
const getCharacterByIdBtn = document.getElementById("getCharacterByIdBtn").onclick = async() => {
    const input = document.getElementById("getCharacterById").value;
    try {
        const response = await axios.get(`https://localhost:7088/gamecharacters/GameCharacters/${input}`);
        const gamecharacter = response.data;
       
        console.log(gamecharacter);
    } catch (error) {
        console.error(error);
    }
}
const getCharacterByNameBtn = document.getElementById("getCharacterByNameBtn").onclick = async() => {
    const input = document.getElementById("getCharacterByName").value;
    try {
        const response = await axios.get(`https://localhost:7088/gamecharacters/GameCharacters/name/${input}`);
        const gamecharacter = response.data;
        
        console.log(gamecharacter);
    } catch (error) {
        console.error(error);
    }
}
const newCharacterBtn = document.getElementById("newCharacterBtn").onclick = async() => {
    const newCharacterId = document.getElementById("newCharacterId").value;
    const newCharacterName = document.getElementById("newCharacterName").value;
    const newCharacterGame = document.getElementById("newCharacterGame").value;
    const newCharacterImage = document.getElementById("newCharacterImage");

    try {
        let fd = new FormData();       
        fd.append("file", newCharacterImage.files[0]);
        axios.post(`https://localhost:7088/gamecharacters/GameCharacters/image`, fd);

        const newGameCharacter = {id: `${newCharacterId}`, name: `${newCharacterName}`, game: `${newCharacterGame}`, image: `${newCharacterImage.files[0].name}`}
        
        const addCharacter = await axios.post(`https://localhost:7088/gamecharacters/GameCharacters`, newGameCharacter);
        const response = await axios.get(`https://localhost:7088/gamecharacters/GameCharacters/${newCharacterId}`)
        const gamecharacter = response.data;
        
        console.log(gamecharacter);
    } catch (error) {
        console.error(error);
    }
}
const updateCharacterBtn = document.getElementById("updateCharacterBtn").onclick = async() => {
    const updateCharacterId = document.getElementById("updateCharacterId").value;
    let updateCharacterName = document.getElementById("updateCharacterName").value;
    let updateCharacterGame = document.getElementById("updateCharacterGame").value;
    const updateCharacterImage = document.getElementById("updateCharacterImage");
   
    let oldCharacterName;
    let oldCharacterGame;
    let oldCharacterImage; 
    let currentImageName;

    try {
        const oldCharacter = await axios.get(`https://localhost:7088/gamecharacters/GameCharacters/${updateCharacterId}`);
        const oldCharacterData = oldCharacter.data;

        oldCharacterName = oldCharacterData.name;
        oldCharacterGame = oldCharacterData.game;
        oldCharacterImage = oldCharacterData.image;

        if (updateCharacterName != "") {}else{updateCharacterName = oldCharacterName;}
        if (updateCharacterGame != "") {}else{updateCharacterGame = oldCharacterGame;}
        if (updateCharacterImage.files.length == 0) {
            console.log("The file exists");
        } else {
            console.log("The file does not exist");
        }

        const updatedCharacter = {id: `${updateCharacterId}`, name: `${updateCharacterName}`, game: `${updateCharacterGame}`};

        const updateCharacter = await axios.put(`https://localhost:7088/gamecharacters/GameCharacters/${updateCharacterId}`, updatedCharacter);
        const response = await axios.get(`https://localhost:7088/gamecharacters/GameCharacters/${updateCharacterId}`);
        const updatedCharacterData = response.data;
        console.log(updatedCharacterData);
        

    } catch (error) {
        console.error(error);
    }
}
const removeCharacterBtn = document.getElementById("removeCharacterBtn").onclick = async() => {
    const input = document.getElementById("removeCharacter").value;
    try {
        const response = await axios.delete(`https://localhost:7088/gamecharacters/GameCharacters/${input}`);
    
        console.log("Character removed successfully");
    } catch(error) {
    console.error(error);
}
}
