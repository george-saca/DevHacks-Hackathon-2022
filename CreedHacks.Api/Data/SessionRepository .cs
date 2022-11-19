using CreedHacks.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CreedHacks.Api.Controllers;

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

        public async Task AddToCart(CartItemDto cartItem)
        {
            var sessionFound = _context.Session.First(x => x.UserId == cartItem.userId);
            if (sessionFound != null)
            {
                if(cartItem.Id == null)
                    cartItem.Id = "123456";
                var product = sessionFound.Products.FirstOrDefault(x => x.Id == Int32.Parse(cartItem.Id));
                if (product != null)
                {
                    var products = sessionFound.Products;
                    (products.First(x => x.Id == Int32.Parse(cartItem.Id)) as Product).Amount = Int32.Parse(cartItem.Amount);
                    sessionFound.Products = products;
                }
                else
                {
                    var newProduct = new Product()
                    {
                        Amount = Int32.Parse(cartItem.Amount),
                        Title = cartItem.Title,
                        Id = Int32.Parse(cartItem.Id),
                        Image = cartItem.Img,
                        Price = cartItem.Price
                    };
                    sessionFound.Products.Add(newProduct);
                }
                _context.Session.Update(sessionFound);
                await _context.SaveChangesAsync();
            }
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
