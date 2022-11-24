using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using electricgamesApi.Service;
using electricgamesApi.Collection;

namespace electricgamesApi.Controllers;

[ApiController]
[Route("scoreboard/[controller]")]

public class ScoreboardController : ControllerBase {

    private readonly ILogger<ScoreboardController> _logger;

    private readonly ScoreboardService _scoreboardService;

    private readonly IWebHostEnvironment _hosting;

    public ScoreboardController(ILogger<ScoreboardController> logger, ScoreboardService scoreboardService, IWebHostEnvironment hosting) {
        _logger = logger;
        _scoreboardService = scoreboardService;
        _hosting = hosting;
    }
    
    [HttpGet]

    public ActionResult<List<Scoreboard>> Get() {
        return _scoreboardService.Get();
    }

    [HttpPost] 

    public IActionResult Post([FromBody] Scoreboard newScore) {
        
        _scoreboardService.Create(newScore);
        return CreatedAtAction(nameof(Post), new {id = newScore.Id}, newScore);
    } 

    [HttpDelete("{Name}")]

    public IActionResult DeleteById(string Name) {
        var character = _scoreboardService.GetByName(Name);
        if(character == null) {
            return NotFound();
        }
        _scoreboardService.Remove(Name);
        return Ok();
    }
}