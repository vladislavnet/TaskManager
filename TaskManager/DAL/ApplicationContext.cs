using Microsoft.EntityFrameworkCore;
using TaskManager.Models;

namespace TaskManager.DAL
{
    public class ApplicationContext : DbContext
    {
        public DbSet<TaskUser> Tasks { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
