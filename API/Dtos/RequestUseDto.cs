namespace API.Dtos;

public class RequestUserDto
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string PasswordConfirm { get; set; }
    public RequestUserDto() { }
}