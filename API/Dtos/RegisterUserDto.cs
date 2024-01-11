namespace API.Dtos;

public class RegisterUserDto
{
    public string Email { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }

    public RegisterUserDto() { }
}