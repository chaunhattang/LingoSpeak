using LingoSpeakBackend.Data;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LingoSpeakBackend.Repositories.Implementations;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        return await _context.Users
            .Include(u => u.StudiedConversations)
            .Include(u => u.StudiedVocabularies)
            .ToListAsync();
    }
    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _context.Users
            .Include(u => u.StudiedConversations)
            .Include(u => u.StudiedVocabularies)
            .FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<User?> GetByIdAsync(Guid id)
    {
        return await _context.Users
            .Include(u => u.StudiedConversations)
            .Include(u => u.StudiedVocabularies)
            .FirstOrDefaultAsync(u => u.Id == id);
    }

    public async Task AddAsync(User user)
    {
        await _context.Users.AddAsync(user);
    }
    public void Update(User user)
    {
        _context.Users.Update(user);
    }

    public void Delete(User user)
    {
        _context.Users.Remove(user);
    }
    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}