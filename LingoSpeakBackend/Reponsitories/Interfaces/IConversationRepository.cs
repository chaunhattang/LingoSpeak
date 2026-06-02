using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Repositories.Interfaces;

public interface IConversationRepository
{
    Task<IEnumerable<Conversation>> GetAllAsync();
    Task<Conversation?> GetByIdAsync(int id);
    Task AddAsync(Conversation conversation);
    void Update(Conversation conversation);
    void Delete(Conversation conversation);
    Task<bool> SaveChangesAsync();
}