using LingoSpeakBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LingoSpeakBackend.Controllers;

[Route("api/[controller]")]
[Authorize] 
public class UserProgressController : BaseApiController
{
    private readonly IUserProgressService _progressService;

    public UserProgressController(IUserProgressService progressService)
    {
        _progressService = progressService;
    }

    [HttpPost("vocabulary/{id}")]
    public async Task<IActionResult> MarkVocabulary(int id)
    {
        await _progressService.MarkVocabularyAsStudiedAsync(id, CurrentUserId);
        return Ok(new { Message = "Đã đánh dấu từ vựng là ĐÃ HỌC." });
    }

    [HttpDelete("vocabulary/{id}")]
    public async Task<IActionResult> UnmarkVocabulary(int id)
    {
        await _progressService.UnmarkVocabularyAsync(id, CurrentUserId);
        return Ok(new { Message = "Đã hủy đánh dấu từ vựng." });
    }

    [HttpPost("conversation/{id}")]
    public async Task<IActionResult> MarkConversation(int id)
    {
        await _progressService.MarkConversationAsStudiedAsync(id, CurrentUserId);
        return Ok(new { Message = "Đã đánh dấu hội thoại là HOÀN THÀNH." });
    }

    [HttpDelete("conversation/{id}")]
    public async Task<IActionResult> UnmarkConversation(int id)
    {
        await _progressService.UnmarkConversationAsync(id, CurrentUserId);
        return Ok(new { Message = "Đã hủy đánh dấu bài hội thoại." });
    }
}