using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public class LineStatusDto
    {
        public string LineId { get; set; }

        public string Name { get; set; }

        public int Total { get; set; }

        public int Defects { get; set; }
    }
}