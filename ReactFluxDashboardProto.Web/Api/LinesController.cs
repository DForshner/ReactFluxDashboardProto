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
        public IEnumerable<ProductionDto> Get()
        {
            return new[] 
            {
                new ProductionDto { Name = "AAA", Type = "TypeA" },
                new ProductionDto { Name = "BBB", Type = "TypeB" },
            };
        }

        // GET: api/Lines/5
        public ProductionDto Get(int id)
        {
            return new ProductionDto { Name = "AAA", Type = "TypeA" };
        }
    }
}
