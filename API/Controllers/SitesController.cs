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

    [HttpGet("GetCategorySelectSites")]
    public async Task<ActionResult<CategorySelectSitesDto>> GetCategorySelectSites()
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
        List<CategorySelectSiteDto> selectSitesDtos = new List<CategorySelectSiteDto>();
        foreach (var category in categories)
        {
            // カテゴリーが一致するサイトを抽出
            var filteredSites = sites.Where(site => site.CategoryId == category.Id).ToList();
            if (filteredSites.Count == 0) continue;

            var selectSiteDtos = filteredSites.Select(site => new SelectSiteDto
            {
                Id = site.Id,
                Name = site.Name,
                Url = site.Url,
                Selected = registeredSiteIdList.Contains(site.Id)
            }).ToList();

            var selectSitesDto = new CategorySelectSiteDto
            {
                Category = category.Category,
                SelectSites = selectSiteDtos
            };
            selectSitesDtos.Add(selectSitesDto);
        }

        CategorySelectSitesDto categorySelectSitesDto = new CategorySelectSitesDto
        {
            CategorySelectSites = selectSitesDtos
        };

        return Ok(categorySelectSitesDto);
    }

    [HttpGet("GetRegisteredSites")]
    public async Task<ActionResult<RegisteredSitesDto>> GetRegisteredSites()
    {
        Users user = await _dataContext.Users.Where(user => user.Id == int.Parse(User.FindFirst("userId").Value)).FirstOrDefaultAsync();
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        var registeredSites = _dataContext.UserSites
            .Where(us => us.UserId == user.Id)
            .Join(_dataContext.Sites,
                userSite => userSite.SiteId,
                site => site.Id,
                (userSite, site) => new { userSite, site })
            .Join(_dataContext.Categories,
                combined => combined.site.CategoryId,
                category => category.Id,
                (combined, category) => new RegisteredSiteDto
                {
                    Id = combined.userSite.SiteId,
                    Name = combined.site.Name,
                    Url = combined.site.Url,
                    Category = category.Category,
                    Order = combined.userSite.Order
                })
        .ToList();
        RegisteredSitesDto registeredSitesDto = new RegisteredSitesDto { RegisteredSites = registeredSites };

        return Ok(registeredSitesDto);
    }

    [HttpPut("RegisterSites")]
    public async Task<ActionResult> RegisterSites(RequestRegisterSitesDto requestUserSitesDto)
    {
        if (requestUserSitesDto.RegisterSites == null || !requestUserSitesDto.RegisterSites.Any()) return BadRequest(new ProblemDetails { Title = "Site list is empty." });

        Users user = await _dataContext.Users.Where(user => user.Id == int.Parse(User.FindFirst("userId").Value)).FirstOrDefaultAsync();
        if (user == null) return NotFound(new ProblemDetails { Title = "User is not found." });

        // 既存の登録を削除し新規登録を実行
        var existingUserSites = _dataContext.UserSites.Where(userSite => userSite.UserId == user.Id);
        _dataContext.UserSites.RemoveRange(existingUserSites);

        foreach (var site in requestUserSitesDto.RegisterSites)
        {
            _dataContext.UserSites.Add(new UserSites { UserId = user.Id, SiteId = site.SiteId, Order = site.Order });
        }

        // データベースを更新
        int result = await _dataContext.SaveChangesAsync();
        if (result > 0) return Ok(new { Message = "Register sites." });

        return BadRequest(new ProblemDetails { Title = "Failed to register sites." });
    }
}