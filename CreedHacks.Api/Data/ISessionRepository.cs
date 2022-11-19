using CreedHacks.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreedHacks.Api.Data
{
    public interface ISessionRepository
    {
        Task<CartSession> GetSessionAsync(int userId);
        Task RemoveProductFromCart(CartProductRemove productRemoveData);
    }
}
