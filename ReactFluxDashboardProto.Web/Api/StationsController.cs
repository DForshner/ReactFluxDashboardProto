using ReactFluxDashboardProto.Web.Ignore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class StationsController : ApiController
    {
        // GET: api/Stations
        public IEnumerable<StationDto> Get()
        {
            return new[] 
            {
                new StationDto { Name = "AAA", Type = "TypeA" },
                new StationDto { Name = "BBB", Type = "TypeB" },
            };
        }

        // GET: api/Stations/5
        public StationDto Get(int id)
        {
            return new StationDto { Name = "BBB", Type = "TypeB" };
        }
    }
}
