namespace LingoSpeak.API.DTOs
{
    public class ChangePasswordDto
    {
        public int Id { get; set; }

        public string CurrentPassword { get; set; }

        public string NewPassword { get; set; }
    }
}