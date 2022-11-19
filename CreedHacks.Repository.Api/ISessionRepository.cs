using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CreedHacks.Repository.Api
{
    public interface ISessionRepository
    {
        public List<Session> GetSession();
    }
}
