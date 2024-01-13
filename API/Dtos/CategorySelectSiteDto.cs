namespace API.Dtos;

public class CategorySelectSiteDto
{
    public string Category { get; set; }
    public IEnumerable<SelectSiteDto> SelectSites { get; set;}

}
