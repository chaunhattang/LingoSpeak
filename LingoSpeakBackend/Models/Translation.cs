using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;
public class Translation
{
    [Key]
    public int Id { get; set; }
    public string English { get; set; } = string.Empty;
    public string Vietnamese { get; set; } = string.Empty;
}