using CreedHacks.Api.Data;
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

        [HttpGet]
        [Route("{userId}")]
        public async Task<ActionResult> GetCart(int userId) => Ok(await _cartOperations.GetCart(userId));


        [HttpPost]
        [Route("add-to-cart")]
        public async Task<ActionResult> AddToCart([FromBody] CartItemDto cartItemDto) => Ok(await _cartOperations.AddToCart(cartItemDto));

        [HttpPut]
        [Route("remove-product")]
        public async Task<ActionResult> RemoveProductFromCart([FromBody] CartProductRemove product) => Ok(await _cartOperations.RemoveProductFromCart(product));
    }

    public class CartItemDto
    {
        [JsonProperty("userId")]
        public int UserId { get; set; }
        [JsonProperty("productId")]
        public int ProductId { get; set; }
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