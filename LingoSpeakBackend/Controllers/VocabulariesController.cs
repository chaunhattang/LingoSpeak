using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Services.Interfaces; 
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LingoSpeakBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VocabulariesController : ControllerBase
{
    private readonly IVocabularyService _vocabularyService;

    public VocabulariesController(IVocabularyService vocabularyService)
    {
        _vocabularyService = vocabularyService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _vocabularyService.GetAllVocabulariesAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _vocabularyService.GetVocabularyByIdAsync(id);
        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN")] 
    public async Task<IActionResult> Create([FromForm] VocabularyCreateRequest request)
    {
        var result = await _vocabularyService.CreateVocabularyAsync(request);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> Update(int id, [FromForm] VocabularyUpdateRequest request)
    {
        await _vocabularyService.UpdateVocabularyAsync(id, request);
        return Ok(new { Message = "Cập nhật chủ đề thành công." });
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> Delete(int id)
    {
        await _vocabularyService.DeleteVocabularyAsync(id);
        return Ok(new { Message = "Xóa chủ đề và tất cả từ vựng bên trong thành công." });
    }

    [HttpPost("{vocabularyId}/items")]
    [Authorize(Roles = "ADMIN")] 
    public async Task<IActionResult> CreateItem(int vocabularyId, [FromForm] VocabularyItemCreateRequest request)
    {
        request.VocabularyTopicId = vocabularyId;
        var result = await _vocabularyService.CreateItemAsync(vocabularyId, request);
        return StatusCode(StatusCodes.Status201Created, result);
    }

    [HttpPut("{vocabularyId}/items/{itemId}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> UpdateItem(int vocabularyId, int itemId, [FromForm] VocabularyItemUpdateRequest request)
    {
        await _vocabularyService.UpdateItemAsync(vocabularyId, itemId, request);
        return Ok(new { Message = "Cập nhật từ vựng thành công." });
    }

    [HttpDelete("{vocabularyId}/items/{itemId}")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> DeleteItem(int vocabularyId, int itemId)
    {
        await _vocabularyService.DeleteItemAsync(vocabularyId, itemId);
        return Ok(new { Message = "Xóa từ vựng thành công." });
    }
}