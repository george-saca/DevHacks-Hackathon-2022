using System.ComponentModel.DataAnnotations;

namespace CreedHacks.Api.Data
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
    }
}
