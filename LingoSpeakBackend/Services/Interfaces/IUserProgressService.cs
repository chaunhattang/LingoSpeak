namespace LingoSpeakBackend.Services.Interfaces;

public interface IUserProgressService
{
    Task<bool> MarkVocabularyAsStudiedAsync(int vocabularyId, string currentUserId);
    Task<bool> UnmarkVocabularyAsync(int vocabularyId, string currentUserId);

    Task<bool> MarkConversationAsStudiedAsync(int conversationId, string currentUserId);
    Task<bool> UnmarkConversationAsync(int conversationId, string currentUserId);

    Task<bool> MarkReadingPassageAsStudiedAsync(int readingPassageId, string currentUserId);
    Task<bool> UnmarkReadingPassageAsync(int readingPassageId, string currentUserId);
}