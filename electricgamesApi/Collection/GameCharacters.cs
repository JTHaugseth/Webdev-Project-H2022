using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace electricgamesApi.Collection;

public class GameCharacters {

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id {get; set;}

    public string? Name {get; set;}

    // Her skal vi skrive ka "Game" karakteren kjem i fra.

    // IMAGE? 
}