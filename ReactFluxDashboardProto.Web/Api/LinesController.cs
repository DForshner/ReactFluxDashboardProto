using ReactFluxDashboardProto.Web.Ignore;
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
        public IEnumerable<LineDto> Get()
        {
            return new[] 
            {
                new LineDto { Name = "AAA", Type = "TypeA" },
                new LineDto { Name = "BBB", Type = "TypeB" },
            };
        }

        // GET: api/Lines/5
        public LineDto Get(int id)
        {
            return new LineDto { Name = "AAA", Type = "TypeA" };
        }
    }
}
