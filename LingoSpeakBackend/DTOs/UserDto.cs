using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.DTOs;

public class UserUpdateRequest
{
    public string? Password { get; set; }
    public string? Role { get; set; }
    public string? FullName { get; set; }
    public IFormFile? Image { get; set; } 
}

public class UserResponse
{
    public Guid Id { get; set; }
    public string? Email { get; set; }
    public string? Role { get; set; }
    public string? FullName { get; set; }
    public string? Image { get; set; }
    public ICollection<int>? StudiedConversationIds { get; set; }
    public ICollection<int>? StudiedVocabularyIds { get; set; }
    public ICollection<int>? StudiedReadingPassageIds { get; set; }
}