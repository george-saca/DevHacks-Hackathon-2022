using CreedHacks.Api.Data;
using CreedHacks.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CreedHacks.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : Controller
{
    private readonly IProductOperations _productOperations;

    public ProductsController(IProductOperations productOperations)
    {
        _productOperations = productOperations;
    }
    [HttpGet]
    public async Task<List<Product>> GetProducts() => await _productOperations.GetProductsAsync();
}
