using CreedHacks.Api.Data;
using Microsoft.AspNetCore.Mvc;

namespace CreedHacks.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : Controller
{
    [HttpGet]
    public List<Product> GetProducts()
    {
        return new List<Product>()
        {
            new Product()
            {
                Title = "Coca Cola",
                Description = "Yum",
                Price = 23.45,
                Image = "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/he9/hcc/8866092318750.jpg?buildNumber=d833850c7c4c2971f2d4002fa9f2941c13f1a2b0e9ccb9af7255295ec8e851a5"
            }
        };
    }
}
