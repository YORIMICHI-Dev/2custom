using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]

public class SitesController : ControllerBase
{
    private readonly DataContext _entityFramework;
    public SitesController(IConfiguration config)
    {
        _entityFramework = new DataContext(config);
    }

    [HttpGet("GetSites")]
    public IEnumerable<Sites> GetSites()
    {
        IEnumerable<Sites> allSites = _entityFramework.Sites.ToList();

        return allSites;
    }
}