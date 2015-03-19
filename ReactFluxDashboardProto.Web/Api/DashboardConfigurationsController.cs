﻿using ReactFluxDashboardProto.Web.Ignore;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class DashboardConfigurationController : ApiController
    {
        private static DashboardConfigurationDto _fakeConfig = new DashboardConfigurationDto 
        {
            Line1MinRate = 20,
            Line1MaxRate = 80,
            Line1Description = "Primary Widget Line",
            Line2MinRate = 60,
            Line2MaxRate = 180,
            Line2Description = "Secondary Widget Line",
        };
 
        // GET: api/DashboardConfiguration
        [HttpGet]
        public DashboardConfigurationDto Get()
        {
            return _fakeConfig;
        }

        // PUT: api/DashboardConfiguration
        [HttpPut]
        public DashboardConfigurationDto Put([FromBody] DashboardConfigurationDto updated)
        {
            _fakeConfig = updated;
            return _fakeConfig;
        }
    }
}