using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Repositories.Interfaces;

public interface IVocabularyRepository
{
    Task<IEnumerable<Vocabulary>> GetAllAsync();
    Task<Vocabulary?> GetByIdAsync(int id);
    Task AddAsync(Vocabulary vocabulary);
    void Update(Vocabulary vocabulary);
    void Delete(Vocabulary vocabulary);
    Task<bool> SaveChangesAsync();

    Task<VocabularyItem?> GetItemByIdAsync(int id);
    Task AddItemAsync(VocabularyItem item);
    void UpdateItem(VocabularyItem item);
    void DeleteItem(VocabularyItem item);
}