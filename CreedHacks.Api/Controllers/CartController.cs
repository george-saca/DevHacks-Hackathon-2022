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

        [HttpGet]
        public ActionResult AddToCart([FromQuery] int id, [FromQuery] string img, [FromQuery] string price, [FromQuery] string title, [FromQuery] string amount )
        {
            _cartOperations.AddItemToMemoryDb();
            return Ok();
        }
    }
}
