using System.ComponentModel.DataAnnotations;

namespace LingoSpeakBackend.Models;

public class ReadingPassage
{
    [Key]
    public int Id { get; set; }

    public int TitleId { get; set; }
    public Translation Title { get; set; } = null!;

    public int ContentId { get; set; }
    public Translation Content { get; set; } = null!;
}
