
using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class StudiedConversation
{
    public int Id { get; set; }

    [Required]
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    [Required]
    public int ConversationId { get; set; }
    public Conversation Conversation { get; set; } = null!;
}