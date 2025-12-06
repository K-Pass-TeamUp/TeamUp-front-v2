import { create } from 'zustand'
import type { FinishGameFeedbackResponse, CreateReportResponse, AIFeedbackResponse } from '@/lib/services/coaching'

interface CoachingStoreState {
  feedbackResult: FinishGameFeedbackResponse | null
  reportResult: CreateReportResponse | null
  recentAIFeedbacks: AIFeedbackResponse[]
  setFeedbackResult: (result: FinishGameFeedbackResponse | null) => void
  setReportResult: (result: CreateReportResponse | null) => void
  setRecentAIFeedbacks: (feedbacks: AIFeedbackResponse[]) => void
}

export const useCoachingStore = create<CoachingStoreState>((set) => ({
  feedbackResult: null,
  reportResult: null,
  recentAIFeedbacks: [],
  setFeedbackResult: (result) => set({ feedbackResult: result }),
  setReportResult: (result) => set({ reportResult: result }),
  setRecentAIFeedbacks: (feedbacks) => set({ recentAIFeedbacks: feedbacks }),
}))
