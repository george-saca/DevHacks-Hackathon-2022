using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CreedHacks.Api.Data
{
    public class CartSession
    {
        [Key]
        [Column(Order = 1)]
        public int Id { get; set; }
        public int UserId { get; set; }
        public List<CartProduct> Products { get; set; }
    }
}
