using CreedHacks.Api.Models;

namespace CreedHacks.Api.Services.Interfaces
{
    public interface ICartOperations
    {
        public void AddItemToMemoryDb();
        Task RemoveProductFromCart(CartProductRemove product);
    }
}
