using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Repositories.Interfaces;

public interface IReadingPassageRepository
{
    Task<IEnumerable<ReadingPassage>> GetAllAsync();
    Task<ReadingPassage?> GetByIdAsync(int id);
    Task AddAsync(ReadingPassage readingPassage);
    void Update(ReadingPassage readingPassage);
    void Delete(ReadingPassage readingPassage);
    Task<bool> SaveChangesAsync();
}
