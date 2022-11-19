using CreedHacks.Api.Controllers;
using CreedHacks.Api.Models;

namespace CreedHacks.Api.Data
{
    public interface IMetroRepository
    {
        Task<CartSession> GetSessionAsync(int userId);
        public Task AddToCart(CartItemDto cartItem);
        Task RemoveProductFromCart(CartProductRemove productRemoveData);
        Task<List<Product>> GetProductsAsync();
    }
}
