using ReactFluxDashboardProto.Web.Ignore;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace ReactFluxDashboardProto.Web.Api
{
    public class EquipmentAlarmsController : ApiController
    {
        // GET: api/EquipmentAlarms
        public IEnumerable<EquipmentAlarmDto> Get()
        {
            return new[]
            {
                new EquipmentAlarmDto { AlarmId = "Alarm A", Timestamp = DateTime.UtcNow },
                new EquipmentAlarmDto { AlarmId = "Alarm B", Timestamp = DateTime.UtcNow },
                new EquipmentAlarmDto { AlarmId = "Alarm C", Timestamp = DateTime.UtcNow },
                new EquipmentAlarmDto { AlarmId = "Alarm D", Timestamp = DateTime.UtcNow }
            };
        }
    }
}