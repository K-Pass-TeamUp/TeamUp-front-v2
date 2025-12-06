import { create } from 'zustand'
import type { TeamDetail, CreateTeamApiResponse } from '@/lib/services/team'

interface TeamStoreState {
  teams: TeamDetail[]
  selectedTeam: TeamDetail | null
  createTeamResult: CreateTeamApiResponse | null
  setTeams: (teams: TeamDetail[]) => void
  setSelectedTeam: (team: TeamDetail | null) => void
  setCreateTeamResult: (result: CreateTeamApiResponse | null) => void
}

export const useTeamStore = create<TeamStoreState>((set) => ({
  teams: [],
  selectedTeam: null,
  createTeamResult: null,
  setTeams: (teams) => set({ teams }),
  setSelectedTeam: (team) => set({ selectedTeam: team }),
  setCreateTeamResult: (result) => set({ createTeamResult: result }),
}))
