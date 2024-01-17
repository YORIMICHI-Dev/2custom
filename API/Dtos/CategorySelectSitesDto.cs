namespace API.Dtos;

public class SelectSiteDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public bool Selected { get; set; }
}

public class CategorySelectSiteDto
{
    public string Category { get; set; }
    public IEnumerable<SelectSiteDto> SelectSites { get; set; }

}
public class CategorySelectSitesDto
{
    public IEnumerable<CategorySelectSiteDto> CategorySelectSites { get; set; }
}
