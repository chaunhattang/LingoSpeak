using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class StudiedReadingPassage
{
    public int Id { get; set; }

    [Required]
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    [Required]
    public int ReadingPassageId { get; set; }
    public ReadingPassage ReadingPassage { get; set; } = null!;
}
