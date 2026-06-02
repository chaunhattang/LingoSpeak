using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Exceptions;
using LingoSpeakBackend.Mappers; 
using LingoSpeakBackend.Repositories.Interfaces;
using LingoSpeakBackend.Services.Interfaces;

namespace LingoSpeakBackend.Services.Implementations;

public class VocabularyService : IVocabularyService
{
    private readonly IVocabularyRepository _vocabularyRepo;
    private readonly IFileStorageService _fileStorageService; 
    public VocabularyService(IVocabularyRepository vocabularyRepo, IFileStorageService fileStorageService)
    {
        _vocabularyRepo = vocabularyRepo;
        _fileStorageService = fileStorageService;
    }

    public async Task<IEnumerable<VocabularyResponse>> GetAllVocabulariesAsync()
    {
        var vocabularies = await _vocabularyRepo.GetAllAsync();

        return vocabularies.Select(v => v.ToVocabularyResponse()).ToList();
    }

    public async Task<VocabularyResponse> GetVocabularyByIdAsync(int id)
    {
        var v = await _vocabularyRepo.GetByIdAsync(id);
        if (v == null) {
            throw new NotFoundException($"Không tìm thấy từ vựng nào có mã ID bằng {id}.");
        }

        return v.ToVocabularyResponse();
    }

    public async Task<VocabularyResponse> CreateVocabularyAsync(VocabularyCreateRequest request)
    {
        var vocabulary = request.ToVocabulary();

        if (request.Image != null)
        {
            vocabulary.Image = await _fileStorageService.SaveFileAsync(request.Image);
        }

        await _vocabularyRepo.AddAsync(vocabulary);
        await _vocabularyRepo.SaveChangesAsync();

        return vocabulary.ToVocabularyResponse();
    }

    public async Task<bool> UpdateVocabularyAsync(int id, VocabularyUpdateRequest request)
    {
        var v = await _vocabularyRepo.GetByIdAsync(id);
        if (v == null)
        {
            throw new NotFoundException($"Không thể cập nhật vì không tìm thấy từ vựng có mã ID bằng {id}.");
        }

        if (request.Image != null)
        {
            if (!string.IsNullOrEmpty(v.Image))
            {
                _fileStorageService.DeleteFile(v.Image);
            }
            v.Image = await _fileStorageService.SaveFileAsync(request.Image);
        }

        v.UpdateVocabularyFromDto(request);
        _vocabularyRepo.Update(v);
        return await _vocabularyRepo.SaveChangesAsync();
    }

    public async Task<bool> DeleteVocabularyAsync(int id)
    {
        var v = await _vocabularyRepo.GetByIdAsync(id);
        if (v == null)
        {
            throw new NotFoundException($"Không thể xóa vì không tìm thấy từ vựng có mã ID bằng {id}.");
        }

        if (!string.IsNullOrEmpty(v.Image))
        {
            _fileStorageService.DeleteFile(v.Image);
        }

        _vocabularyRepo.Delete(v);
        return await _vocabularyRepo.SaveChangesAsync();
    }

    public async Task<VocabularyItemResponse> CreateItemAsync(int vocabularyId, VocabularyItemCreateRequest request)
    {
        request.VocabularyTopicId = vocabularyId;
        var item = request.ToVocabularyItem();

        if (request.Image != null)
        {
            item.Image = await _fileStorageService.SaveFileAsync(request.Image);
        }

        await _vocabularyRepo.AddItemAsync(item);
        await _vocabularyRepo.SaveChangesAsync();
        
        return item.ToItemResponse();
    }

    public async Task<bool> UpdateItemAsync(int vocabularyId, int itemId, VocabularyItemUpdateRequest request)
    {
        var item = await _vocabularyRepo.GetItemByIdAsync(itemId);
        if (item == null || item.VocabularyTopicId != vocabularyId)
        {
            throw new NotFoundException($"Không thể cập nhật vì không tìm thấy từ vựng (item) có mã ID bằng {itemId} thuộc chủ đề {vocabularyId}.");
        }

        if (request.Image != null)
        {
            if (!string.IsNullOrEmpty(item.Image))
            {
                _fileStorageService.DeleteFile(item.Image);
            }
            item.Image = await _fileStorageService.SaveFileAsync(request.Image);
        }

        item.UpdateItemFromDto(request);
        _vocabularyRepo.UpdateItem(item);
        return await _vocabularyRepo.SaveChangesAsync();
    }

    public async Task<bool> DeleteItemAsync(int vocabularyId, int itemId)
    {
        var item = await _vocabularyRepo.GetItemByIdAsync(itemId);
        if (item == null || item.VocabularyTopicId != vocabularyId)
        {
            throw new NotFoundException($"Không thể xóa vì không tìm thấy từ vựng (item) có mã ID bằng {itemId} thuộc chủ đề {vocabularyId}.");
        }

        if (!string.IsNullOrEmpty(item.Image))
        {
            _fileStorageService.DeleteFile(item.Image);
        }

        _vocabularyRepo.DeleteItem(item);
        return await _vocabularyRepo.SaveChangesAsync();
    }
}