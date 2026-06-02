using LingoSpeakBackend.Data;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LingoSpeakBackend.Repositories.Implementations;

public class VocabularyRepository : IVocabularyRepository
{
    private readonly AppDbContext _context;

    public VocabularyRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Vocabulary>> GetAllAsync()
    {
        return await _context.Vocabularies
            .Include(v => v.TopicName)
            .Include(v => v.VocabularyItems)
                .ThenInclude(vi => vi.Meaning)
            .ToListAsync();
    }

    public async Task<Vocabulary?> GetByIdAsync(int id)
    {
        return await _context.Vocabularies
            .Include(v => v.TopicName)
            .Include(v => v.VocabularyItems)
                .ThenInclude(vi => vi.Meaning)
            .FirstOrDefaultAsync(v => v.Id == id);
    }

    public async Task AddAsync(Vocabulary vocabulary)
    {
        await _context.Vocabularies.AddAsync(vocabulary);
    }

    public void Update(Vocabulary vocabulary)
    {
        _context.Vocabularies.Update(vocabulary);
    }

    public void Delete(Vocabulary vocabulary)
    {
        _context.Vocabularies.Remove(vocabulary);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public async Task<VocabularyItem?> GetItemByIdAsync(int id)
    {
        return await _context.VocabularyItems.Include(vi => vi.Meaning)
                             .FirstOrDefaultAsync(vi => vi.Id == id);
    }

    public async Task AddItemAsync(VocabularyItem item)
    {
        await _context.VocabularyItems.AddAsync(item);
    }

    public void UpdateItem(VocabularyItem item)
    {
        _context.VocabularyItems.Update(item);
    }

    public void DeleteItem(VocabularyItem item)
    {
        _context.VocabularyItems.Remove(item);
    }
}