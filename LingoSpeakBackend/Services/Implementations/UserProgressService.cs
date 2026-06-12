using LingoSpeakBackend.Exceptions;
using LingoSpeakBackend.Models;
using LingoSpeakBackend.Repositories.Interfaces;
using LingoSpeakBackend.Services.Interfaces;

namespace LingoSpeakBackend.Services.Implementations;

public class UserProgressService : IUserProgressService
{
    private readonly IUserProgressRepository _progressRepo;
    private readonly IVocabularyRepository _vocabularyRepo;
    private readonly IConversationRepository _conversationRepo;
    private readonly IReadingPassageRepository _readingPassageRepo;

    public UserProgressService(
        IUserProgressRepository progressRepo,
        IVocabularyRepository vocabularyRepo,
        IConversationRepository conversationRepo,
        IReadingPassageRepository readingPassageRepo)
    {
        _progressRepo = progressRepo;
        _vocabularyRepo = vocabularyRepo;
        _conversationRepo = conversationRepo;
        _readingPassageRepo = readingPassageRepo;
    }

    public async Task<bool> MarkVocabularyAsStudiedAsync(int vocabularyId, string currentUserId)
    {
        var userId = Guid.Parse(currentUserId);

        var vocab = await _vocabularyRepo.GetByIdAsync(vocabularyId);
        if (vocab == null) throw new NotFoundException("Từ vựng không tồn tại.");

        var existing = await _progressRepo.GetStudiedVocabularyAsync(userId, vocabularyId);
        if (existing != null) throw new BadRequestException("Bạn đã đánh dấu từ vựng này là đã học rồi.");

        var progress = new StudiedVocabulary { UserId = userId, VocabularyId = vocabularyId };
        await _progressRepo.AddStudiedVocabularyAsync(progress);
        return await _progressRepo.SaveChangesAsync();
    }

    public async Task<bool> UnmarkVocabularyAsync(int vocabularyId, string currentUserId)
    {
        var userId = Guid.Parse(currentUserId);
        var existing = await _progressRepo.GetStudiedVocabularyAsync(userId, vocabularyId);
        if (existing == null) throw new NotFoundException("Chưa đánh dấu học từ vựng này nên không thể hủy.");

        _progressRepo.RemoveStudiedVocabulary(existing);
        return await _progressRepo.SaveChangesAsync();
    }

    public async Task<bool> MarkConversationAsStudiedAsync(int conversationId, string currentUserId)
    {
        var userId = Guid.Parse(currentUserId);

        var conv = await _conversationRepo.GetByIdAsync(conversationId);
        if (conv == null) throw new NotFoundException("Bài hội thoại không tồn tại.");

        var existing = await _progressRepo.GetStudiedConversationAsync(userId, conversationId);
        if (existing != null) throw new BadRequestException("Bạn đã đánh dấu bài hội thoại này là đã học rồi.");

        var progress = new StudiedConversation { UserId = userId, ConversationId = conversationId };
        await _progressRepo.AddStudiedConversationAsync(progress);
        return await _progressRepo.SaveChangesAsync();
    }

    public async Task<bool> UnmarkConversationAsync(int conversationId, string currentUserId)
    {
        var userId = Guid.Parse(currentUserId);
        var existing = await _progressRepo.GetStudiedConversationAsync(userId, conversationId);
        if (existing == null) throw new NotFoundException("Chưa đánh dấu học bài hội thoại này nên không thể hủy.");

        _progressRepo.RemoveStudiedConversation(existing);
        return await _progressRepo.SaveChangesAsync();
    }

    public async Task<bool> MarkReadingPassageAsStudiedAsync(int readingPassageId, string currentUserId)
    {
        var userId = Guid.Parse(currentUserId);

        var reading = await _readingPassageRepo.GetByIdAsync(readingPassageId);
        if (reading == null) throw new NotFoundException("Bài đọc không tồn tại.");

        var existing = await _progressRepo.GetStudiedReadingPassageAsync(userId, readingPassageId);
        if (existing != null) throw new BadRequestException("Bạn đã đánh dấu bài đọc này là đã học rồi.");

        var progress = new StudiedReadingPassage { UserId = userId, ReadingPassageId = readingPassageId };
        await _progressRepo.AddStudiedReadingPassageAsync(progress);
        return await _progressRepo.SaveChangesAsync();
    }

    public async Task<bool> UnmarkReadingPassageAsync(int readingPassageId, string currentUserId)
    {
        var userId = Guid.Parse(currentUserId);
        var existing = await _progressRepo.GetStudiedReadingPassageAsync(userId, readingPassageId);
        if (existing == null) throw new NotFoundException("Chưa đánh dấu học bài đọc này nên không thể hủy.");

        _progressRepo.RemoveStudiedReadingPassage(existing);
        return await _progressRepo.SaveChangesAsync();
    }
}