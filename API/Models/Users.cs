namespace API.Models;

public class Users
{
    public int Id { get; set; }
    public string Email { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public string ColorTheme { get; set; }
    public bool ShowScrollButton { get; set;}

    public Users()
    {
        if (ColorTheme == null) ColorTheme = "BLUE_THEME";
    }
}