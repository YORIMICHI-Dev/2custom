using API.Data;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
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

    [HttpGet("GetUsers/User")]
    public async Task<ActionResult<Users>> GetSingleUser()
    {
        Users loginUser = await _dataContext.Users.FirstOrDefaultAsync(user => user.Id.ToString() == User.FindFirst("userId").Value);
        if (loginUser == null) return NotFound(new ProblemDetails { Title = "User is not found." });


        return Ok(loginUser);
    }

    [HttpPut("UpdateUsersSetting/User")]
    public async Task<ActionResult> UpdateUserSetting(UpdateUserSettingDto updateUserSettingDto)
    {
        Users loginUser = await _dataContext.Users.FirstOrDefaultAsync(user => user.Id.ToString() == User.FindFirst("userId").Value);
        if (loginUser == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        // ユーザーの設定を更新
        loginUser.ColorTheme = updateUserSettingDto.ColorTheme;
        loginUser.ShowScrollButton = updateUserSettingDto.ShowScrollButton;


        _dataContext.Update(loginUser);

        int result = await _dataContext.SaveChangesAsync();
        if (result > 0) return Ok(new {Message = "Update user setting"});

        return BadRequest(new ProblemDetails { Title = "Failed to update user setting" });
    }
}