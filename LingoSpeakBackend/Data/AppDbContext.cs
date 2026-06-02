using LingoSpeakBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace LingoSpeakBackend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Conversation> Conversations { get; set; }
    public DbSet<ConversationMessage> ConversationMessages { get; set; }
    public DbSet<Vocabulary> Vocabularies { get; set; }
    public DbSet<VocabularyItem> VocabularyItems { get; set; }
    public DbSet<Translation> Translations { get; set; }
    public DbSet<StudiedConversation> StudiedConversations { get; set; }
    public DbSet<StudiedVocabulary> StudiedVocabularies { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ConversationMessage>()
            .HasOne(cm => cm.Conversation)
            .WithMany(c => c.Messages)
            .HasForeignKey(cm => cm.ConversationId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<ConversationMessage>()
            .HasOne(cm => cm.Content)
            .WithMany()
            .HasForeignKey(cm => cm.ContentId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<StudiedConversation>()
            .HasOne(sc => sc.User)
            .WithMany(u => u.StudiedConversations)
            .HasForeignKey(sc => sc.UserId);

        modelBuilder.Entity<StudiedVocabulary>()
            .HasOne(sv => sv.User)
            .WithMany(u => u.StudiedVocabularies)
            .HasForeignKey(sv => sv.UserId);

        modelBuilder.Entity<Vocabulary>()
            .HasOne(v => v.TopicName)
            .WithMany()
            .HasForeignKey(v => v.TopicNameId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<VocabularyItem>()
            .HasOne(v => v.Meaning)
            .WithMany()
            .HasForeignKey(v => v.MeaningId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<VocabularyItem>()
            .HasOne(v => v.VocabularyTopic)
            .WithMany(v => v.VocabularyItems)
            .HasForeignKey(v => v.VocabularyTopicId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}