namespace API.Dtos;

public class RegisterSiteDto
{
    public int SiteId { get; set; }
    public int Order { get; set; }
}

// RequestUserSitesDto クラスの定義
public class RequestRegisterSitesDto
{
    public IEnumerable<RegisterSiteDto> RegisterSites { get; set; }
}