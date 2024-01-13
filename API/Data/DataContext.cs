using API.Controllers;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    private readonly IConfiguration _config;

    public DataContext(IConfiguration config)
    {
        _config = config;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("DefaultConnection"),
            optionsBuilder => optionsBuilder.EnableRetryOnFailure());
        }
    }

    public virtual DbSet<Sites> Sites { get; set; }
    public virtual DbSet<Categories> Categories { get; set; }
    public virtual DbSet<Articles> Articles { get; set; }
    public virtual DbSet<Users> Users { get; set; }
    public virtual DbSet<UserSites> UserSites { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("Custom");

        modelBuilder.Entity<Sites>()
            .ToTable("Sites", "Custom")
            .HasKey(site => site.Id);
        modelBuilder.Entity<Categories>()
            .ToTable("Categories", "Custom")
            .HasKey(category => category.Id);
        modelBuilder.Entity<Articles>()
            .ToTable("Articles", "Custom")
            .HasKey(article => new { article.SiteId, article.Title });
        modelBuilder.Entity<Users>()
            .ToTable("Users", "Custom")
            .HasKey(user => user.Id);
        modelBuilder.Entity<UserSites>()
            .ToTable("UserSites", "Custom")
            .HasKey(userSite => new { userSite.UserId, userSite.SiteId });
    }
}