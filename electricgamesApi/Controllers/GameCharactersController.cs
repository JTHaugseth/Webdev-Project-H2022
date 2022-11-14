using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using electricgamesApi.Service;
using electricgamesApi.Collection;

namespace electricgamesApi.Controllers;

[ApiController]
[Route("gamecharacters/[controller]")]

public class GameCharactersController : ControllerBase {

    private readonly ILogger<GameCharactersController> _logger;

    private readonly GameCharactersService _gameCharactersService;

    private readonly IWebHostEnvironment _hosting;

    public GameCharactersController(ILogger<GameCharactersController> logger, GameCharactersService gameCharactersService, IWebHostEnvironment hosting) {
        _logger = logger;
        _gameCharactersService = gameCharactersService;
        _hosting = hosting;
    }

    [HttpGet]

    public ActionResult<List<GameCharacters>> Get() {
        return _gameCharactersService.Get();
    }

    [HttpGet("{Id:length(24)}")]

    public ActionResult<GameCharacters> GetGameCharactersById(string Id) {
        var characters = _gameCharactersService.GetById(Id);
        if(characters == null) {
            return NotFound();
        }
        return characters;
    }

    [HttpGet("name/{name}")]

    public ActionResult<GameCharacters> GetGameCharactersByName(string Name) {
        var character = _gameCharactersService.GetByName(Name);
        if(character == null) {
            return NotFound();
        }
        return character;
    }

    [HttpPost] 

    public IActionResult Post([FromBody] GameCharacters newGameCharacter) {
        
        _gameCharactersService.Create(newGameCharacter);
        return CreatedAtAction(nameof(Post), new {id = newGameCharacter.Id}, newGameCharacter);
    } 

    [HttpPost("image")]
    
    public IActionResult SaveImage(IFormFile file){
        string rootPath = _hosting.WebRootPath;
        string imagePath = Path.Combine($"{rootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream(imagePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }
        return Ok();
    }

    [HttpPut("{Id}")]

    public IActionResult Update([FromRoute] string Id, [FromBody] GameCharacters updateGameCharacters) {
        var characters = _gameCharactersService.GetById(Id);
        if(characters == null) {
            return NotFound();
        } 
        _gameCharactersService.Update(Id, updateGameCharacters);
        return CreatedAtAction(nameof(Update), new {id = updateGameCharacters.Id}, updateGameCharacters);
    }

    [HttpDelete("{Id}")]

    public IActionResult DeleteById(string Id) {
        var character = _gameCharactersService.GetById(Id);
        if(character == null) {
            return NotFound();
        }
        _gameCharactersService.Remove(Id);
        return Ok();
    }
}