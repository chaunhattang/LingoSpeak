using LingoSpeakBackend.Models;
using Microsoft.EntityFrameworkCore;
using BCryptNet = BCrypt.Net.BCrypt;

namespace LingoSpeakBackend.Data;

public static class DbSeeder
{
    public static async Task SeedDataAsync(IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        await context.Database.MigrateAsync();

        if (!await context.Users.AnyAsync(u => u.Email == "admin@gmail.com"))
        {
            var admin = new User
            {
                Id = Guid.NewGuid(),
                Email = "admin@gmail.com",
                Password = BCryptNet.HashPassword("admin12345"), 
                Role = "ADMIN",
                FullName = "Quản trị viên"
            };
            await context.Users.AddAsync(admin);
        }

        if (!await context.Users.AnyAsync(u => u.Email == "user@gmail.com"))
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = "user@gmail.com",
                Password = BCryptNet.HashPassword("user12345"), 
                Role = "USER",
                FullName = "Người dùng Test"
            };
            await context.Users.AddAsync(user);
        }

        await context.SaveChangesAsync();
    }
}