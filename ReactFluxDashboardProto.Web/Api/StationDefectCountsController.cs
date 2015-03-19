using ReactFluxDashboardProto.Web.Ignore;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class StationDefectCountsController : ApiController
    {
        // GET: api/StationDefectCounts/?LineId=5&StationId=3
        public IEnumerable<StationDefectCountDto> Get(string LineId, string StationId)
        {
            return new[]
            {
                new StationDefectCountDto { Type = "Defect A", Count = 50 },
                new StationDefectCountDto { Type = "Defect B", Count = 25 },
                new StationDefectCountDto { Type = "Defect C", Count = 25 }
            };
        }
    }
}
