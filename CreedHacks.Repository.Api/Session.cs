using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreedHacks.Repository.Api
{
    public class Session
    {
        //public int Id { get; set; }
        public string UserId { get; set; }
        public List<string>? Products { get; set; }
    }
}
