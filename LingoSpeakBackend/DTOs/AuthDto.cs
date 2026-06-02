using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.DTOs;

public class AuthRegisterRequest
{
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; } = string.Empty;
    public string? FullName { get; set; }
}

public class AuthLoginRequest
{
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; } = string.Empty;
}
public class AuthResponse
{
    public string? Token { get; set; }
    public DateTime? Expiration { get; set; }
    public UserResponse? User { get; set; }   
}