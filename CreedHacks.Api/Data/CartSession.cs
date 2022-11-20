using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CreedHacks.Api.Data
{
    public class CartSession
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Products { get; set; }
    }
}
