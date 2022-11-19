using System.ComponentModel.DataAnnotations;

namespace CreedHacks.Api.Data
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
