namespace API.Dtos;

public class SelectSiteDto
{
    public int Id {get ;set;}
    public string Name { get; set; }
    public string Url { get; set; }
    public bool Selected { get; set; }
}