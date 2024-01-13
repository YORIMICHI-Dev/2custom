using API.Data;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]

public class SitesController : ControllerBase
{
    private readonly DataContext _dataContext;
    public SitesController(IConfiguration config)
    {
        _dataContext = new DataContext(config);
    }

    [HttpGet("GetSelectSites")]
    public async Task<ActionResult<IEnumerable<SelectSitesDto>>> GetSites()
    {
        Users user = await _dataContext.Users.Where(user => user.Id == int.Parse(User.FindFirst("userId").Value)).FirstOrDefaultAsync();
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        // DBに保存されているサイトリストとカテゴリーリスト
        IEnumerable<Sites> sites = await _dataContext.Sites.ToListAsync();
        IEnumerable<Categories> categories = await _dataContext.Categories.ToListAsync();

        // 登録されているサイトID
        IEnumerable<int> registeredSiteIdList = await _dataContext.UserSites
            .Where(userSite => userSite.UserId == user.Id)
            .Select(userSite => userSite.SiteId)
            .ToListAsync();

        // カテゴリーごとにサイトを分類
        List<SelectSitesDto> selectSitesDtos = new List<SelectSitesDto>();
        foreach (var category in categories)
        {
            // カテゴリーが一致するサイトを抽出
            var filteredSites = sites.Where(site => site.CategoryId == category.Id).ToList();
            if (filteredSites.Count == 0) continue;

            var selectSiteDtos = filteredSites.Select(site => new SelectSiteDto
            {
                Name = site.Name,
                Url = site.Url,
                Selected = registeredSiteIdList.Contains(site.Id)
            }).ToList();

            var selectSitesDto = new SelectSitesDto
            {
                Category = category.Category,
                SelectSites = selectSiteDtos
            };
            selectSitesDtos.Add(selectSitesDto);
        }

        return Ok(selectSitesDtos);
    }

    [HttpGet("GetRegisteredSites")]
    public async Task<ActionResult<IEnumerable<int>>> GetRegisteredSites()
    {
        Users user = await _dataContext.Users.Where(user => user.Id == int.Parse(User.FindFirst("userId").Value)).FirstOrDefaultAsync();
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        IEnumerable<int> registeredSiteIdList = await _dataContext.UserSites
            .Where(userSite => userSite.UserId == user.Id)
            .Select(userSite => userSite.SiteId)
            .ToListAsync();

        return Ok(registeredSiteIdList);
    }

    [HttpPut("RegisterSites")]
    public async Task<ActionResult> RegisterSites(RequestUserSitesDto requestUserSitesDto)
    {
        if (requestUserSitesDto.SiteIdList == null || !requestUserSitesDto.SiteIdList.Any()) return BadRequest(new ProblemDetails { Title = "Site list is empty." });

        Users user = await _dataContext.Users.Where(user => user.Id == int.Parse(User.FindFirst("userId").Value)).FirstOrDefaultAsync();
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        // 既存の登録を削除し新規登録を実行
        var existingUserSites = _dataContext.UserSites.Where(userSite => userSite.UserId == user.Id);
        _dataContext.UserSites.RemoveRange(existingUserSites);

        foreach(var siteId in requestUserSitesDto.SiteIdList)
        {
            _dataContext.UserSites.Add(new UserSites { UserId = user.Id, SiteId = siteId });
        }

        // データベースを更新
        int result = await _dataContext.SaveChangesAsync();
        if (result > 0) return Ok(new { Message = "Register sites."});

        return BadRequest(new ProblemDetails { Title = "Failed to register sites." });
    }
}