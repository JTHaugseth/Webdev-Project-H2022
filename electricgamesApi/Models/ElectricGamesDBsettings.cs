namespace electricgamesApi.Models;
public class ElectricGamesDBsettings {
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string DataCollectionGames {get; set;} = null!;

    public string DataCollectionGameCharacters {get; set;} = null!;
}