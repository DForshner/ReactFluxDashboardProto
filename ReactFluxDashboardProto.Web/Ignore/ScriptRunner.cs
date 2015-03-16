using IronPython.Hosting;

namespace ReactFluxDashboardProto.Web.Ignore
{
    /// <summary>
    /// This is probably a stupid idea.
    /// </summary>
    public class ScriptRunner
    {
        public class Features
        {
            public int A { get; set; }
            public int B { get; set; }
            public int C { get; set; }
            public int TimeStep { get; set;}
        }

        public class Prediction 
        {
            public int Result { get; set; }
        }

        public int Calcuate(int a, int b)
        {
            var engine = Python.CreateEngine();

            var code =
                "prediction.Result = features.A + features.B + features.C * features.TimeStep";
            var script = engine.CreateScriptSourceFromString(code);

            var scope = engine.CreateScope();
            var features = new Features
            {
                A = a,
                B = b
            };
            scope.SetVariable("features", features);
            var prediction = new Prediction();
            scope.SetVariable("prediction", prediction);

            var result = script.Execute(scope);

            var test = scope.GetVariable<Prediction>("prediction");

            return test.Result;
        }
    }
}