using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public class StationStatusDto
    {
        public string StationId { get; set; }

        public string Name { get; set; }

        public int Total { get; set; }

        public int Retries { get; set; }

        public int ScanErrors { get; set; }
    }
}