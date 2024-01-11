using API.Data;
using API.Models;
using API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Text;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly DataContext _dataContext;
    private readonly IConfiguration _config;
    public AuthController(IConfiguration config)
    {
        _dataContext = new DataContext(config);
        _config = config;
    }

    [HttpPost("Register")]
    public async Task<ActionResult> Register(ConfirmUserDto confirmUserDto)
    {
        // パスワードと確認用パスワードが一致しているか確認
        if (confirmUserDto.Password != confirmUserDto.PasswordConfirm) return BadRequest(new ProblemDetails { Title = "Password and Confirm Password are not equal." });

        // すでにEmailが登録されているか確認
        Users user = await _dataContext.Users.FirstOrDefaultAsync(user => user.Email == confirmUserDto.Email);
        if (user != null) return BadRequest(new ProblemDetails { Title = "Email was already registered." });

        // パスワードをハッシュ化し登録
        byte[] passwordSalt = new byte[128 / 8];
        using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
        {
            rng.GetNonZeroBytes(passwordSalt);
        }
        string passwordSaltPlusString = _config.GetSection("AppSettings:PasswordKey").Value + Convert.ToBase64String(passwordSalt);
        byte[] passwordHash = GetPasswordHash(confirmUserDto.Password, passwordSalt);

        Users registerUser = new Users
        {
            Email = confirmUserDto.Email,
            PasswordSalt = passwordSalt,
            PasswordHash = passwordHash
        };
        _dataContext.Users.Add(registerUser);

        int result = await _dataContext.SaveChangesAsync();
        if (result > 0) return CreatedAtAction(nameof(Register), new { id = registerUser.Id }, registerUser.Email);

        return BadRequest(new ProblemDetails { Title = "Failed to register user." });
    }

    [HttpPost("Login")]
    public async Task<ActionResult> Login(LoginUserDto loginUserDto)
    {
        Users user = await _dataContext.Users.FirstOrDefaultAsync(user => user.Email == loginUserDto.Email);
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        // パスワードの確認
        byte[] passwordHash = GetPasswordHash(loginUserDto.Password, user.PasswordSalt);
        if (!passwordHash.SequenceEqual(user.PasswordHash)) return Unauthorized(new ProblemDetails { Title = "Password is incorrect." });

        return Ok(new { Message = "Login successful" });
    }

    private byte[] GetPasswordHash(string password, byte[] passwordSalt)
    {
        string passwordSaltPlusString = _config.GetSection("AppSettings:PasswordKey").Value + Convert.ToBase64String(passwordSalt);

        return KeyDerivation.Pbkdf2(
            password: password,
            salt: Encoding.ASCII.GetBytes(passwordSaltPlusString),
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 1000000,
            numBytesRequested: 256 / 8
        );
    }
}