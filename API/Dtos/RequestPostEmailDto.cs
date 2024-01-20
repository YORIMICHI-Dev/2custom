namespace API.Dtos;

public class RequestPostEmailDto
{
    public string SenderName { get; set; }
    public string SenderAddress { get; set; }
    public string Subject {get; set;}
    public string Body { get; set; }
}