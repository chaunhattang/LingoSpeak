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

    public static ConversationResponse? ToConversationResponse(this Conversation? conversation)
    {
        if (conversation == null) return null;

        return new ConversationResponse
        {
            Id = conversation.Id,
            Speaker1Name = conversation.Speaker1Name,
            Speaker2Name = conversation.Speaker2Name,
            Messages = conversation.Messages != null
                ? conversation.Messages.OrderBy(m => m.Order).Select(m => m.ToMessageDto()).ToList()
                : new List<MessageDto>()
        };
    }
}