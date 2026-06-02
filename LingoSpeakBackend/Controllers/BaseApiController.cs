using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

namespace LingoSpeakBackend.Controllers;

[ApiController]
public class BaseApiController : ControllerBase
{
    protected string CurrentUserId => User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? string.Empty;
    protected string CurrentUserRole => User.FindFirst(ClaimTypes.Role)?.Value ?? string.Empty;
}