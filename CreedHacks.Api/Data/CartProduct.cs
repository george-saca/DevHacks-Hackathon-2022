using System.ComponentModel.DataAnnotations;

namespace CreedHacks.Api.Data
{
    public class CartProduct
    {
        public int ProductId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
    }
}
