using CreedHacks.Api.Data;
using CreedHacks.Api.Services.Interfaces;

namespace CreedHacks.Api.Services
{
    public class ProductOperations : IProductOperations
    {
        private readonly IMetroRepository _metroRepository;

        public ProductOperations(IMetroRepository metroRepository)
        {
            _metroRepository = metroRepository;
        }

        public async Task<List<Product>> GetProductsAsync() => await _metroRepository.GetProductsAsync();
    }
}