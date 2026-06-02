using LingoSpeakBackend.DTOs;

namespace LingoSpeakBackend.Services.Interfaces;

public interface IAuthService
{
    Task<UserResponse> RegisterAsync(AuthRegisterRequest request);
    Task<AuthResponse> LoginAsync(AuthLoginRequest request);
}