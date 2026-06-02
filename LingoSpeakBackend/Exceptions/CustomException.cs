using System.Net;

namespace LingoSpeakBackend.Exceptions;

public class CustomException : Exception
{
    public HttpStatusCode StatusCode { get; }

    public CustomException(
        string message,
        HttpStatusCode statusCode = HttpStatusCode.InternalServerError
    ) : base(message)
    {
        StatusCode = statusCode;
    }
}