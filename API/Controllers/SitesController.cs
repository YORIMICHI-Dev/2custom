using API.Data;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

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
        IEnumerable<Sites> sites = await _dataContext.Sites.ToListAsync();
        IEnumerable<Categories> categories = await _dataContext.Categories.ToListAsync();

        // カテゴリーごとにサイトを分類
        List<SelectSitesDto> selectSitesDtos = new List<SelectSitesDto>();
        foreach (var category in categories)
        {
            // カテゴリーが一致するサイト
            var filteredSites = sites.Where(site => site.CategoryId == category.Id).ToList();
            if (filteredSites.Count == 0) continue;

            var selectSiteDtos = filteredSites.Select(site => new SelectSiteDto
            {
                Name = site.Name,
                Url = site.Url,
                Selected = false
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
}