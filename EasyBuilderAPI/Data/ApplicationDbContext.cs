using Microsoft.EntityFrameworkCore;
using EasyBuilderAPI.Models;
namespace EasyBuilderAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Component> Components { get; set; }
        public DbSet<Developer> Developers { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
           => options.UseNpgsql("Server=localhost;Database=EasyBuilder;UserName=postgres;Password=vitalikDell2020");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profile>().HasIndex(u => u.Email).IsUnique();
        }
    }
}