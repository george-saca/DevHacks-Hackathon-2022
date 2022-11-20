using CreedHacks.Api.Controllers;
using CreedHacks.Api.Data;
using CreedHacks.Api.Models;

namespace CreedHacks.Api.Services.Interfaces
{
    public interface ICartOperations
    {
        public void AddItemToMemoryDb();
        Task<List<CartProduct>> AddToCart(CartItemDto product);
        Task<List<CartProduct>> RemoveProductFromCart(CartProductRemove product);
        Task<List<CartProduct>> GetCart(int userId);
    }
}
