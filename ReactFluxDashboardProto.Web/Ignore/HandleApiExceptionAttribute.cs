using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Filters;

namespace ReactFluxDashboardProto.Web.Ignore
{
    public class HandleApiExceptionAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is FormValidationException)
            {
                var exception = context.Exception as FormValidationException;
                var fieldErrors = exception.FieldErrors
                    .Select(x => "{ Field: " + x.Item1 + ", Error: " + x.Item2 + " }");
                var error = new HttpError(exception.Message)
                {
                    { "Type", "FormValidationException"},
                    { "FieldErrors", fieldErrors}
                };
                context.Response = context.Request.CreateErrorResponse(HttpStatusCode.InternalServerError, error);   
            }
            else if (context.Exception is DomainException)
            {
                var exception = context.Exception as DomainException;
                var error = new HttpError(exception.Message)
                {
                    { "Type", "DomainException"},
                };
                context.Response = context.Request.CreateErrorResponse(HttpStatusCode.InternalServerError, error);   
            }
            else
            {
                var error = new HttpError("An unknown error has occurred.");
                context.Response = context.Request.CreateErrorResponse(HttpStatusCode.InternalServerError, error);   
            }
        }
    }
}