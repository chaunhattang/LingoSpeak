using LingoSpeakBackend.Data;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LingoSpeakBackend.Repositories.Implementations;

public class ReadingPassageRepository : IReadingPassageRepository
{
    private readonly AppDbContext _context;

    public ReadingPassageRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ReadingPassage>> GetAllAsync()
    {
        return await _context.ReadingPassages
            .Include(r => r.Title)
            .Include(r => r.Content)
            .ToListAsync();
    }

    public async Task<ReadingPassage?> GetByIdAsync(int id)
    {
        return await _context.ReadingPassages
            .Include(r => r.Title)
            .Include(r => r.Content)
            .FirstOrDefaultAsync(r => r.Id == id);
    }

    public async Task AddAsync(ReadingPassage readingPassage)
    {
        await _context.ReadingPassages.AddAsync(readingPassage);
    }

    public void Update(ReadingPassage readingPassage)
    {
        _context.ReadingPassages.Update(readingPassage);
    }

    public void Delete(ReadingPassage readingPassage)
    {
        _context.ReadingPassages.Remove(readingPassage);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}
