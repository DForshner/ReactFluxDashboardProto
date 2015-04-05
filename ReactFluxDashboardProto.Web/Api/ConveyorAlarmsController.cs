using ReactFluxDashboardProto.Web.Ignore;
using System;
using System.Collections.Generic;
using System.Reactive.Linq;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class ConveyorAlarmsController : ApiController
    {
        private IList<ConveyorAlarmDto> _alarms = new List<ConveyorAlarmDto> {
            new ConveyorAlarmDto { AlarmId = "Alarm A", Timestamp = DateTime.UtcNow },
            new ConveyorAlarmDto { AlarmId = "Alarm B", Timestamp = DateTime.UtcNow },
            new ConveyorAlarmDto { AlarmId = "Alarm C", Timestamp = DateTime.UtcNow },
            new ConveyorAlarmDto { AlarmId = "Alarm D", Timestamp = DateTime.UtcNow }
        };


        // GET: api/ConveyorAlarms
        public IEnumerable<ConveyorAlarmDto> Get()
        {
            return _alarms;
        }
    }
}