using ReactFluxDashboardProto.Web.Ignore;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class ConveyorAlarmsController : ApiController
    {
        // GET: api/ConveyorAlarms
        public IEnumerable<ConveyorAlarmDto> Get()
        {
            return new[]
            {
                new ConveyorAlarmDto { AlarmId = "Alarm A", Timestamp = DateTime.UtcNow },
                new ConveyorAlarmDto { AlarmId = "Alarm B", Timestamp = DateTime.UtcNow },
                new ConveyorAlarmDto { AlarmId = "Alarm C", Timestamp = DateTime.UtcNow },
                new ConveyorAlarmDto { AlarmId = "Alarm D", Timestamp = DateTime.UtcNow }
            };
        }
    }
}