using Microsoft.Extensions.Configuration.UserSecrets;

namespace API.Models;

public class UserSites
{
    public int UserId {get; set;}
    public int SiteId {get; set;}
    public int Order { get; set; }
    public UserSites(){}
}