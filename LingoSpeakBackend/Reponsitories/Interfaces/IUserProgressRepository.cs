using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Repositories.Interfaces;

public interface IUserProgressRepository
{
    Task<StudiedVocabulary?> GetStudiedVocabularyAsync(Guid userId, int vocabularyId);
    Task<StudiedConversation?> GetStudiedConversationAsync(Guid userId, int conversationId);

    Task AddStudiedVocabularyAsync(StudiedVocabulary studiedVocabulary);
    Task AddStudiedConversationAsync(StudiedConversation studiedConversation);

    void RemoveStudiedVocabulary(StudiedVocabulary studiedVocabulary);
    void RemoveStudiedConversation(StudiedConversation studiedConversation);

    Task<bool> SaveChangesAsync();
}