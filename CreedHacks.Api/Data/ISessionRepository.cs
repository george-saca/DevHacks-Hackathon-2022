using CreedHacks.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CreedHacks.Api.Controllers;

namespace CreedHacks.Api.Data
{
    public interface ISessionRepository
    {
        public List<Session> GetSession();
        public Task AddToCart(CartItemDto cartItem);
        Task RemoveProductFromCart(CartProductRemove productRemoveData);
    }
}
