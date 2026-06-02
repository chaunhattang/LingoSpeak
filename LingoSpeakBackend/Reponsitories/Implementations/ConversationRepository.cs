using LingoSpeakBackend.Data;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LingoSpeakBackend.Repositories.Implementations;

public class ConversationRepository : IConversationRepository
{
    private readonly AppDbContext _context;

    public ConversationRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Conversation>> GetAllAsync()
    {
        return await _context.Conversations
            .Include(c => c.Messages)
                .ThenInclude(m => m.Content)
            .ToListAsync();
    }

    public async Task<Conversation?> GetByIdAsync(int id)
    {
        var conversation = await _context.Conversations
            .Include(c => c.Messages)
                .ThenInclude(m => m.Content)
            .FirstOrDefaultAsync(c => c.Id == id);

        if (conversation != null)
        {
            conversation.Messages = conversation.Messages.OrderBy(m => m.Order).ToList();
        }

        return conversation;
    }

    public async Task AddAsync(Conversation conversation)
    {
        await _context.Conversations.AddAsync(conversation);
    }

    public void Update(Conversation conversation)
    {
        _context.Conversations.Update(conversation);
    }

    public void Delete(Conversation conversation)
    {
        _context.Conversations.Remove(conversation);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}