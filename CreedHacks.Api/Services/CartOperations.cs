using CreedHacks.Api.Data;
using CreedHacks.Api.Models;
using CreedHacks.Api.Services.Interfaces;

namespace CreedHacks.Api.Services
{
    public class CartOperations : ICartOperations
    {
        private readonly ISessionRepository _sessionRepository;

        public CartOperations(ISessionRepository sessionRepository)
        {
            _sessionRepository = sessionRepository;
        }
        public void AddItemToMemoryDb()
        {
            throw new NotImplementedException();
        }

        public async Task RemoveProductFromCart(CartProductRemove product)
        {
            await _sessionRepository.RemoveProductFromCart(product);
        }
    }
}
