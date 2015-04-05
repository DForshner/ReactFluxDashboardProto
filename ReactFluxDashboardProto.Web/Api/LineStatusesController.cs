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
            return LineService.Statuses;
        }
    }
}
