using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class Conversation
{
    [Key]
    public int Id { get; set; }
    public string? Speaker1Name { get; set; }
    public string? Speaker2Name { get; set; }
    public List<ConversationMessage> Messages { get; set; } = new List<ConversationMessage>();
}