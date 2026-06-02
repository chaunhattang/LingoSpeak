using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class VocabularyItem
{
    [Key]
    public int Id { get; set; }
    public string? IPA { get; set; }
    public string? WordType { get; set; }

    public int MeaningId { get; set; }
    public Translation Meaning { get; set; } = null!;

    public string? Description { get; set; }
    public string? Image { get; set; }

    public int VocabularyTopicId { get; set; }
    public Vocabulary? VocabularyTopic { get; set; }
}