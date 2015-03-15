using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.CodeDom.Compiler;
using System.Diagnostics;

namespace ReactFluxDashboardProto.Web.Ignore
{
    /// <summary>
    /// This is probably a stupid idea.
    /// </summary>
    public class ScriptRunner
    {
        private interface IScript
        {
            int Calculate(int a, int b);
        }

        public int Calcuate(int a, int b)
        {
            var source =
                "namespace Scripting" +
                "{" +
                "   public class Formula : ReactFluxDashboardProto.Web.Ignore.ScriptRunner" +
                "   {" +
                "       public int Calculate(int a, int b)" +
                "       {" +
                "           return a + b;"+         
                "       }" +
                "   }" +
                "{";

            var calculator = CompileCode(source);

            return RunScript(calculator, a, b); 
        }

        private static Assembly CompileCode(string source)
        {
            var csProvider = new Microsoft.CSharp.CSharpCodeProvider();

            var options = new CompilerParameters();
            options.GenerateExecutable = false;
            options.GenerateInMemory = true;

            var result = csProvider.CompileAssemblyFromSource(options, source);

            if (result.Errors.HasErrors)
            {
                // :-(
            }

            return result.CompiledAssembly;
        }

        private static int RunScript(Assembly assembly, int a, int b)
        {
            var domain = AppDomain.CreateDomain("NewAppDomain");
            //domain.Load(assembly.);

            var type = assembly
                .GetExportedTypes()
                .First(t => t.GetInterfaces().Any(iface => iface == typeof(IScript)));

            var proxyObject = domain.CreateInstanceAndUnwrap(assembly.FullName, type.FullName) as IScript;

            //var constructor = type.GetConstructor(System.Type.EmptyTypes);
            //Debug.Assert(constructor.IsPublic);
            //var scriptObject = constructor.Invoke(null) as IScript;

            var result = proxyObject.Calculate(a, b);

            AppDomain.Unload(domain);
            return result; 
        }
    }
}