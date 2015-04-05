using ReactFluxDashboardProto.Web.Ignore;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class StationsController : ApiController
    {
        // GET: api/Stations/?LineId=A
        public IEnumerable<StationDto> Get(string lineId)
        {
            return StationService.Stations;
        }
    }
}
