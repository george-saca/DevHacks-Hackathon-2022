using CreedHacks.Api.Models;
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
                UserId = 12345,
                Products = new List<Product>()
                    {
                        new Product()
                        {
                            Title= "Test",
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

        public async Task DeleteAsync(CartProductRemove productRemoveData)
        {
            var sessionFound = _context.Session.First(x => x.UserId == productRemoveData.UserId);
            if (sessionFound != null)
            {
                sessionFound.Products = sessionFound.Products.Where(x => x.Id != productRemoveData.ProductId).ToList();
                _context.Session.Update(sessionFound);
                await _context.SaveChangesAsync();
            }
        }
    }
}
