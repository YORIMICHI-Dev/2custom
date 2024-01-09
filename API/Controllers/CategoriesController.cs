using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]

public class CategoriesController : ControllerBase
{
    private readonly DataContext _dataContext;
    public CategoriesController(IConfiguration config)
    {
        _dataContext = new DataContext(config);
    }

    [HttpGet("GetCategories")]
    public async Task<ActionResult<IEnumerable<Categories>>> GetCateGories()
    {
        IEnumerable<Categories> categories = await _dataContext.Categories.ToListAsync();
        if (categories == null) return NotFound();

        return Ok(categories);
    }
}