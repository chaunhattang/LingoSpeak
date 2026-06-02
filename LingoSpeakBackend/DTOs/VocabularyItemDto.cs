namespace LingoSpeakBackend.DTOs;
public class VocabularyItemCreateRequest
{
    public TranslationDto Meaning { get; set; } = null!;
    public string? IPA { get; set; }
    public string? WordType { get; set; }
    public string? Description { get; set; }
    public IFormFile? Image { get; set; }
    public int VocabularyTopicId { get; set; }
}

public class VocabularyItemUpdateRequest
{
    public TranslationDto? Meaning { get; set; }
    public string? IPA { get; set; }
    public string? WordType { get; set; }
    public string? Description { get; set; }
    public IFormFile? Image { get; set; }
}
public class VocabularyItemResponse
{
    public int Id { get; set; }
    public TranslationDto? Meaning { get; set; }
    public string? IPA { get; set; }
    public string? WordType { get; set; }
    public string? Description { get; set; }
    public string? Image { get; set; }
    public int VocabularyTopicId { get; set; }
}