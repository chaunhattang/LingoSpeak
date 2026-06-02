using Microsoft.AspNetCore.Http;

namespace LingoSpeakBackend.Services.Interfaces;

public interface IFileStorageService
{
    Task<string> SaveFileAsync(IFormFile file);
    void DeleteFile(string fileName);
}