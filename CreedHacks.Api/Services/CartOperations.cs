using CreedHacks.Api.Controllers;
using CreedHacks.Api.Data;
using CreedHacks.Api.Models;
using CreedHacks.Api.Services.Interfaces;

namespace CreedHacks.Api.Services
{
    public class CartOperations : ICartOperations
    {
        private readonly ISessionRepository _repo;

        public CartOperations(ISessionRepository repo)
        {
            _repo = repo;
        }
        public void AddItemToMemoryDb()
        {
            throw new NotImplementedException();
        }

        public Task RemoveProductFromCart(CartProductRemove product)
        {
            throw new NotImplementedException();
        }
        
        public async Task AddToCart(CartItemDto product)
        {
            await _repo.AddToCart(product);
        }
    }
}
