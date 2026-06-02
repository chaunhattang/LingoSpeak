using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LingoSpeakBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] AuthRegisterRequest request)
    {
        var result = await _authService.RegisterAsync(request);
        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] AuthLoginRequest request)
    {
        var result = await _authService.LoginAsync(request);
        return Ok(result);
    }
}