using API.Data;
using API.Models;
using API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Authorization;
using API.Helpers;
using Microsoft.AspNetCore.Http.HttpResults;

namespace API.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly DataContext _dataContext;
    private readonly IConfiguration _config;
    private readonly AuthHelper _authHelper;
    public AuthController(IConfiguration config)
    {
        _dataContext = new DataContext(config);
        _config = config;
        _authHelper = new AuthHelper(config);
    }

    [AllowAnonymous]
    [HttpPost("Register")]
    public async Task<ActionResult> Register(RequestUserDto requestUserDto)
    {
        // パスワードと確認用パスワードが一致しているか確認
        if (requestUserDto.Password != requestUserDto.PasswordConfirm) return BadRequest(new ProblemDetails { Title = "Password and Confirm Password are not equal." });

        // すでにEmailが登録されているか確認
        Users user = await _dataContext.Users.FirstOrDefaultAsync(user => user.Email == requestUserDto.Email);
        if (user != null) return BadRequest(new ProblemDetails { Title = "Email was already registered." });

        // パスワードをハッシュ化し登録
        byte[] passwordSalt = new byte[128 / 8];
        using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
        {
            rng.GetNonZeroBytes(passwordSalt);
        }
        string passwordSaltPlusString = _config.GetSection("AppSettings:PasswordKey").Value + Convert.ToBase64String(passwordSalt);
        byte[] passwordHash = _authHelper.GetPasswordHash(requestUserDto.Password, passwordSalt);

        Users registerUser = new Users
        {
            Email = requestUserDto.Email,
            PasswordSalt = passwordSalt,
            PasswordHash = passwordHash
        };
        _dataContext.Users.Add(registerUser);

        int result = await _dataContext.SaveChangesAsync();
        if (result > 0) return Ok(new { Token = _authHelper.CreateJwtToken(registerUser.Id, registerUser.Role) });

        return BadRequest(new ProblemDetails { Title = "Failed to register user." });
    }

    [AllowAnonymous]
    [HttpPost("Login")]
    public async Task<ActionResult> Login(LoginUserDto loginUserDto)
    {
        Users user = await _dataContext.Users.FirstOrDefaultAsync(user => user.Email == loginUserDto.Email);
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        // パスワードの確認
        byte[] passwordHash = _authHelper.GetPasswordHash(loginUserDto.Password, user.PasswordSalt);
        if (!passwordHash.SequenceEqual(user.PasswordHash)) return Unauthorized(new ProblemDetails { Title = "Password is incorrect." });

        return Ok(new { Token = _authHelper.CreateJwtToken(user.Id, user.Role) });
    }

    [HttpGet("RefreshToken")]
    public async Task<IActionResult> RefreshToken()
    {
        Users user = await _dataContext.Users.Where(user => user.Id == int.Parse(User.FindFirst("userId").Value)).FirstOrDefaultAsync();
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        return Ok(new { Token = _authHelper.CreateJwtToken(user.Id, user.Role) });
    }
}