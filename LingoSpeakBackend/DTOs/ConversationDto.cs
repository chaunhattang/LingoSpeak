using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace LingoSpeakBackend.DTOs;

public class ConversationCreateRequest
{
    [Required]
    public string Topic { get; set; } = string.Empty;
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public IFormFile? Image { get; set; }
    public List<MessageDto>? Messages { get; set; } = new();
}

public class ConversationUpdateRequest
{
    public string? Topic { get; set; }
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public IFormFile? Image { get; set; }
    public List<MessageDto>? Messages { get; set; } = new();
}

public class MessageDto
{
    public string? SenderName { get; set; }
    public TranslationDto? Translation { get; set; }
    public int? Order { get; set; }
}

public class ConversationResponse
{
    public int? Id { get; set; }
    public string? Topic { get; set; }
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public string? Image { get; set; }
    public List<MessageDto>? Messages { get; set; }
}
