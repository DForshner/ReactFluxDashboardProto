using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public class FormValidationException : Exception
    {
        public IReadOnlyCollection<Tuple<string, string>> FieldErrors { get; private set; } 

        public FormValidationException(string field, string error)
        {
            FieldErrors = new [] { Tuple.Create(field, error) }; 
        }

        public FormValidationException(IReadOnlyCollection<Tuple<string, string>> fieldErrors) 
        {
            FieldErrors = fieldErrors;
        }
    }
}