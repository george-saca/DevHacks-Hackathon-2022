using CreedHacks.Api.Data;
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
            if (userId == 12345)
                return Ok(new List<CartProduct>()
                {
                    new CartProduct()
                    {
                        ProductId = 2,
                        Title = "Mens Casual Premium Slim Fit T-Shirts ",
                        Description = "Test",
                        Image = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                        Amount = 1,
                        Price = 45.5,
                        Id = 1
                    }
                });
            else
            {
                return Ok(new List<CartProduct>()
                {
                    new CartProduct()
                    {
                        ProductId = 2,
                        Title = "Mens Casual Premium Slim Fit T-Shirts ",
                        Description = "Test",
                        Image = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                        Amount = 3,
                        Price = 123.4
                    }
                });
            }
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
        public string Id { get; set; }
        public string Img { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public string Amount { get; set; }
    }
}