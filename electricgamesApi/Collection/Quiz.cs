using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace electricgamesApi.Collection;

public class Quiz {

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id {get; set;}

    public string? Question {get; set;}

    public string? AnswerA {get; set;}

    public string? AnswerB {get; set;}

    public string? AnswerC {get; set;}
    
    public string? AnswerD {get; set;}
}