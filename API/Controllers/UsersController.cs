using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly DataContext _dataContext;
    public UsersController(IConfiguration config)
    {
        _dataContext = new DataContext(config);
    }

    [HttpGet("GetUsers")]
    public async Task<ActionResult<IEnumerable<Users>>> Getusers()
    {
        IEnumerable<Users> users = await _dataContext.Users.ToListAsync();
        if (users.Count() == 0) return NotFound();

        return Ok(users);
    }

    [HttpGet("GetUsers/User/{userId}")]
    public async Task<ActionResult<Users>> GetSingleUser(int userId)
    {
        Users user = await _dataContext.Users.FindAsync(userId);
        if (user == null) return NotFound();

        return Ok(user);
    }
}