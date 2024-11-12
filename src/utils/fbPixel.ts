interface CustomEvent {
  name: string;
  data?: Record<string, any>;
}

declare global {
  interface Window {
    fbq: any;
  }
}

export const trackCustomEvent = ({ name, data = {} }: CustomEvent): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, data);
  }
};

export const trackQuizStart = (): void => {
  trackCustomEvent({ name: 'StartQuiz' });
};

export const trackQuizComplete = (score: number): void => {
  trackCustomEvent({
    name: 'CompleteQuiz',
    data: { score }
  });
};

export const trackHabitTrackerStart = (): void => {
  trackCustomEvent({ name: 'StartHabitTracker' });
};

export const trackMoodEntry = (mood: number): void => {
  trackCustomEvent({
    name: 'LogMood',
    data: { mood }
  });
};