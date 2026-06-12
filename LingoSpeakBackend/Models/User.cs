using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class User
{
    [Key]
    public Guid Id { get; set; }
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; } = string.Empty;
    public string Role { get; set; } = "USER";
    public string? FullName { get; set; }
    public string? Image { get; set; }
    public ICollection<StudiedConversation> StudiedConversations { get; set; } = new List<StudiedConversation>();
    public ICollection<StudiedVocabulary> StudiedVocabularies { get; set; } = new List<StudiedVocabulary>();
    public ICollection<StudiedReadingPassage> StudiedReadingPassages { get; set; } = new List<StudiedReadingPassage>();
}