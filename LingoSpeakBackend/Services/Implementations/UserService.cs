using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Exceptions;
using LingoSpeakBackend.Mappers;
using LingoSpeakBackend.Repositories.Interfaces;
using LingoSpeakBackend.Services.Interfaces;
using BCryptNet = BCrypt.Net.BCrypt;

namespace LingoSpeakBackend.Services.Implementations;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepo;
    private readonly IFileStorageService _fileStorageService;

    public UserService(IUserRepository userRepo, IFileStorageService fileStorageService)
    {
        _userRepo = userRepo;
        _fileStorageService = fileStorageService;
    }

    public async Task<IEnumerable<UserResponse>> GetAllUsersAsync()
    {
        var users = await _userRepo.GetAllAsync();
        return users.Select(u => u.ToUserResponse()).ToList();
    }

    public async Task<UserResponse> GetUserByIdAsync(Guid id, string currentUserId, string currentUserRole)
    {
        if (currentUserRole != "ADMIN" && currentUserId != id.ToString())
        {
            throw new UnauthorizedException("Bạn không được phép truy cập hoặc xem thông tin hồ sơ của người dùng khác.");
        }

        var user = await _userRepo.GetByIdAsync(id);
        if (user == null)
        {
            throw new NotFoundException($"Không tìm thấy tài khoản người dùng nào có mã ID: {id}");
        }

        return user.ToUserResponse();
    }

    public async Task<UserResponse> UpdateUserAsync(Guid id, UserUpdateRequest request, string currentUserId, string currentUserRole)
    {
        if (currentUserRole != "ADMIN" && currentUserId != id.ToString())
        {
            throw new UnauthorizedException("Bạn không được phép thực hiện chỉnh sửa hồ sơ của người dùng khác.");
        }

        var user = await _userRepo.GetByIdAsync(id);
        if (user == null)
        {
            throw new NotFoundException($"Không tìm thấy người dùng mã ID: {id}");
        }

        if (request.Image != null)
        {
            if (!string.IsNullOrEmpty(user.Image))
            {
                _fileStorageService.DeleteFile(user.Image);
            }

            var savedFileName = await _fileStorageService.SaveFileAsync(request.Image);
            user.Image = savedFileName;
        }

        if (!string.IsNullOrEmpty(request.Password))
        {
            user.Password = BCryptNet.HashPassword(request.Password);
        }
        if (!string.IsNullOrEmpty(request.FullName))
        {
            user.FullName = request.FullName;
        }
        if (!string.IsNullOrEmpty(request.Role) && currentUserRole == "ADMIN")
        {
            user.Role = request.Role;
        }

        _userRepo.Update(user);
        await _userRepo.SaveChangesAsync();

        return user.ToUserResponse();
    }

    public async Task<bool> DeleteUserAsync(Guid id)
    {
        var user = await _userRepo.GetByIdAsync(id);
        if (user == null)
        {
            throw new NotFoundException($"Không thể xóa vì không tìm thấy tài khoản người dùng có mã ID: {id}");
        }

        _userRepo.Delete(user);
        return await _userRepo.SaveChangesAsync();
    }
}