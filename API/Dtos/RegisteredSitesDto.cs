namespace API.Dtos;

public class RegisteredSiteDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public string Category { get; set; }
    public int Order { get; set; }
}

public class RegisteredSitesDto
{
    public IEnumerable<RegisteredSiteDto> RegisteredSites { get; set; }
    public RegisteredSitesDto() { }
}