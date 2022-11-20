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
        
        [HttpGet]
        [Route("{userId}")]
        public async Task<ActionResult> GetCart(int userId)
        {
            var response = await _cartOperations.GetCart(userId);
            return Ok(response);
        }

        [HttpPost]
        public ActionResult AddToCart([FromBody] CartItemDto cartItemDto)
        {
            _cartOperations.AddToCart(cartItemDto);
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
        public int userId { get; set; }
        public string Id  { get; set; }
        public string Img { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Amount { get; set; }
    }
}
