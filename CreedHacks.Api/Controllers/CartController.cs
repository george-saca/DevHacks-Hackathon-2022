using CreedHacks.Api.Models;
using CreedHacks.Api.Services;
using CreedHacks.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CreedHacks.Api.Controllers
{
    [Route("api/addToCart")]
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
            _cartOperations.AddToCart(cartItemDto);
            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveFromCart([FromBody] CartProductRemove product)
        {
            await _cartOperations.RemoveProductFromCart(product);
            return Ok();
        }
    }

    public class CartItemDto
    {
        public int userId { get; set; }
        public string Id  { get; set; }
        public string Img { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Amount { get; set; }
    }
}
