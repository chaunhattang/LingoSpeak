using LingoSpeak.API.Data;
using LingoSpeak.API.DTOs;
using LingoSpeak.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace LingoSpeak.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var user = new User
            {
                FullName = dto.FullName,
                Email = dto.Email,
                PasswordHash = dto.Password
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok("User registered successfully");
        }
        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == dto.Email);

            if (user == null)
            {
                return BadRequest("Email not found");
            }

            if (user.PasswordHash != dto.Password)
            {
                return BadRequest("Wrong password");
            }

            return Ok(user);
        }
        [HttpPut("update-profile")]
        public IActionResult UpdateProfile(User updatedUser)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == updatedUser.Id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            user.FullName = updatedUser.FullName;

            _context.SaveChanges();

            return Ok(user);
        }
        [HttpPut("change-password")]
        public IActionResult ChangePassword(ChangePasswordDto dto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == dto.Id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            if (user.PasswordHash != dto.CurrentPassword)
            {
                return BadRequest("Nhập sai mật khẩu cũ");
            }

            user.PasswordHash = dto.NewPassword;

            _context.SaveChanges();

            return Ok(user);
        }
    }
}