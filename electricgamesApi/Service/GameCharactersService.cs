using System.Threading.Tasks.Dataflow;
using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using electricgamesApi.Collection;
using electricgamesApi.Models;

namespace electricgamesApi.Service;

public class GameCharactersService {
    
    private readonly IMongoCollection<GameCharacters> _GameCharactersCollection;

    public GameCharactersService(IOptions<ElectricGamesDBsettings> ElectricGamesDBsettings){
        
        var GameClient = new MongoClient(ElectricGamesDBsettings.Value.ConnectionString);
        var database = GameClient.GetDatabase(ElectricGamesDBsettings.Value.DatabaseName);
        _GameCharactersCollection = database.GetCollection<GameCharacters>(ElectricGamesDBsettings.Value.DataCollectionGameCharacters);
    }

    public List<GameCharacters> Get() {
        return _GameCharactersCollection.Find(_=>true).ToList();
    }
    public GameCharacters? Get(string id) {
        return _GameCharactersCollection.Find(Game=>Game.Id==id).FirstOrDefault();
    }
    public void Create(GameCharacters newGameCharacter) {
        _GameCharactersCollection.InsertOne(newGameCharacter);
    }

    public void Update(string id, GameCharacters updatedGameCharacters) {
        _GameCharactersCollection.ReplaceOne(GameCharacter=>GameCharacter.Id==id, updatedGameCharacters);
    }

    public void Remove(string id) {
        _GameCharactersCollection.DeleteOne(GameCharacters=>GameCharacters.Id==id);
    }
}
    