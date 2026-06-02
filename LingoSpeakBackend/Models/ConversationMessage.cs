using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class ConversationMessage
{
    public int Id { get; set; }
    public int ConversationId { get; set; }
    public Conversation Conversation { get; set; } = null!;

    [Required]
    public string SenderName { get; set; } = string.Empty;

    [Required]
    public int ContentId { get; set; }
    public Translation Content { get; set;  } = null!;
    public int Order { get; set; } 
}