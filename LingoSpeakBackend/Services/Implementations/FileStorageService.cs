using LingoSpeakBackend.Exceptions;
using LingoSpeakBackend.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace LingoSpeakBackend.Services.Implementations;

public class FileStorageService : IFileStorageService
{
    private readonly string _baseUploadsPath;
    private readonly string _imagesPath;
    private readonly string _videosPath;

    private readonly string[] _allowedImageTypes = { "image/jpeg", "image/png", "image/gif", "image/webp" };
    private readonly string[] _allowedVideoTypes = { "video/mp4", "video/mpeg", "video/quicktime", "video/webm" };

    public FileStorageService(IWebHostEnvironment env)
    {
        _baseUploadsPath = Path.Combine(env.ContentRootPath, "uploads");
        _imagesPath = Path.Combine(_baseUploadsPath, "images");
        _videosPath = Path.Combine(_baseUploadsPath, "videos");
    }

    public async Task<string> SaveFileAsync(IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            throw new BadRequestException("File tải lên trống hoặc không hợp lệ.");
        }

        string targetFolder;

        if (_allowedImageTypes.Contains(file.ContentType.ToLower()))
        {
            targetFolder = _imagesPath;
        }
        else if (_allowedVideoTypes.Contains(file.ContentType.ToLower()))
        {
            targetFolder = _videosPath;
        }
        else
        {
            throw new BadRequestException("Định dạng file không được hỗ trợ. Chỉ chấp nhận ảnh (jpg, png, webp) hoặc video (mp4, webm).");
        }

        if (!Directory.Exists(targetFolder))
        {
            Directory.CreateDirectory(targetFolder);
        }

        var extension = Path.GetExtension(file.FileName);
        var uniqueFileName = $"{Guid.NewGuid():N}{extension}";

        var fullPath = Path.Combine(targetFolder, uniqueFileName);

        using (var stream = new FileStream(fullPath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        return uniqueFileName;
    }

    public void DeleteFile(string fileName)
    {
        if (string.IsNullOrEmpty(fileName)) return;

        var imageFilePath = Path.Combine(_imagesPath, fileName);
        var videoFilePath = Path.Combine(_videosPath, fileName);

        if (File.Exists(imageFilePath))
        {
            File.Delete(imageFilePath);
        }
        else if (File.Exists(videoFilePath))
        {
            File.Delete(videoFilePath);
        }
    }
}