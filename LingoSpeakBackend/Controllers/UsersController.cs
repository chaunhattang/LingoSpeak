using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LingoSpeakBackend.Controllers;

[Route("api/[controller]")]
public class UsersController : BaseApiController 
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> GetAll()
    {
        var users = await _userService.GetAllUsersAsync();
        return Ok(users);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "ADMIN,USER")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var user = await _userService.GetUserByIdAsync(id, CurrentUserId, CurrentUserRole);
        return Ok(user);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "ADMIN,USER")]
    public async Task<IActionResult> Update(Guid id, [FromForm] UserUpdateRequest request)
    {
        var result = await _userService.UpdateUserAsync(id, request, CurrentUserId, CurrentUserRole);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _userService.DeleteUserAsync(id);
        return Ok(new { Message = "Đã xóa tài khoản người dùng khỏi hệ thống thành công." });
    }
}