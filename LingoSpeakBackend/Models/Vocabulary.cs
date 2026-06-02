using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class Vocabulary
{
    [Key]
    public int Id { get; set; }

    public int TopicNameId { get; set; }
    public Translation TopicName { get; set; } = null!;

    public string? Image { get; set; }

    public ICollection<VocabularyItem> VocabularyItems { get; set; } = new List<VocabularyItem>();
}