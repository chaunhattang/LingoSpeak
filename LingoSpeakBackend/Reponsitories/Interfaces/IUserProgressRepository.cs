using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Repositories.Interfaces;

public interface IUserProgressRepository
{
    Task<StudiedVocabulary?> GetStudiedVocabularyAsync(Guid userId, int vocabularyId);
    Task<StudiedConversation?> GetStudiedConversationAsync(Guid userId, int conversationId);
    Task<StudiedReadingPassage?> GetStudiedReadingPassageAsync(Guid userId, int readingPassageId);

    Task AddStudiedVocabularyAsync(StudiedVocabulary studiedVocabulary);
    Task AddStudiedConversationAsync(StudiedConversation studiedConversation);
    Task AddStudiedReadingPassageAsync(StudiedReadingPassage studiedReadingPassage);

    void RemoveStudiedVocabulary(StudiedVocabulary studiedVocabulary);
    void RemoveStudiedConversation(StudiedConversation studiedConversation);
    void RemoveStudiedReadingPassage(StudiedReadingPassage studiedReadingPassage);

    Task<bool> SaveChangesAsync();
}