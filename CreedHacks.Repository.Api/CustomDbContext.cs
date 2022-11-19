using Microsoft.EntityFrameworkCore;

namespace CreedHacks.Repository.Api
{
    public class CustomDbContext : DbContext
    {
        protected override void OnConfiguring
       (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "SessionContext");
        }
        public DbSet<Session> Session { get; set; }
    }
}
