using System;
using System.Collections.Generic;
using System.Reactive.Linq;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public static class StationService
    {
        private static IObservable<long> statusUpdates = Observable.Interval(TimeSpan.FromSeconds(1));

        private static List<StationStatusDto> _statuses = new List<StationStatusDto>
        {
             new StationStatusDto { StationId = "Feed", Name = "Feeder" },
             new StationStatusDto { StationId = "Proc1", Name = "Processor #1" },
             new StationStatusDto { StationId = "Proc2", Name = "Processor #1" },
             new StationStatusDto { StationId = "Pack", Name = "Packer" }
        };

        static StationService()
        {
            statusUpdates.Subscribe(x => 
            { 
                var rand = new Random();
                foreach(var status in _statuses)
                {
                    status.Total += (rand.Next(0, 9) == 0) ? 0 : 1; // ~ 0.9 widgets per cycle 
                    status.ScanErrors += (rand.Next(0, 50) == 0) ? 1 : 0; // ~ 2% bad scan rate
                    status.Retries += (rand.Next(0, 20) == 0) ? 1 : 0; // ~ 5% bad scan rate
                }
            });
        }

        public static IReadOnlyCollection<StationStatusDto> Statuses
        {
            get { return _statuses.AsReadOnly(); }
        }

        public static IReadOnlyCollection<StationDto> Stations
        {
            get
            {
                return new[] 
                {
                    new StationDto { StationId = "Feed" },
                    new StationDto { StationId = "Proc1" },
                    new StationDto { StationId = "Proc2" },
                    new StationDto { StationId = "Pack" },
                };
            }
        }
    }
}