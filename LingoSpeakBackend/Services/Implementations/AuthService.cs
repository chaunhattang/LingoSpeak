using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Exceptions;
using LingoSpeakBackend.Mappers;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using LingoSpeakBackend.Services.Interfaces;
using Microsoft.IdentityModel.Tokens;
using BCryptNet = BCrypt.Net.BCrypt;

namespace LingoSpeakBackend.Services.Implementations;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepo;
    private readonly IConfiguration _configuration;

    public AuthService(IUserRepository userRepo, IConfiguration configuration)
    {
        _userRepo = userRepo;
        _configuration = configuration;
    }

    public async Task<UserResponse> RegisterAsync(AuthRegisterRequest request)
    {
        var existingUser = await _userRepo.GetByEmailAsync(request.Email);
        if (existingUser != null)
        {
            throw new BadRequestException($"Email '{request.Email}' này đã được đăng ký trên hệ thống.");
        }

        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = request.Email,
            Password = BCryptNet.HashPassword(request.Password),
            Role = "USER",
            FullName = request.Email.Split('@')[0]
        };

        await _userRepo.AddAsync(user);
        await _userRepo.SaveChangesAsync();

        return user.ToUserResponse();
    }

    public async Task<AuthResponse> LoginAsync(AuthLoginRequest request)
    {
        var user = await _userRepo.GetByEmailAsync(request.Email);

        if (user == null || !BCryptNet.Verify(request.Password, user.Password))
        {
            throw new UnauthorizedException("Tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.");
        }

        var token = GenerateJwtToken(user);
        return new AuthResponse
        {
            Token = token,
            Expiration = DateTime.UtcNow.AddHours(1),
            User = user.ToUserResponse()
        };
    }

    private string GenerateJwtToken(User user)
    {
        var jwtSettings = _configuration.GetSection("JwtSettings");
        var key = Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]!);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(7),
            Issuer = jwtSettings["Issuer"],
            Audience = jwtSettings["Audience"],
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}