using ReactFluxDashboardProto.Web.Ignore;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class LineStatusesController : ApiController
    {
        // GET: api/LineStatuses
        public IEnumerable<LineStatusDto> Get()
        {
            //throw new KeyNotFoundException();
            return new[] 
            {
                new LineStatusDto { LineId = "A", Name = "Line A", Total = 100 },
                new LineStatusDto { LineId = "B", Name = "Line B", Total = 100 }
            };
        }
    }
}
