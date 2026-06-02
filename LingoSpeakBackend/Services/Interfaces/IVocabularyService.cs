using LingoSpeakBackend.DTOs;

namespace LingoSpeakBackend.Services.Interfaces;

public interface IVocabularyService
{
    Task<IEnumerable<VocabularyResponse>> GetAllVocabulariesAsync();
    Task<VocabularyResponse> GetVocabularyByIdAsync(int id);
    Task<VocabularyResponse> CreateVocabularyAsync(VocabularyCreateRequest request);
    Task<bool> UpdateVocabularyAsync(int id, VocabularyUpdateRequest request);
    Task<bool> DeleteVocabularyAsync(int id);

    Task<VocabularyItemResponse> CreateItemAsync(int vocabularyId, VocabularyItemCreateRequest request);
    Task<bool> UpdateItemAsync(int vocabularyId, int itemId, VocabularyItemUpdateRequest request);
    Task<bool> DeleteItemAsync(int vocabularyId, int itemId);
}