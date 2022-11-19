using CreedHacks.Api.Controllers;
using CreedHacks.Api.Data;
using CreedHacks.Api.Models;
using CreedHacks.Api.Services.Interfaces;

namespace CreedHacks.Api.Services
{
    public class CartOperations : ICartOperations
    {
        private readonly ICartRepository _cartRepository;

        public CartOperations(ICartRepository sessionRepository)
        {
            _cartRepository = sessionRepository;
        }
        public void AddItemToMemoryDb()
        {
            throw new NotImplementedException();
        }
        public async Task AddToCart(CartItemDto product)
        {
            await _cartRepository.AddToCart(product);
        }

        public async Task RemoveProductFromCart(CartProductRemove product)
        {
            await _cartRepository.RemoveProductFromCart(product);
        }
    }
}
