using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreedHacks.Api.Data
{
    public class SessionRepository : ISessionRepository
    {
        private readonly ApplicationDbContext? _context;
        public SessionRepository(ApplicationDbContext context)
        {
            _context = context;
            var session = new Session()
            {
                UserId = "userId",
                Products = new List<Product>()
                    {
                        new Product()
                        {
                            Name = "test1"
                        }
                    }
            };
            _context?.Session?.Add(session);
            _context?.SaveChanges();
        }

        public List<Session>? GetSession()
        {
            var list = _context?.Session?.ToList();
            return list;
        }
    }
}
