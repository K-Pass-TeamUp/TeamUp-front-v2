import { create } from 'zustand'
import type { UserTeamResponse } from '../services/user'

interface UserState {
  userId: number | null
  userTeams: UserTeamResponse[]
  setUserId: (id: number) => void
  setUserTeams: (teams: UserTeamResponse[]) => void
}

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  userTeams: [],
  setUserId: (id) => set({ userId: id }),
  setUserTeams: (teams) => set({ userTeams: teams }),
}))
