using LingoSpeakBackend.DTOs;

namespace LingoSpeakBackend.Services.Interfaces;

public interface IUserService
{
    Task<IEnumerable<UserResponse>> GetAllUsersAsync();

    // Thêm logic kiểm tra chính chủ hoặc Admin bên trong Service
    Task<UserResponse> GetUserByIdAsync(Guid id, string currentUserId, string currentUserRole);

    Task<UserResponse> UpdateUserAsync(Guid id, UserUpdateRequest request, string currentUserId, string currentUserRole);

    Task<bool> DeleteUserAsync(Guid id);
}