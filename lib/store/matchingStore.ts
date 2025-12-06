import { create } from 'zustand'
import type { MatchRequest } from '@/lib/services/matching'

interface MatchingStoreState {
  receivedMatchRequests: MatchRequest[]
  sentMatchRequests: MatchRequest[]
  matchRequestDetail: MatchRequest | null
  setReceivedMatchRequests: (requests: MatchRequest[]) => void
  setSentMatchRequests: (requests: MatchRequest[]) => void
  setMatchRequestDetail: (request: MatchRequest | null) => void
}

export const useMatchingStore = create<MatchingStoreState>((set) => ({
  receivedMatchRequests: [],
  sentMatchRequests: [],
  matchRequestDetail: null,
  setReceivedMatchRequests: (requests) => set({ receivedMatchRequests: requests }),
  setSentMatchRequests: (requests) => set({ sentMatchRequests: requests }),
  setMatchRequestDetail: (request) => set({ matchRequestDetail: request }),
}))
