using ReactFluxDashboardProto.Web.Ignore;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class StationStatusesController : ApiController
    {
        // GET: api/StationStatuses/?LineId=A
        public IEnumerable<StationStatusDto> Get(string lineId)
        {
            if (lineId == "B")
            {
                throw new Exception("Something has gone horrible wrong.");
            }

            return StationService.Statuses;
        }
    }
}
