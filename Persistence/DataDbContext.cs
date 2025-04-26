using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataDbContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public DbSet<Activity> Activities { get; set; }
    }
}