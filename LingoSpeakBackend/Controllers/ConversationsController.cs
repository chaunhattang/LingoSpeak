using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LingoSpeakBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ConversationsController : ControllerBase
{
    private readonly IConversationService _conversationService;

    public ConversationsController(IConversationService conversationService)
    {
        _conversationService = conversationService;
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,USER")]
    public async Task<IActionResult> GetAll()
    {
        var result = await _conversationService.GetAllConversationsAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "ADMIN,USER")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _conversationService.GetConversationByIdAsync(id);
        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> Create([FromForm] ConversationCreateRequest request)
    {
        var result = await _conversationService.CreateConversationAsync(request);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> Update(int id, [FromForm] ConversationUpdateRequest request)
    {
        await _conversationService.UpdateConversationAsync(id, request);
        return Ok(new { Message = "Cập nhật dữ liệu bài hội thoại thành công." });
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> Delete(int id)
    {
        await _conversationService.DeleteConversationAsync(id);
        return Ok(new { Message = "Đã xóa bài hội thoại khỏi hệ thống thành công." });
    }
}