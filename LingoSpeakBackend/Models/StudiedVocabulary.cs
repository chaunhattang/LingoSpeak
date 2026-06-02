using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class StudiedVocabulary
{
    public int Id { get; set; }

    [Required]
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    [Required]
    public int VocabularyId { get; set; }
    public Vocabulary Vocabulary { get; set; } = null!;
}