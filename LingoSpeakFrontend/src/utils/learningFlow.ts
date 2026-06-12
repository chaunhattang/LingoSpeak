import type { Vocabulary } from "../types/api";
import type { User } from "../types/user";

export type LearningStep = "flashcard" | "conversation" | "word" | "reading";

export function getLearningSteps(topic: Vocabulary): LearningStep[] {
  const steps: LearningStep[] = [];
  const hasItems = topic.vocabularyItems.length > 0;

  if (hasItems) steps.push("flashcard");
  if (topic.conversation !== null) steps.push("conversation");
  if (hasItems) steps.push("word");
  if (topic.reading !== null) steps.push("reading");

  return steps;
}

export function getStepPath(topicId: string | number, step: LearningStep): string {
  switch (step) {
    case "flashcard":
      return `/topics/${topicId}/falastcard`;
    case "conversation":
      return `/topics/${topicId}/practice`;
    case "word":
      return `/topics/${topicId}/word`;
    case "reading":
      return `/topics/${topicId}/reading`;
  }
}

export function getTopicProgress(topic: Vocabulary, user: User | null): number {
  if (!user) return 0;

  const ratios: number[] = [];

  if (topic.vocabularyItems.length > 0) {
    const studied = topic.vocabularyItems.filter((item) =>
      user.studiedVocabularyIds.includes(item.id),
    ).length;
    ratios.push(studied / topic.vocabularyItems.length);
  }

  if (topic.conversation) {
    ratios.push(user.studiedConversationIds.includes(topic.conversation.id) ? 1 : 0);
  }

  if (topic.reading) {
    ratios.push(user.studiedReadingPassageIds.includes(topic.reading.id) ? 1 : 0);
  }

  if (ratios.length === 0) return 0;

  const average = ratios.reduce((sum, r) => sum + r, 0) / ratios.length;
  return Math.round(average * 100);
}

export function getNextStepPath(topic: Vocabulary, current: LearningStep): string {
  const steps = getLearningSteps(topic);
  const currentIndex = steps.indexOf(current);

  if (currentIndex === -1 || currentIndex === steps.length - 1) {
    return `/topics/${topic.id}`;
  }

  return getStepPath(topic.id, steps[currentIndex + 1]);
}
