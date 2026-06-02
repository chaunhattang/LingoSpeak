using System.Net;

namespace LingoSpeakBackend.Exceptions;

public class NotFoundException : CustomException
{
    public NotFoundException(string message) : base(message, HttpStatusCode.NotFound)
    {
    }
}