using LingoSpeakBackend.DTOs;
using LingoSpeakBackend.Models;

namespace LingoSpeakBackend.Mappers;

public static class ConversationMapper
{
    public static MessageDto ToMessageDto(this ConversationMessage message)
    {
        if (message == null) return null!;

        return new MessageDto
        {
            SenderName = message.SenderName,
            Translation = message.Content != null ? message.Content.ToTranslationDto() : null,
            Order = message.Order
        };
    }

    public static ConversationResponse ToConversationResponse(this Conversation conversation)
    {
        if (conversation == null) return null!;

        return new ConversationResponse
        {
            Id = conversation.Id,
            Topic = conversation.Topic,
            Speaker1Name = conversation.Speaker1Name,
            Speaker2Name = conversation.Speaker2Name,
            Image = conversation.Image,
            Messages = conversation.Messages != null
                ? conversation.Messages.Select(m => m.ToMessageDto()).ToList()
                : new List<MessageDto>()
        };
    }

    public static Conversation ToConversation(this ConversationCreateRequest request)
    {
        if (request == null) return null!;

        var conversation = new Conversation
        {
            Topic = request.Topic,
            Speaker1Name = request.Speaker1Name,
            Speaker2Name = request.Speaker2Name,
            Messages = new List<ConversationMessage>()
        };

        if (request.Messages != null)
        {
            foreach (var m in request.Messages)
            {
                conversation.Messages.Add(new ConversationMessage
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
        }

        return conversation;
    }
}