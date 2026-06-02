using System.Net;

namespace LingoSpeakBackend.Exceptions;

public class BadRequestException : CustomException
{
    public BadRequestException(string message) : base(message, HttpStatusCode.BadRequest)
    {
    }
}