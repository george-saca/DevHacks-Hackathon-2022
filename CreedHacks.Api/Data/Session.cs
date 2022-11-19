using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CreedHacks.Api.Data
{
    public class Session
    {
        [Key]
        [Column(Order = 1)]
        public int Id { get; set; }
        public string? UserId { get; set; }
        public List<Product> Products { get; set; }
    }
}
