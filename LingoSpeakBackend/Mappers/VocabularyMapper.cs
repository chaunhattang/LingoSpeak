using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Mappers;

public static class VocabularyMapper
{
    public static TranslationDto? ToTranslationDto(this Translation? translation)
    {
        if (translation == null) return null;

        return new TranslationDto
        {
            English = translation.English,
            Vietnamese = translation.Vietnamese
        };
    }
    public static ReadingPassageResponse? ToReadingPassageResponse(this ReadingPassage? readingPassage)
    {
        if (readingPassage == null) return null;

        return new ReadingPassageResponse
        {
            Id = readingPassage.Id,
            Title = readingPassage.Title.ToTranslationDto()!,
            Content = readingPassage.Content.ToTranslationDto()!
        };
    }

    private static bool HasContent(TranslationDto? t) =>
        !string.IsNullOrWhiteSpace(t?.English) || !string.IsNullOrWhiteSpace(t?.Vietnamese);

    public static VocabularyResponse ToVocabularyResponse(this Vocabulary topic)
    {
        if (topic == null) return null!;

        return new VocabularyResponse
        {
            Id = topic.Id,
            Image = topic.Image,
            TopicName = topic.TopicName.ToTranslationDto()!,
            VocabularyItems = topic.VocabularyItems?
                .Select(item => item.ToItemResponse())
                .ToList() ?? new List<VocabularyItemResponse>(),
            Conversation = topic.Conversation.ToConversationResponse(),
            Reading = topic.ReadingPassage.ToReadingPassageResponse()
        };
    }

    private static List<ConversationMessage> BuildMessages(List<MessageDto>? messages)
    {
        var result = new List<ConversationMessage>();
        if (messages == null) return result;

        foreach (var m in messages)
        {
            result.Add(new ConversationMessage
            {
                SenderName = m.SenderName ?? string.Empty,
                Content = new Translation
                {
                    English = m.Translation?.English ?? string.Empty,
                    Vietnamese = m.Translation?.Vietnamese ?? string.Empty
                },
                Order = m.Order ?? 0
            });
        }

        return result;
    }

    public static Vocabulary ToVocabulary(this VocabularyCreateRequest request)
    {
        if (request == null) return null!;

        var vocabulary = new Vocabulary
        {
            Image = request.Image != null ? request.Image.FileName : null,
            TopicName = new Translation
            {
                English = request.TopicName.English ?? "",
                Vietnamese = request.TopicName.Vietnamese ?? ""
            }
        };

        if (request.Speaker1Name != null || request.Speaker2Name != null || (request.Messages != null && request.Messages.Count > 0))
        {
            vocabulary.Conversation = new Conversation
            {
                Speaker1Name = request.Speaker1Name,
                Speaker2Name = request.Speaker2Name,
                Messages = BuildMessages(request.Messages)
            };
        }

        if (HasContent(request.ReadingTitle) || HasContent(request.ReadingContent))
        {
            vocabulary.ReadingPassage = new ReadingPassage
            {
                Title = new Translation
                {
                    English = request.ReadingTitle?.English ?? "",
                    Vietnamese = request.ReadingTitle?.Vietnamese ?? ""
                },
                Content = new Translation
                {
                    English = request.ReadingContent?.English ?? "",
                    Vietnamese = request.ReadingContent?.Vietnamese ?? ""
                }
            };
        }

        return vocabulary;
    }

    public static void UpdateVocabularyFromDto(this Vocabulary existingVocabulary, VocabularyUpdateRequest request)
    {
        if (request == null) return;

      

        if (request.TopicName != null)
        {
            if (existingVocabulary.TopicName == null)
            {
                existingVocabulary.TopicName = new Translation
                {
                    English = request.TopicName.English ?? "",
                    Vietnamese = request.TopicName.Vietnamese ?? ""
                };
            }
            existingVocabulary.TopicName.English = request.TopicName.English ?? existingVocabulary.TopicName.English;
            existingVocabulary.TopicName.Vietnamese = request.TopicName.Vietnamese ?? existingVocabulary.TopicName.Vietnamese;
        }

        if (request.Speaker1Name != null || request.Speaker2Name != null || request.Messages != null)
        {
            existingVocabulary.Conversation ??= new Conversation();

            if (request.Speaker1Name != null) existingVocabulary.Conversation.Speaker1Name = request.Speaker1Name;
            if (request.Speaker2Name != null) existingVocabulary.Conversation.Speaker2Name = request.Speaker2Name;

            if (request.Messages != null)
            {
                existingVocabulary.Conversation.Messages.Clear();
                existingVocabulary.Conversation.Messages.AddRange(BuildMessages(request.Messages));
            }
        }

        if (HasContent(request.ReadingTitle) || HasContent(request.ReadingContent))
        {
            if (existingVocabulary.ReadingPassage == null)
            {
                existingVocabulary.ReadingPassage = new ReadingPassage
                {
                    Title = new Translation(),
                    Content = new Translation()
                };
            }

            if (request.ReadingTitle != null)
            {
                existingVocabulary.ReadingPassage.Title.English = request.ReadingTitle.English ?? existingVocabulary.ReadingPassage.Title.English;
                existingVocabulary.ReadingPassage.Title.Vietnamese = request.ReadingTitle.Vietnamese ?? existingVocabulary.ReadingPassage.Title.Vietnamese;
            }

            if (request.ReadingContent != null)
            {
                existingVocabulary.ReadingPassage.Content.English = request.ReadingContent.English ?? existingVocabulary.ReadingPassage.Content.English;
                existingVocabulary.ReadingPassage.Content.Vietnamese = request.ReadingContent.Vietnamese ?? existingVocabulary.ReadingPassage.Content.Vietnamese;
            }
        }
    }

    public static VocabularyItemResponse ToItemResponse(this VocabularyItem item)
    {
        if (item == null) return null!;

        return new VocabularyItemResponse
        {
            Id = item.Id,
            IPA = item.IPA,
            WordType = item.WordType,
            Description = item.Description,
            Image = item.Image,
            VocabularyTopicId = item.VocabularyTopicId,
            Meaning = item.Meaning.ToTranslationDto()!
        };
    }

    public static VocabularyItem ToVocabularyItem(this VocabularyItemCreateRequest request)
    {
        if (request == null) return null!;

        return new VocabularyItem
        {
            IPA = request.IPA,
            WordType = request.WordType,
            Description = request.Description,
            VocabularyTopicId = request.VocabularyTopicId,
            Image = request.Image != null ? request.Image.FileName : null,
            Meaning = new Translation
            {
                English = request.Meaning.English ?? "",
                Vietnamese = request.Meaning.Vietnamese ?? ""
            }
        };
    }

    public static void UpdateItemFromDto(this VocabularyItem existingItem, VocabularyItemUpdateRequest request)
    {
        if (request == null) return;

        if (request.IPA != null) existingItem.IPA = request.IPA;
        if (request.WordType != null) existingItem.WordType = request.WordType;
        if (request.Description != null) existingItem.Description = request.Description;

        if (request.Meaning != null)
        {
            if (existingItem.Meaning == null)
            {
                existingItem.Meaning = new Translation();
            }
            existingItem.Meaning.English = request.Meaning.English ?? existingItem.Meaning.English;
            existingItem.Meaning.Vietnamese = request.Meaning.Vietnamese ?? existingItem.Meaning.Vietnamese;
        }
    }
}