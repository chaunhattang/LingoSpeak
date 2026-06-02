using LingoSpeakBackend.DTOs;

namespace LingoSpeakBackend.Services.Interfaces;

public interface IConversationService
{
    Task<IEnumerable<ConversationResponse>> GetAllConversationsAsync();
    Task<ConversationResponse?> GetConversationByIdAsync(int id);
    Task<ConversationResponse> CreateConversationAsync(ConversationCreateRequest request);
    Task<bool> UpdateConversationAsync(int id, ConversationUpdateRequest request);
    Task<bool> DeleteConversationAsync(int id);
}