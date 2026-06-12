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

    public async Task<StudiedReadingPassage?> GetStudiedReadingPassageAsync(Guid userId, int readingPassageId)
    {
        return await _context.StudiedReadingPassages
            .FirstOrDefaultAsync(sr => sr.UserId == userId && sr.ReadingPassageId == readingPassageId);
    }

    public async Task AddStudiedVocabularyAsync(StudiedVocabulary studiedVocabulary)
    {
        await _context.StudiedVocabularies.AddAsync(studiedVocabulary);
    }

    public async Task AddStudiedConversationAsync(StudiedConversation studiedConversation)
    {
        await _context.StudiedConversations.AddAsync(studiedConversation);
    }

    public async Task AddStudiedReadingPassageAsync(StudiedReadingPassage studiedReadingPassage)
    {
        await _context.StudiedReadingPassages.AddAsync(studiedReadingPassage);
    }

    public void RemoveStudiedVocabulary(StudiedVocabulary studiedVocabulary)
    {
        _context.StudiedVocabularies.Remove(studiedVocabulary);
    }

    public void RemoveStudiedConversation(StudiedConversation studiedConversation)
    {
        _context.StudiedConversations.Remove(studiedConversation);
    }

    public void RemoveStudiedReadingPassage(StudiedReadingPassage studiedReadingPassage)
    {
        _context.StudiedReadingPassages.Remove(studiedReadingPassage);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}