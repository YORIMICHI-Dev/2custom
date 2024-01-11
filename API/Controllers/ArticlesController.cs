using API.Data;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class ArticlesController : ControllerBase
{
    private readonly DataContext _dataContext;
    public ArticlesController(IConfiguration config)
    {
        _dataContext = new DataContext(config);
    }

    [HttpGet("GetArticles")]
    public async Task<ActionResult<IEnumerable<Articles>>> GetArticles()
    {
        IEnumerable<Articles> articles = await _dataContext.Articles.ToListAsync();
        if (articles == null) return NotFound();

        return Ok(articles);
    }

    [HttpPost("PostArticlesFeedRss")]
    public async Task<ActionResult> PostArticlesRssFeed()
    {
        // Rss feedよりサイトから記事を取得
        IEnumerable<Sites> sites = await _dataContext.Sites.ToListAsync();

        foreach (var site in sites)
        {
            // feed関数
            Console.WriteLine(site.RssUrl);

            // 記事をArticleインスタンス化しpost
            RegisterArticleDto registerArticle = new RegisterArticleDto
            {
                SiteId = 1,
                Title = "test",
                Url = "",
                UploadDateTime = DateTime.Now
            };
        }

        // 結果を確認

        return StatusCode(201);

        // return BadRequest(new ProblemDetails { Title = "Failed to post articles by Rss Feed"});
    }
}