using CreedHacks.Api.Models;
using CreedHacks.Api.Services;
using CreedHacks.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CreedHacks.Api.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        public static ICartOperations _cartOperations;
        public CartController(ICartOperations cartOperations)
        {
            _cartOperations = cartOperations;
        }

        [HttpPost]
        [Route("add-to-cart")]
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
        [JsonProperty("userId")]
        public int UserId { get; set; }
        [JsonProperty("productId")]
        public int ProductId  { get; set; }
        [JsonProperty("img")]
        public string Img { get; set; }
        [JsonProperty("price")]
        public double Price { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("amount")]
        public int Amount { get; set; }
    }
}
