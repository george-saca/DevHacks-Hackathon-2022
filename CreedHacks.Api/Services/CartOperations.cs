using CreedHacks.Api.Controllers;
using CreedHacks.Api.Data;
using CreedHacks.Api.Models;
using CreedHacks.Api.Services.Interfaces;
using System.Text.Json;

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
        public async Task<List<CartProduct>> AddToCart(CartItemDto product)
        {
            await _metroRepository.AddToCart(product);
            return await GetCart(product.UserId);
        }

        public async Task<List<CartProduct>> RemoveProductFromCart(CartProductRemove product)
        {
            await _metroRepository.RemoveProductFromCart(product);
            return await GetCart(product.UserId);
        }

        public async Task<List<CartProduct>> GetCart(int userId)
        {
            var session = await _metroRepository.GetSessionAsync(userId);
            return JsonSerializer.Deserialize<List<CartProduct>>(session.Products);
        }
    }
}
