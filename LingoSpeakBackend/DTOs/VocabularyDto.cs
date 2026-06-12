namespace LingoSpeakBackend.DTOs;

public class TranslationDto
{
    public string? English { get; set; }
    public string? Vietnamese { get; set; }
}

public class ReadingPassageResponse
{
    public int Id { get; set; }
    public TranslationDto Title { get; set; } = null!;
    public TranslationDto Content { get; set; } = null!;
}

public class VocabularyResponse
{
    public int Id { get; set; }
    public TranslationDto TopicName { get; set; } = null!;
    public string? Image { get; set; }
    public ICollection<VocabularyItemResponse> VocabularyItems { get; set; } = new List<VocabularyItemResponse>();
    public ConversationResponse? Conversation { get; set; }
    public ReadingPassageResponse? Reading { get; set; }
}

public class VocabularyCreateRequest
{
    public TranslationDto TopicName { get; set; } = null!;
    public IFormFile? Image { get; set; }
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public List<MessageDto>? Messages { get; set; }
    public TranslationDto? ReadingTitle { get; set; }
    public TranslationDto? ReadingContent { get; set; }
}

public class VocabularyUpdateRequest
{
    public TranslationDto? TopicName { get; set; }
    public IFormFile? Image { get; set; }
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public List<MessageDto>? Messages { get; set; }
    public TranslationDto? ReadingTitle { get; set; }
    public TranslationDto? ReadingContent { get; set; }
}