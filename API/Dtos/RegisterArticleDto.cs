namespace API.Dtos;

public class RegisterArticleDto
{
    public int SiteId { get; set; }
    public string Title { get; set; }
    public string Url { get; set; }
    public DateTime UploadDateTime { get; set; }
}