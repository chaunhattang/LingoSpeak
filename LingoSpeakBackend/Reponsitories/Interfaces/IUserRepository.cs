using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Repositories.Interfaces;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllAsync();
    Task<User?> GetByEmailAsync(string email);
    Task<User?> GetByIdAsync(Guid id);
    Task AddAsync(User user);
    void Update(User user);
    void Delete(User user);
    Task<bool> SaveChangesAsync();

}