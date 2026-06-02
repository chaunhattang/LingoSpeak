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
                .ToList() ?? new List<VocabularyItemResponse>()
        };
    }

    public static Vocabulary ToVocabulary(this VocabularyCreateRequest request)
    {
        if (request == null) return null!;

        return new Vocabulary
        {
            Image = request.Image != null ? request.Image.FileName : null,
            TopicName = new Translation
            {
                English = request.TopicName.English ?? "",
                Vietnamese = request.TopicName.Vietnamese ?? ""
            }
        };
    }

    public static void UpdateVocabularyFromDto(this Vocabulary existingVocabulary, VocabularyUpdateRequest request)
    {
        if (request == null) return;

        if (request.Image != null) existingVocabulary.Image = request.Image.FileName;

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
        if (request.Image != null) existingItem.Image = request.Image.FileName;

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