using CreedHacks.Api.Models;
using CreedHacks.Api.Controllers;

namespace CreedHacks.Api.Data
{
    public interface ICartRepository
    {
        Task<CartSession> GetSessionAsync(int userId); 
        Task AddToCart(CartItemDto cartItem);
        Task RemoveProductFromCart(CartProductRemove productRemoveData);
    }
}
