using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreedHacks.Repository.Api
{
    public class SessionRepository : ISessionRepository
    {
        public SessionRepository()
        {
            using (var context = new CustomDbContext())
            {
                var session = new Session()
                {
                    UserId = "userId",
                    Products = new List<string>()
                    {
                        "test1",
                        "test2"
                    }
                };

                context.Session.Add(session);
                context.SaveChanges();
            }
        }

        public List<Session> GetSession()
        {
            using (var context = new CustomDbContext())
            {
                var list = context.Session
                     .Include(a => a.Products).ToList();
                return list;
            }
        }
    }
}
