using CreedHacks.Api.Controllers;
using CreedHacks.Api.Data;
using CreedHacks.Api.Models;
using CreedHacks.Api.Services.Interfaces;

namespace CreedHacks.Api.Services
{
    public class CartOperations : ICartOperations
    {
        private readonly IMetroRepository _metroRepository;

        public CartOperations(IMetroRepository metroRepository)
        {
            _metroRepository = metroRepository;
        }
        public void AddItemToMemoryDb()
        {
            throw new NotImplementedException();
        }
        public async Task AddToCart(CartItemDto product)
        {
            await _metroRepository.AddToCart(product);
        }

        public async Task RemoveProductFromCart(CartProductRemove product)
        {
            await _metroRepository.RemoveProductFromCart(product);
        }

        public async Task<List<CartProduct>> GetCart(int userId)
        {
            var session = await _metroRepository.GetSessionAsync(userId);
            return session.Products;
        }
    }
}
