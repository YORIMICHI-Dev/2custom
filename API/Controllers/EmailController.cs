using API.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class EmailController : ControllerBase
{
    private readonly IConfiguration _config;

    public EmailController(IConfiguration config) {
        _config = config;
    }

    [HttpPost("FormEmail")]
    async public Task<IActionResult> FormEmail(RequestPostEmailDto requestPostEmailDto)
    {
        string smtpServer = "smtp.gmail.com";
        int smtpPort = 587;
        string userName = "yorimichi.dev";
        string password = "tgjdlwnkucpoemvn";

        var message = new MimeKit.MimeMessage();
        message.From.Add(new MimeKit.MailboxAddress(requestPostEmailDto.SenderName, requestPostEmailDto.SenderAddress));
        message.To.Add(new MimeKit.MailboxAddress(userName, "yorimichi.dev@gmail.com"));
        message.Subject = requestPostEmailDto.Subject;

        var textPart = new MimeKit.TextPart(MimeKit.Text.TextFormat.Plain);
        textPart.Text = requestPostEmailDto.Body;
        message.Body = textPart;

        using (var client = new MailKit.Net.Smtp.SmtpClient())
        {
            try
            {
                await client.ConnectAsync(smtpServer, smtpPort, MailKit.Security.SecureSocketOptions.Auto);
                await client.AuthenticateAsync(userName, password);
                await client.SendAsync(message);
                await client.DisconnectAsync(true);

                return Ok(new { Message = "Succeed to send email." });
            }
            catch(Exception e)
            {
                return BadRequest(new ProblemDetails{ Title = "Failed to send email.", Detail = $"{e.Message}"});
            }
        }


    }
}