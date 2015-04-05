using System;
using System.Collections.Generic;
using System.Reactive.Linq;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public static class LineService
    {
        private static IObservable<long> lineStatusUpdates = Observable.Interval(TimeSpan.FromSeconds(1));

        private static List<LineStatusDto> _statuses = new List<LineStatusDto>
        {
            new LineStatusDto { LineId = "A", Name = "Line A", Total = 0 },
            new LineStatusDto { LineId = "B", Name = "Line B", Total = 0 },
            new LineStatusDto { LineId = "C", Name = "Line C", Total = 0 },
            new LineStatusDto { LineId = "D", Name = "Line D", Total = 0 }
        };

        static LineService()
        {
            lineStatusUpdates.Subscribe(x => 
            { 
                var rand = new Random();
                foreach(var status in _statuses)
                {
                    status.Total += (rand.Next(0, 9) == 1) ? 0 : 1; // 0.9 widgets per cycle 
                    status.Defects += (rand.Next(0, 9) == 1) ? 1 : 0; // 10% defect rate
                }
            });
        }

        public static IReadOnlyCollection<LineStatusDto> Statuses
        {
            get { return _statuses.AsReadOnly(); }
        }
    }
}