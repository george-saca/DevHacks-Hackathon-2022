using CreedHacks.Api.Models;
using CreedHacks.Api.Services;
using CreedHacks.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CreedHacks.Api.Controllers
{
    [Route("api/addToCart")]
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        public static ICartOperations _cartOperations;
        public CartController(ICartOperations cartOperations)
        {
            _cartOperations = cartOperations;
        }

        [HttpPost]
        public ActionResult AddToCart([FromBody] CartItemDto cartItemDto)
        {
            _cartOperations.AddItemToMemoryDb();
            return Ok();
        }

        [HttpPut]
        [Route("remove-product")]
        public async Task<ActionResult> RemoveProductFromCart([FromBody] CartProductRemove product)
        {
            await _cartOperations.RemoveProductFromCart(product);
            return Ok();
        }
    }

    public class CartItemDto
    {
        public string Id  { get; set; }
        public string Img { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Amount { get; set; }
    }
}
