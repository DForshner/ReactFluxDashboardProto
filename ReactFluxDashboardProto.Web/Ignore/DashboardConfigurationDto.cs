using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public class DashboardConfigurationDto
    {
        public int Line1MinRate { get; set; }
        public int Line1MaxRate { get; set; }
        public string Line1Description { get; set; }
        public int Line2MinRate { get; set; }
        public int Line2MaxRate { get; set; }
        public string Line2Description { get; set; }
    }
}