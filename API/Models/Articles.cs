namespace API.Models;

public class Articles
{
    public int Id { get; set; }
    public int SiteId { get; set; }
    public string Title { get; set; }
    public string Url { get; set; }
    public DateTime UploadDateTime { get; set; }
}