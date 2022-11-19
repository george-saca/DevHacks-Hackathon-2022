using CreedHacks.Api.Data;

namespace CreedHacks.Api.Services.Interfaces
{
    public interface IProductOperations
    {
        Task<List<Product>> GetProductsAsync();
    }
}