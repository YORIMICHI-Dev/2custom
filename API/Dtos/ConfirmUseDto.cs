namespace API.Dtos;

public class ConfirmUserDto
{
    public string Email {get; set;}
    public string Password {get; set;}
    public string PasswordConfirm {get; set;}
    public ConfirmUserDto(){}
}