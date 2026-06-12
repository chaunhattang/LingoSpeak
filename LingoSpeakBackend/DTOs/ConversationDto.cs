namespace LingoSpeakBackend.DTOs;

public class MessageDto
{
    public string? SenderName { get; set; }
    public TranslationDto? Translation { get; set; }
    public int? Order { get; set; }
}

public class ConversationResponse
{
    public int? Id { get; set; }
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public List<MessageDto>? Messages { get; set; }
}
