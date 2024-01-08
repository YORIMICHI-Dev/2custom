namespace API.Dtos;

public class SelectSitesDto
{
    public string Category {get; set;}
    public IEnumerable<SelectSiteDto> SelectSites {get; set;}
}
