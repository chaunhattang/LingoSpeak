using LingoSpeakBackend.Data;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LingoSpeakBackend.Repositories.Implementations;

public class UserProgressRepository : IUserProgressRepository
{
    private readonly AppDbContext _context;

    public UserProgressRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<StudiedVocabulary?> GetStudiedVocabularyAsync(Guid userId, int vocabularyId)
    {
        return await _context.StudiedVocabularies
            .FirstOrDefaultAsync(sv => sv.UserId == userId && sv.VocabularyId == vocabularyId);
    }

    public async Task<StudiedConversation?> GetStudiedConversationAsync(Guid userId, int conversationId)
    {
        return await _context.StudiedConversations
            .FirstOrDefaultAsync(sc => sc.UserId == userId && sc.ConversationId == conversationId);
    }

    public async Task AddStudiedVocabularyAsync(StudiedVocabulary studiedVocabulary)
    {
        await _context.StudiedVocabularies.AddAsync(studiedVocabulary);
    }

    public async Task AddStudiedConversationAsync(StudiedConversation studiedConversation)
    {
        await _context.StudiedConversations.AddAsync(studiedConversation);
    }

    public void RemoveStudiedVocabulary(StudiedVocabulary studiedVocabulary)
    {
        _context.StudiedVocabularies.Remove(studiedVocabulary);
    }

    public void RemoveStudiedConversation(StudiedConversation studiedConversation)
    {
        _context.StudiedConversations.Remove(studiedConversation);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}