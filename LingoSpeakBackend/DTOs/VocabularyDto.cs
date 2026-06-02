namespace LingoSpeakBackend.DTOs;

public class TranslationDto
{
    public string? English { get; set; }
    public string? Vietnamese { get; set; }
}

public class VocabularyResponse
{
    public int Id { get; set; }
    public TranslationDto TopicName { get; set; } = null!;
    public string? Image { get; set; }
    public ICollection<VocabularyItemResponse> VocabularyItems { get; set; } = new List<VocabularyItemResponse>();
}

public class VocabularyCreateRequest
{
    public TranslationDto TopicName { get; set; } = null!;
    public IFormFile? Image { get; set; }
}

public class VocabularyUpdateRequest
{
    public TranslationDto? TopicName { get; set; }
    public IFormFile? Image { get; set; }
}