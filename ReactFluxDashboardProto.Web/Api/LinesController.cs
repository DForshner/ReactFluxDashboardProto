using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class LinesController : ApiController
    {
        // GET: api/Lines
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Lines/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Lines
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Lines/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Lines/5
        public void Delete(int id)
        {
        }
    }
}
