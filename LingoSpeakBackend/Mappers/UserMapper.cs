using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Mappers;

public static class UserMapper
{
    public static UserResponse ToUserResponse(this User user)
    {
        if (user == null) return null!;

        return new UserResponse
        {
            Id = user.Id,
            Email = user.Email,
            Role = user.Role,
            FullName = user.FullName,
            Image = user.Image,
            StudiedConversationIds = user.StudiedConversations != null
                ? user.StudiedConversations.Select(sc => sc.ConversationId).ToList()
                : new List<int>(),
            StudiedVocabularyIds = user.StudiedVocabularies != null
                ? user.StudiedVocabularies.Select(sv => sv.VocabularyId).ToList()
                : new List<int>(),
            StudiedReadingPassageIds = user.StudiedReadingPassages != null
                ? user.StudiedReadingPassages.Select(sr => sr.ReadingPassageId).ToList()
                : new List<int>()
        };
    }
}