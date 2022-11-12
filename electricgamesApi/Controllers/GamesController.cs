using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using electricgamesApi.Service;
using electricgamesApi.Collection;

namespace electricgamesApi.Controllers;

[ApiController]
[Route("games/[controller]")]

public class GamesController : ControllerBase {

    private readonly ILogger<GamesController> _logger;

    private readonly GamesService _gamesService;

    private readonly IWebHostEnvironment _hosting;

    public GamesController(ILogger<GamesController> logger, GamesService gamesService, IWebHostEnvironment hosting) {
        _logger = logger;
        _gamesService = gamesService;
        _hosting = hosting;
    }

    [HttpGet]

    public ActionResult<List<Games>> Get() {
        return _gamesService.Get();
    }

    [HttpGet("{Id:length(24)}")]

    public ActionResult<Games> GetGamesById(string Id) {
        var games = _gamesService.GetById(Id);
        if(games == null) {
            return NotFound();
        }
        return games;
    }

    [HttpGet("title/{title}")]

    public ActionResult<Games> GetGamesByTitle(string Title) {
        var games = _gamesService.GetByTitle(Title);
        if(games == null) {
            return NotFound();
        }
        return games;
    }

    [HttpPost] 

    public IActionResult Post([FromBody] Games newGame) {
        
        _gamesService.Create(newGame);
        return CreatedAtAction(nameof(Post), new {id = newGame.Id}, newGame);
    } 

    [HttpPost]
    [Route("[action]")]
    
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

    public IActionResult Update([FromRoute] string Id, [FromBody] Games updateGame) {
        var game = _gamesService.GetById(Id);
        if(game == null) {
            return NotFound();
        } 
        _gamesService.Update(Id, updateGame);
        return CreatedAtAction(nameof(Update), new {id = updateGame.Id}, updateGame);
    }

    [HttpDelete("{Id}")]

    public IActionResult DeleteById(string Id) {
        var game = _gamesService.GetById(Id);
        if(game == null) {
            return NotFound();
        }
        _gamesService.Remove(Id);
        return Ok();
    }
}