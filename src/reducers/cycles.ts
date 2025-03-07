import { produce } from 'immer'

import { Cycle } from "../contexts/CyclesContext"

export enum ActionTypes {
  ADD = 'ADD',
  INTERRUPT = 'INTERRUPT',
  FINISH = 'FINISH',
}

export type CyclesState = {
  cycles: Cycle[]
  activeCycleId: string | null
}

type AddCyclesAction = {
  type: ActionTypes.ADD
  payload: {
    newCycle: Cycle
  }
}

type StopCyclesAction = {
  type: ActionTypes.INTERRUPT | ActionTypes.FINISH
  payload: {
    activeCycleId: string | null
  }
}

export type CyclesAction =
  | AddCyclesAction
  | StopCyclesAction

export function cyclesStateReducer(state: CyclesState, action: CyclesAction) {
  switch (action.type) {
    case ActionTypes.ADD:
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT:
    case ActionTypes.FINISH: {
      const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId)
      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, draft => {
        draft.activeCycleId = null
        if (action.type === ActionTypes.INTERRUPT)
          draft.cycles[currentCycleIndex].interruptedDate = new Date()
        else
          draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }
}

export function cyclesReducer(draft: CyclesState, action: CyclesAction) {
  switch (action.type) {
    case ActionTypes.ADD: {
      draft.cycles.push(action.payload.newCycle)
      draft.activeCycleId = action.payload.newCycle.id
      return draft
    }
    case ActionTypes.INTERRUPT:
    case ActionTypes.FINISH: {
      const cycle = draft.cycles.find(cycle => cycle.id === action.payload.activeCycleId)
      if (cycle) {
        if (action.type === ActionTypes.INTERRUPT)
          cycle.interruptedDate = new Date()
        else
          cycle.finishedDate = new Date()
      }
      draft.activeCycleId = null
      return draft
    }
    default:
      return draft
  }
}
