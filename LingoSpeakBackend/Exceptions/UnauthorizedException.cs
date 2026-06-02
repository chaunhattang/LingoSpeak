using System.Net;

namespace LingoSpeakBackend.Exceptions;

public class UnauthorizedException : CustomException
{
    public UnauthorizedException(string message) : base(message, HttpStatusCode.Unauthorized)
    {
    }
}